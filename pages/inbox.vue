<template>
  <div class="inbox">
    <sidebar
      :archiveName="archiveName"
      :read="selected.read"
      :isOpen="isOpen"
      @keydown.esc="closeSidebar"
      @keydown="handleKeydown"
      @mark:unread="closeAndUnRead"
      @mark:archive="archiveItem"
      tabindex="0"
      @close:sidebar="closeSidebar"
    >
      <template v-slot:child>
        <email-view :data="selected" />
      </template>
    </sidebar>
    <div class="title">Inbox</div>
    <Checkbox
      :data="selectCheck"
      :number="count"
      :showControl="true"
      :title="'Email Selected'"
      :archiveName="archiveName"
      @selectAll="handleSelect"
      @mark:read="markRead"
      @mark:archive="archive"
    ></Checkbox>

    <div class="email-list" v-for="(item, index) of ListItems" :key="index">
      <Checkbox
        @mail:selected="mailSelected"
        @select="itemSelected(item, $event)"
        :data="item"
      ></Checkbox>
    </div>
  </div>
</template>

<script setup>
const List = useSharedList();
const archiveMessages = useArchiveMessages();
const selected = ref({ title: '', isChecked: false, Content: '' });
const isOpen = ref(false);
const archiveName = ref('archive')


const selectCheck = ref({
  isChecked: false,
  title: 'Email Selected',
});

const handleSelect = (e) => {
  if (e) {
    for (let a of List.value) {
      itemSelected(a, true);
      a.isChecked = true;
    }
  } else {
    for (let a of List.value) {
      itemSelected(a, false);
      a.isChecked = false;
    }
  }
};

const mailSelected = (e) => {
  isOpen.value = true;
  selected.value = e;
};

const closeSidebar = () => {
  isOpen.value = false;
  selected.value.read = true;
};

const itemSelected = (itm, c) => {
  isOpen.value = false;
  itm.isChecked = c;
};
const markRead = () => {
  for (let a = 0; a < List.value.length; a++) {
    if (List.value[a].isChecked) {
      List.value[a].read = true;
    }
  }
};

const archive = () => {
  const listCopy = [...List.value];

  for (let a = 0; a < listCopy.length; a++) {
    if (listCopy[a].isChecked) {
      listCopy[a].isChecked = false;
      archiveMessages.value.push(listCopy[a]);
      List.value = List.value.filter((x) => x.id !== listCopy[a].id);
    }
  }
};

const ListItems = computed(() => {
  let c = 0;
  const list = [];
  for (let a = 0; a < List.value.length; a++) {
    List.value[a].archive ? c++ : list.push(List.value[a]);
  }
  return list;
});

const count = computed(() => {
  let c = 0;
  for (let a = 0; a < List.value.length; a++) {
    if (List.value[a].isChecked && !List.value[a].archive) {
      c++;
    }
  }
  return c;
});

const closeAndUnRead = () => {
  closeSidebar();
  markUnRead();
};

const archiveItem = () => {
  const idx = List.value.findIndex((x) => x.id === selected.value.id);
  archiveMessages.value.push(List.value[idx]);
  List.value = List.value.filter((x) => x.id !== selected.value.id);
  closeSidebar();
};

const handleKeydown = (e) => {
  if (e.key == 'r') {
    closeAndUnRead();
  }

  if (e.key == 'a') {
    archiveItem();
  }
};

const markUnRead = () => {
  const itm = List.value.find((v) => v.id === selected.value.id);
  itm.read = false;
  selected.value.read = false;
};
</script>

<style lang="scss" scoped>
.inbox {
  width: 100%;
  .title {
    padding: 10px 25px;
    font-size: 30px;
    font-weight: bold;
    // margin:0px 20px;
  }
  // margin: 15px 30px;
}
</style>

<template>
  <div class="inbox">
    <sidebar
      @keydown.esc="closeSidebar"
      @keydown="handleKeydown"
      @mark:unread="closeAndUnRead"
      @mark:un-archive="unarchiveItem"
      :archiveName="archiveName"
      tabindex="0"
      :read="selected.read"
      :isOpen="isOpen"
      :archive="selected.archive"
      @close:sidebar="closeSidebar"
    >
      <template v-slot:child>
        <email-view :data="selected" />
      </template>
    </sidebar>
    <div class="title">Archive</div>
    <Checkbox
      :data="selectCheck"
      :number="count"
      :showControl="true"
      :title="'Email Selected'"
      :archiveName="archiveName"
      @selectAll="handleSelect"
      @mark:read="markRead"
      @mark:archive="unarchive"
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
const List = useArchiveMessages()
const emailList = useSharedList()
const selected = ref({ title: '', isChecked: false, Content: '' });
const isOpen = ref(false);
const archiveName = ref('un-archive')

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
  itm.isChecked = c
  
};
const markRead = () => {
  for (let a=0; a<List.value.length; a++) {
    if (List.value[a].isChecked ){
      List.value[a].read = true
    }
  }
};


const unarchive = () => {
  const listCopy = [...List.value];

  for (let a = 0; a < listCopy.length; a++) {
    if (listCopy[a].isChecked) {
      listCopy[a].isChecked = false;
      emailList.value.push(listCopy[a]);
      List.value = List.value.filter(x => x.id !== listCopy[a].id);
    }
  }
};

const ListItems = computed( () => {
  let c = 0
  const list = []
  for (let a=0; a<List.value.length; a++) {
    List.value[a].archive ? c++ : list.push(List.value[a])
  }
  return list
})

const count = computed(() => {
  let c = 0 
  for (let a=0; a<List.value.length; a++) {
    if (List.value[a].isChecked && !List.value[a].archive ){
      c++
    }
  }
  return c
});

const closeAndUnRead = (e) => {
  closeSidebar()
    markUnRead()
}

const handleKeydown = (e) => {
  if (e.key == 'r'){
    closeSidebar()
    markUnRead()
  }

  if (e.key == 'a'){
    const idx = List.value.findIndex(x => x.id === selected.value.id)
    archiveMessages.value.push(List.value[idx])
    List.value = List.value.filter(x => x.id !== selected.value.id)
    closeSidebar()
  }
}

const markUnRead = () => {
    const itm = List.value.find((v) => v.id === selected.value.id);
    itm.read = false;
    selected.value.read = false;
};

const unarchiveItem = () => {
    const idx = List.value.findIndex(x => x.id === selected.value.id)
    emailList.value.push(List.value[idx])
    List.value = List.value.filter(x => x.id !== selected.value.id)
    closeSidebar()

}

</script>

<style lang="scss" scoped>
.inbox {
  width: 100%;
  .title {
    padding: 10px 25px;
    font-size: 30px;
    font-weight: bold;
  }
}
</style>

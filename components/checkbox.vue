<template>
  <div class="checkbox-component" @click="mailSelected" 
  :class="{'add-attr':!props.showControl, 'read':props.data.read }">
    <div class="container">
      <div class="left">
        <div class="checkbox-container">
          <input
            class="checkBox"
            @input="handleSelect"
            type="checkbox"
            :checked="props.data.isChecked"
          />&nbsp;&nbsp;
          <label class="mailLabel">
            {{ props.data.title}}
            <span v-if="displayNumber">{{ number }}</span>
          </label>
        </div>
      </div>
      <div class="right" v-if="props.showControl">
        <div class="item" @click="markAsRead">
          <img
            class="nav__svg-icon"
            src="~/assets/svg/mail-04.svg"
            alt="SVG Icon"
          />&nbsp;&nbsp;
          <div class="nav__text">Mark as read (r)</div>
        </div>
        <div class="item" @click="archive">
          <img
            class="nav__svg-icon"
            src="~/assets/svg/trash-01.svg"
            alt="SVG Icon"
          />&nbsp;&nbsp;
          <div class="nav__text">{{ props.archiveName }}</div>
        </div>
      </div>
    </div>

    <border-bottom />
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  data:{
    type: Object,
    default: {
      title: String,
      isChecked: Boolean,
      read:Boolean,
      content:String
    },
    
  },
  archiveName: {
    type: String,
    default: "",
  },
  showControl: {
    type: Boolean,
    default: false,
  },
  number: {
    type: Number,
    default: null,
  },
});
const emit = defineEmits(['selectAll','select','mail:selected','mark:read','mark:archive']);

const displayNumber = props.number !== null;
const showControl = ref(props.showControl);

const handleSelect = (e) => {
  const value = e.target.checked;
  showControl.value ? emit('selectAll', value) : emit('select', value);
};
const mailSelected = (e) => {
  emit('mail:selected',props.data)
};
const markAsRead = () =>  {
  emit('mark:read')
}
const archive = () => {
  emit('mark:archive')
}
</script>

<style lang="scss" scoped>
.add-attr:hover{
  background-color: #D1E2FF;
  cursor: pointer;
}
.read {
  background-color: #F3F6FB; 
  opacity: 0.5;
}
.container {
  padding: 24px 15px;

  input[type='checkbox'] {
    -ms-transform: scale(2); /* IE */
    -moz-transform: scale(2); /* FF */
    -webkit-transform: scale(2); /* Safari and Chrome */
    -o-transform: scale(2); /* Opera */
    transform: scale(1.5);
    padding: 30px;
  }

  display: flex;
  justify-content: space-between;

  .right {
    // width: 30%;
    cursor: pointer;
    display: flex;
    align-items: center;

    .item {
      display: flex;
      padding: 0px 25px 0px 0px;
    }
  }
}

.nav__text {
  text-transform: capitalize;

}
.checkbox-container {
  margin: 10px 15px;
}

// .checkbox-container {
//   /* display: flex;
//   align-items: center; */
// }

// .checkbox-container span {
//   /* margin-left: 10px; */
// }
</style>

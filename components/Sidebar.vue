<template>
  <div class="sidebar" :class="{ 'sidebar--open': props.isOpen }">
    <div class="sidebar__left" @click="close"></div>
    <div class="sidebar__right">
      <div class="container">
        <div class="top-bar">
          <div class="top-bar__left">
            <div class="top-bar__item" @click="close">
              <img
                class="top-bar__icon"
                src="~/assets/svg/x-close.svg"
                alt="SVG Icon"
              />&nbsp;&nbsp;
              <div class="top-bar__text">Close (Esc)</div>
            </div>
          </div>
          <div class="top-bar__right">
            <div class="top-bar__item" @click="markAsUnRead">
              <img
                class="top-bar__icon"
                src="~/assets/svg/mail-04.svg"
                alt="SVG Icon"
              />&nbsp;&nbsp;
              <div class="top-bar__text">Mark as unread (r)</div>
            </div>
            <div class="top-bar__item" @click="archiveFN">
              <img
                class="top-bar__icon"
                src="~/assets/svg/trash-01.svg"
                alt="SVG Icon"
              />&nbsp;&nbsp;
              <div class="top-bar__text">{{props.archiveName }}</div>
            </div>
          </div>
        </div>
        <div class="mail-content">
          <slot name="child"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  read: {
    type: Boolean,
    default: false,
  },
  archiveName: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["close:sidebar",'mark:unread','mark:archive','mark:un-archive'])
const archiveName = ref(props.archiveName)
const close = () => {
  emit('close:sidebar')
}
const markAsUnRead = () =>  {
  emit('mark:unread')
}
const archiveFN = () => {
  archiveName.value == "un-archive" ? emit("mark:un-archive") : emit('mark:archive') 
}
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  width: 0;
  height: 100%;
  overflow-x: hidden;
  transition: width 0.3s ease;
  z-index: 1;
  right: 0;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  margin: 25px 15px 25px 40px ;

  &__right {
    display: flex;
    
  }
  &__text{
    text-transform: capitalize;
  }
  &__item{
    cursor: pointer;
    display: flex;
    padding: 0px 30px 0px 0px;

  }
}

.sidebar__left,
.sidebar__right {
  height: 100%;
  position: absolute;
  top: 0;
  width: 70%;
}

.sidebar__left {
  opacity: 1;
  background-color: rgba(76, 87, 100, 0.7);
  left: 0;
  // backdrop-filter: blur(5px); /* Add blur effect to the left side */
}

.sidebar__right {
  background-color: white;
  right: 0;
}

.sidebar--open {
  width: 100%;
}
</style>

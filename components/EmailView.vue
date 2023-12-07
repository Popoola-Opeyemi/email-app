<template>
  <div class="email-view">
    <div class="title">
      {{ props.data.title }}
    </div>
    <div class="content">
      {{ props.data.content }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: {
      title: String,
      isChecked: Boolean,
    },
  },
});

const data = ref(props.data)
</script>

<style lang="scss" scoped>
.email-view{
  margin: 40px;
  .title{
    font-size: 20px;
    font-weight: bold;
  }
  .content{
    padding: 30px 0px;
  }
}
</style>

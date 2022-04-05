<template>
  <div class="list">
    <div class="item" v-for="item in list" :key="item.id">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentDislay",
  props: {
    list: {
      type: Array,
      default: ()=>[]
    },
  },
};
</script>


<style scoped>
</style>

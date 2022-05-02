<template>
  <div class="list">
    <div class="item" v-for="item in list" :key="item.id">
      <br />
      <span>{{ item.date }}</span> - <span>{{ item.category }}</span> -
      <span>{{ item.value }}</span> -
      <span class="action" @click="onClickContextItem($event, item)">...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentDislay",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    editItem(item) {
      console.log(item);
      console.log(this.$store.state.paymentList)
      this.$modal.show("AddPaymentForm", {
        content: "addpaymentform",
        title: "Редактирование",
        id: item.id
      });
    },
    deleteItem(id) {
      let delObjIndex = (element) => element.id == id;
      let idx = this.$store.state.paymentList.findIndex(delObjIndex);
      this.$store.state.paymentList.splice(idx, 1);
      
    },
    onClickContextItem(event, item) {
      const items = [
        {
          text: "Редактировать",
          action: () => {
            this.editItem(item);
          },
        },
        {
          text: "Удалить",
          action: () => {
            this.deleteItem(item.id);
          },
        },
      ];
      this.$contextMenu.show({ event, items });
    },
  },
};
</script>


<style scoped>
.action {
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
}
</style>

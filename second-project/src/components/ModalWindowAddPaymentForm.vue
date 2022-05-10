<template>
  <div class="wrapper">
    <div class="header">{{ settings.title }}</div>
    <div class="content">
      <add-payment-form :settings="settings" />
    </div>
    <div class="footer">
      <button @click="onCloseClick">Close</button>
    </div>
  </div>
</template>

<script>
import AddPaymentForm from "./AddPaymentForm.vue";
export default {
  name: "ModalWindowAddPaymentForm",
  props: {
    settings: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    AddPaymentForm,
  },

  methods: {
    onCloseClick() {
      this.$modal.hide();
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 20px;
  position: absolute;
  top: 16%;
  left: 45%;
  background-color: gold;
  border-radius: 4%;
}
</style>
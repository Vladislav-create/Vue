<template>
  <!-- <v-dialog v-model="dialog"> -->
    
    <div class="wrapper">
      <v-card class="ma-16" color="#cccccc">
      <div class="header">{{ settings.title }}</div>
      
        <!-- <div class="content"> -->
        <AddPaymentForm :settings="settings" />
      <!-- </div> -->
      
      
        <!-- <button @click="onCloseClick">Close</button> -->
        
      
      </v-card>
    </div>
  <!-- </v-dialog> -->
  <!-- <div class="wrapper">
      <div class="header">{{ settings.title }}</div>
      <div class="content">
        <AddPaymentForm :settings="settings" />
      </div>
      <div class="footer">
        <button @click="onCloseClick">Close</button>
      </div>
    </div> -->
</template>

<script>
import AddPaymentForm from "./AddPaymentForm.vue";
export default {
  name: "ModalWindowAddPaymentForm",
  data() {
    return {
      
    };
  },
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
    // onCloseClick() {
    //   this.$modal.hide();
    // },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 20px;
  position: absolute;
  top: 6%;
  left: 40%;
  border-radius: 4%;
}
</style>

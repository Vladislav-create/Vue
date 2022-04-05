<template>
  <div id="app">
    <div class="wrapper">
      <header>
        <div class="title">Мой дневник затрат</div>
      </header>
      <main>
        <button @click="showForm">{{ textBtn }}</button>
        <div v-show="showBtnAdd">
          <AddPaymentForm @addNewPayment="addData" />
        </div>
        <PaymentDisplay :list="paymentsList" />
      </main>
    </div>
  </div>
</template>

<script>
import AddPaymentForm from "./components/AddPaymentForm.vue";
import PaymentDisplay from "./components/PaymentDisplay.vue";
export default {
  name: "App",
  components: {
    PaymentDisplay,
    AddPaymentForm,
  },
  data() {
    return {
      showBtnAdd: false,
      textBtn: "Показать форму",
    };
  },
  methods: {
    showForm() {
      if (this.showBtnAdd === false) {
        this.showBtnAdd = true;
        this.textBtn = "Скрыть форму";
      } else {
        this.showBtnAdd = false;
        this.textBtn = "Показать форму";
      }
    },
    addData(data) {
      this.$store.commit("addDataPaymentList", data);
    },
  },
  created() {
    // this.$store.commit('getDataApp', this.fetchData())
    this.$store.dispatch("fetchData");
  },
  computed: {
    paymentsList() {
      return this.$store.getters.getPaymentList;
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.title {
  font-size: 30px;
  margin-bottom: 50px;
}
</style>

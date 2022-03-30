<template>
  <div id="app">
    <div class="wrapper">
      <header>
        <div class="title">Мой дневник затрат</div>
      </header>
      <main>
        <button @click="showForm">{{ textBtn }}</button>
        <div v-show="showBtnAdd"><AddPaymentForm @addNewPayment="addData" /></div> 
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
      paymentsList: [],
      showBtnAdd: false,
      textBtn: 'Показать форму'
    };
  },
  methods: {
    showForm(){
      if(this.showBtnAdd === false){
        this.showBtnAdd = true
        this.textBtn = 'Скрыть форму'
      } else {
        this.showBtnAdd = false
        this.textBtn = 'Показать форму'
      }
    },
    fetchData() {
      return [
        {
          date: "29.03.2021",
          category: "Food",
          value: 120,
          id: "1",
        },
        {
          date: "30.03.2021",
          category: "Sport",
          value: 240,
          id: "2",
        },
        {
          date: "31.03.2021",
          category: "Education",
          value: 480,
          id: "3",
        },
      ];
    },
    addData(data) {
      this.paymentsList.push(data);
    },
  },
  created() {
    this.paymentsList = this.fetchData();
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

<template>
  <v-container>
    <v-row>
      <v-col
        ><div class="wrapper">
          <header>
            <div class="text-h5 text-sm-h3 pb-6 text-left">
              Мой дневник затрат
            </div>
          </header>
          <main class="text-left">
            <!-- <v-dialog v-model="dialog"> -->
            <!-- <template v-slot:activator="{ on }"> -->
            <v-btn class="mb-8" color="teal" dark @click="addFormOpen">
              {{ textBtn }} <v-icon>mdi-plus</v-icon>
            </v-btn>
            <!-- </template> -->
            <!-- <v-card>
                <ModalWindowAddPaymentForm />
              </v-card> -->
            <!-- </v-dialog> -->
            <!-- <button v-if="showBtnAdd" @click="addFormOpen">
              {{ textBtn }}
            </button> -->
            <PaymentDisplay :list="carrentElement" />
            <MyPagination
              :length="paymentsList.length"
              :n="n"
              :cur="cur"
              @changePage="onChangePage"
            />
          </main>
        </div>
      </v-col>
      <v-col
        >Диаграмма
        <DiagrammPage
          :categoryForDiagramm="costsByCategory"
          :valueForDiagramm="costsByValue"
        />
      </v-col>
      <v-btn @click="clic">test</v-btn>
    </v-row>
    <!-- <div class="wrapper">
      <header>
        <div class="title">Мой дневник затрат</div>
      </header>
      <main>
        <button v-if="showBtnAdd" @click="addFormOpen">{{ textBtn }}</button>
        <div> -->
    <!-- <AddPaymentForm @addNewPayment="addData" /> -->
    <!-- </div>
        <PaymentDisplay :list="carrentElement" />
        <MyPagination
          :length="paymentsList.length"
          :n="n"
          :cur="cur"
          @changePage="onChangePage"
        />
      </main>
    </div> -->
  </v-container>
</template>

<script>
// import AddPaymentForm from "../components/AddPaymentForm.vue";
import PaymentDisplay from "../components/PaymentDisplay.vue";
import MyPagination from "../components/MyPagination.vue";
import DiagrammPage from "../components/Diagramm.vue";

// import ModalWindowAddPaymentForm from '../components/ModalWindowAddPaymentForm.vue'

export default {
  name: "PageDashboard",
  components: {
    DiagrammPage,
    PaymentDisplay,
    // AddPaymentForm,
    MyPagination,

    // ModalWindowAddPaymentForm
  },

  data() {
    return {
      showBtnAdd: true,
      textBtn: "Добавление статьи затрат",
      n: 5,
      cur: 1,
      dialog: false,
    };
  },
  methods: {
    clic() {
      console.log(this.costsByCategory);
      console.log(this.costsByValue);
    },
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
    onChangePage(namberPage) {
      this.cur = namberPage;
    },
    addFormOpen() {
      this.$modal.show("AddPaymentForm", {
        content: "addpaymentform",
        title: "Добавление статьи",
      });
    },
  },
  // created() {
  //   // this.$store.commit('getDataApp', this.fetchData())
  //   this.$store.dispatch("fetchData");
  // },
  computed: {
    paymentsList() {
      return this.$store.getters.getPaymentList;
    },
    categoryList() {
      return this.$store.getters.getCategoryList;
    },
    carrentElement() {
      return this.paymentsList.slice(
        this.n * (this.cur - 1),
        this.n * (this.cur - 1) + this.n
      );
    },
    
    costsByCategory() {
      let resultArr = [];
      for (const iterator of this.$store.getters.getCostsByCategory) {
        resultArr.push(iterator.category);
      }
      return resultArr;
    },
    costsByValue() {
      let resultArr = [];
      for (const iterator of this.$store.getters.getCostsByCategory) {
        resultArr.push(iterator.value);
      }
      return resultArr;
    },
  },
};
</script>

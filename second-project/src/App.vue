<template>
  <v-app>
    <v-app-bar plain app>
      <!-- <v-btn plain :ripple="false" to="/">Home</v-btn> -->
      <v-btn plain :ripple="false" to="dashboard">Dashboard</v-btn>
      <v-btn plain :ripple="false" to="about">About</v-btn>
    </v-app-bar>
    <!-- <div id="app"> -->
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/about">About</router-link>
      <hr />
      <div>
        <router-link to="/add/payment/Food?value=200"
          >Добавить платеж категории Food с ценой 200</router-link
        ><br />
        <router-link to="/add/payment/Transport?value=50"
          >Добавить платеж категории Transport с ценой 50</router-link
        ><br />
        <router-link to="/add/payment/Entertainment?value=2000"
          >Категория Entertainment с ценой 2000</router-link
        >
      </div>
    </nav>  -->
    <v-main>
      <router-view />
      <transition name="fade">
        <modal-window-add-payment-form v-if="modalShow" :settings="settings" />
      </transition>
      <transition name="fade">
        <context-menu />
      </transition>
    </v-main>
    <!-- </div> -->
  </v-app>
</template>

<script>
import ContextMenu from "./components/ContextMenu.vue";
import ModalWindowAddPaymentForm from "./components/ModalWindowAddPaymentForm.vue";
export default {
  components: { ModalWindowAddPaymentForm, ContextMenu },
  data() {
    return {
      modalShow: false,
      settings: {},
    };
  },

  methods: {
    onShow(settings) {
      this.modalShow = true;
      this.settings = settings;
    },

    onHide(settings) {
      this.modalShow = false;
      this.settings = settings;
    },
  },
  mounted() {
    this.$modal.EventBus.$on("shown", this.onShow);
    this.$modal.EventBus.$on("hide", this.onHide);
  },
  created() {
    // this.$store.commit('getDataApp', this.fetchData())
    this.$store.dispatch("fetchData");
  },
  beforeDestroy() {
    this.$modal.EventBus.$off("shown", this.onShow);
    this.$modal.EventBus.$off("hide", this.onHide);
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

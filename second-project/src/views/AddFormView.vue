<template>
  <div>
    <input placeholder="Amount" v-model="value" />
    <input placeholder="Категория" v-model="category">
    <input placeholder="Date" v-model="date" />
    <button @click="onSave">Save!</button>
  </div>
</template>

<script>
export default {
  name: "AddFormView",
  data() {
    return {
      value: "",
      category: "",
      date: "",
    };
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();

      return `${d}.${m}.${y}`;
    },
    categoryList() {
      return this.$store.getters.getCategoryList;
    },
  },
  methods: {
    onSave() {
      const data = {
        value: this.value,
        category: this.category,
        data: this.data || this.getCurrentDate,
      };
      this.$emit("addNewPayment", data);
    },
  },
  mounted() {
    console.log(this.data)
    this.value = this.$route.query.value
    this.category = this.$route.params.Category
    this.date = this.getCurrentDate

    if (!this.categoryList.length) {
      this.$store.dispatch("fetchCategoryList");
    }
  },
  beforeRouteUpdate(to, from, next) {
    console.log(this.$store.state.paymentList)
    this.value = to.query.value
    this.category = to.params.Category
    next()
    // вызывается когда маршрут, что рендерит этот компонент изменился,
    // но этот компонент будет повторно использован в новом маршруте.
    // Например, для маршрута с динамическими параметрами `/foo/:id`, когда мы
    // перемещаемся между `/foo/1` и `/foo/2`, экземпляр того же компонента `Foo`
    // будет использован повторно, и этот хук будет вызван когда это случится.
    // Также имеется доступ в `this` к экземпляру компонента.
  },
};
</script>

<style lang="scss" scoped>
</style>

<template>
  <div>
    <input placeholder="Amount" v-model="value" />
    <div class="categoryList" v-if="categoryList.length">
      <select v-model="category">
        <option v-for="(option, idx) in categoryList" :key="idx">
          {{ option }}
        </option>
      </select>
    </div>
    <input placeholder="Date" v-model="date" />
    <button @click="onSave">Save!</button>
  </div>
</template>

<script>
export default {
  name: "AddPaymentForm",
  props: {
    settings: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      value: "",
      category: "",
      date: "",
      whereWeSave: this.settings.title,
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
        date: this.getCurrentDate,
        id: this.settings.id,
      };
      if (this.whereWeSave == "Добавление статьи") {
        this.$store.commit("addDataPaymentList", data);
        console.log(this.whereWeSave);
      } else if (this.whereWeSave == "Редактирование") {
        this.$store.commit("editPayment", data);
      }

      // this.$emit("addNewPayment", data);
    },
  },
  mounted() {
    if (!this.categoryList.length) {
      this.$store.dispatch("fetchCategoryList");
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
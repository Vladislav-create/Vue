<template>
  <v-card class="text-left pa-8" outlined>
    <v-text-field v-model="date" label="Дата"></v-text-field>
    <v-text-field v-model="value" label="Значение" />
    <v-select v-model="category" label="Категория" :items="categoryList" />

    <v-btn class="mr-4" color="teal" dark @click="onSave">Сохранить</v-btn>
    <v-btn color="teal" dark @click="onCloseClick">Закрыть</v-btn>
  </v-card>
  <!-- <div>
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
  </div> -->
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
        value: +this.value,
        category: this.category,
        date: this.getCurrentDate,
        id: this.settings.id,
      };
      if (this.whereWeSave == "Добавление статьи") {
        this.$store.commit("addDataPaymentList", data);
        console.log(this.whereWeSave);
        console.log(this.whereWeSave);
      } else if (this.whereWeSave == "Редактирование") {
        this.$store.commit("editPayment", data);
      }
      this.$modal.hide();
      // this.$emit("addNewPayment", data);
    },
    onCloseClick() {
      this.$modal.hide();
    },
  },
  mounted() {
    if (!this.categoryList.length) {
      this.$store.dispatch("fetchCategoryList");
    }
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <div class="text-centr">
    <v-pagination v-model='page'
        :length='amount'
        :total-visible="5"
        @input="onClick(page)">
      <!-- <div :class="[$style.wrp]">
      <div @click="onClick(cur - 1)">-</div> -->
      <!-- <div v-for="i in amount" :key="i" @click="onClick(i)">
        {{ i }}
      </div> -->
      <!-- <div @click="onClick(cur + 1)">+</div> -->
    <!-- </div> -->
    </v-pagination>
  </div>
  <!-- <div :class="[$style.wrp]">
    <div @click="onClick(cur - 1)">-</div>
    <div v-for="i in amount" :key="i" @click="onClick(i)">
      {{ i }}
    </div>
    <div @click="onClick(cur + 1)">+</div>
  </div> -->
</template>

<script>
export default {
  name: "MyPagination",
  data(){
    return {
      page: 1,
    }
  },
  props: {
    length: Number,
    n: Number,
    cur: Number,
  },
  computed: {
    amount() {
      return Math.ceil(this.length / this.n);
    },
  },
  methods: {
    onClick(namberPage) {
      if (namberPage < 1 || namberPage > this.amount) {
        return;
      }
      this.$emit("changePage", namberPage);
    },
  },
};
</script>

<style lang="scss" module>
.wrp {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  cursor: pointer;
}
</style>

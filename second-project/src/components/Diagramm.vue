<template>
  <canvas id="myChart" class="diagramm mt-16"></canvas>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  name: "DiagrammPage",
  components: {},
  props: {
    categoryForDiagramm: {
      type: Array,
      default: () => [],
    },
    valueForDiagramm: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },

  mounted() {
    console.log(this.categoryForDiagramm);
    console.log(this.valueForDiagramm);
    const ctx = document.getElementById("myChart");
    const myChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: this.categoryForDiagramm,
        datasets: [
          {
            data: this.valueForDiagramm,
            backgroundColor: [
              "#E9FD38",
              "#FF52AA",
              "#E3B149",
              "#62FA5C",
              "#4984E3",
              "#E17EFF",
            ],
            borderWidth: 1,
          },
        ],
      },
    });
    myChart.update();
  },
  updated() {
    this.$nextTick(function () {
      console.log(this.category);
      
    });
  },
};
</script>

<style lang="scss" scoped>
.diagramm {
  height: 250px;
}
</style>

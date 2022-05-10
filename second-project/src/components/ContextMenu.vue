<template>
  <div class="context-wrapper" v-if="isShow">
    <div
      class="context-item"
      v-for="(item, id) in items"
      :key="id"
      @click="onClick(item)"
    >
      {{ item.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ContextMenu",
  data() {
    return {
      isShow: false,
      items: [],
    };
  },
  methods: {
    onClick(item) {
      item.action();
      this.$contextMenu.close();
    },
    onShow({ items }) {
      this.items = items;
      this.isShow = true;
    },
    onClose() {
      this.items = [];
      this.isShow = false;
    },
  },
  mounted() {
    this.$contextMenu.EventBus.$on("show", this.onShow);
    this.$contextMenu.EventBus.$on("close", this.onClose);
  },
  beforeDestroy() {
    this.$contextMenu.EventBus.$off("show", this.onShow);
    this.$contextMenu.EventBus.$off("close", this.onClose);
  },
};
</script>

<style lang="scss" scoped>
.context-wrapper {
  position: absolute;
  background-color: gold;
  cursor: pointer;
  top: 22%;
  left: 62%;
  border-radius: 11%;
}

</style>
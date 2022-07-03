<template>
  <div class="context-wrapper" :style="styles" v-if="isShow">
    <v-card outlined>
      <div
      class="context-item"
      v-for="(item, id) in items"
      :key="id"
      @click="onClick(item)"
    >
    <v-btn  plain :ripple="false" class="" width= '-webkit-fill-available' color="teal" dark>{{ item.text }}</v-btn>
      
    </div>
    </v-card>
    <!-- <div
      class="context-item"
      v-for="(item, id) in items"
      :key="id"
      @click="onClick(item)"
    >
      {{ item.text }}
    </div> -->
  </div>
</template>

<script>
export default {
  name: "ContextMenu",
  data() {
    return {
      isShow: false,
      items: [],
      xPos: 0,
      yPos: 0,
    };
  },
  computed: {
    styles() {
      return {
        top: `${this.yPos -76}px`,
        left: `${this.xPos + 40}px`,
      };
    },
  },
  methods: {
    onClick(item) {
      item.action();
      this.$contextMenu.close();
    },
    onShow({ caller, items }) {
      this.items = items;
      this.isShow = true;
      this.setPosition(caller);
    },
    onClose() {
      this.items = [];
      this.isShow = false;
    },
    setPosition(caller) {
      const pos = caller.getBoundingClientRect();
      this.xPos = pos.left;
      this.yPos = pos.top;
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
  cursor: pointer;
  border-radius: 11%;
}
</style>

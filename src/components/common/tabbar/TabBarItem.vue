<template>
<div>
  <div id="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot v-if="!isActive" name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>

  </div>
</div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      // isActive: false
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1
    },
    activeStyle() {
      return this.isActive ? {
        color: this.activeColor
      } : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
#tab-bar-item {
  flex: 1;
  font-size: 14px;

}

.tab-bar-item img {
  width: 5px;
  height: 5px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>

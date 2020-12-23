<template>
  <div>
    <div>First里的页面一,vuex测试</div>
    <div>{{ num1 }}</div>
    <el-button @click="incrementC(1)">+1</el-button>
    <el-button @click="decrementC(1)">-1</el-button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      num1: state => state.index.num1
    })
  },
  methods: {
    ...mapMutations(["incrementC", "decrementC"])
  },
  mounted() {}
};
</script>
<style lang="less" scoped></style>

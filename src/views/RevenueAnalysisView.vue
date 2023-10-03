<template>
  <h1>Chart</h1>
  <div>
    <ChartAnalysis :products="productData"></ChartAnalysis>
  </div>
  <h1>Table</h1>
  <div>
    <RevenueAnalysis></RevenueAnalysis>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import RevenueAnalysis from "@/components/RevenueAnalysis.vue";
import ChartAnalysis from "@/components/ChartAnalysis.vue";
import store from "@/store";

@Options({
  components: {
    RevenueAnalysis,
    ChartAnalysis,
  },
})
export default class RevenueAnalysisView extends Vue {
  productData = [store.getters.products];
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

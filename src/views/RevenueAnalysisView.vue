<template>
  <RevenueAnalysis></RevenueAnalysis>
  <ChartAnalysis></ChartAnalysis>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import RevenueAnalysis from "@/components/RevenueAnalysis.vue";
import ChartAnalysis from "@/components/ChartAnalysis.vue";

@Options({
  components: {
    RevenueAnalysis,
    ChartAnalysis,
  },
})
export default class RevenueAnalysisView extends Vue {}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

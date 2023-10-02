<template>
  <RevenueAnalysis></RevenueAnalysis>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import RevenueAnalysis from "@/components/RevenueAnalysis.vue";
import store from "@/store";

@Options({
  components: {
    RevenueAnalysis,
  },
})
export default class RevenueAnalysisView extends Vue {}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

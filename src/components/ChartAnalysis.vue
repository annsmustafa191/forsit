<template>
  <div>
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default class ChartAnalysis extends Vue {
  name: "BarChart";
  components: { Bar };
  chartData = {
    labels: ["January", "February", "March"],
    datasets: [{ data: [40, 20, 12] }],
  };
  chartOptions = {
    responsive: true,
  };
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

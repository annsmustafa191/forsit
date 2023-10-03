<template>
  <div>
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Line } from "vue-chartjs";
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
  name: "LineChart";
  components = { Line };
  chartData: {
    labels: ["January", "February", "March", "April", "May", "June", "July"];
    datasets: [
      {
        label: "Data One";
        backgroundColor: "#f87979";
        data: [40, 39, 10, 40, 39, 80, 40];
      }
    ];
  };

  chartOptions: {
    responsive: true;
  };
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

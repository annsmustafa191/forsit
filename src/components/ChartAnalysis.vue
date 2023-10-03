<template>
  <div>
    <canvas ref="chart"></canvas>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { ref, onMounted } from "vue";
import {
  Chart,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

export default class ChartAnalysis extends Vue {
  name = "ProductStockChart";
  props = {
    products: Array,
  };

  setup(props) {
    const chart = ref(null);

    onMounted(() => {
      if (props.products && props.products.length > 0) {
        const labels = props.products.map((product) => product.title);
        const stockData = props.products.map((product) => product.stock);

        Chart.register(CategoryScale, LinearScale, Title, Tooltip, Legend);

        new Chart(chart.value, {
          type: "bar",
          data: {
            labels: labels,
            datasets: [
              {
                label: "Stock",
                data: stockData,
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    });

    return {
      chart,
    };
  }
}
</script>
<style scoped></style>

<template>
  <InventoryManagement></InventoryManagement>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import InventoryManagement from "@/components/InventoryManagement.vue"; // @ is an alias to /src

@Options({
  components: {
    InventoryManagement,
  },
})
export default class InventoryManagementView extends Vue {}
</script>

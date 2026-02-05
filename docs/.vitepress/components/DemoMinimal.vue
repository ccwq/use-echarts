<template>
  <div class="demo-card">
    <ClientOnly>
      <ECharts :options="option" style="height: 320px;" />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ECharts } from '../../../src'

const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: { type: 'value' },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
}
</script>

<style scoped>
.demo-card {
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 12px;
  background: #fff;
}

</style>

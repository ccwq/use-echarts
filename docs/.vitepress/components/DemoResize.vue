<template>
  <div class="demo-card">
    <div class="controls">
      <span>{{ props.label }}</span>
      <input type="range" min="320" max="820" v-model="width" />
      <strong>{{ width }}px</strong>
    </div>
    <ClientOnly>
      <div class="demo-resize" :style="{ width: width + 'px' }">
        <ECharts :options="option" />
      </div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ECharts } from '../../../src'

const props = withDefaults(defineProps<{ label?: string }>(), {
  label: '容器宽度'
})

const width = ref(520)

const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: { type: 'value' },
  series: [
    {
      data: [12, 18, 26, 23, 14, 22, 31],
      type: 'bar'
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

.controls {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  font-size: 14px;
}

.demo-resize {
  height: 320px;
  border: 1px dashed #d9d9d9;
  border-radius: 10px;
  overflow: hidden;
}
</style>

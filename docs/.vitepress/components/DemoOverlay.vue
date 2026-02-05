<template>
  <div class="demo-card">
    <ClientOnly>
      <div class="demo-overlay">
        <ECharts :options="option" style="height: 360px;" />
        <div class="overlay-content">
          <div class="overlay-label">{{ props.label }}</div>
          <div class="overlay-value">{{ props.value }}</div>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ECharts } from '../../../src'

const props = withDefaults(defineProps<{
  label?: string
  value?: string
}>(), {
  label: '总资产',
  value: '9,823'
})

const option = {
  tooltip: { trigger: 'item' },
  series: [
    {
      type: 'pie',
      radius: ['45%', '70%'],
      avoidLabelOverlap: false,
      label: { show: false },
      data: [
        { value: 1048, name: 'Search' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
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

.demo-overlay {
  position: relative;
}

.overlay-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  pointer-events: none;
}

.overlay-label {
  font-size: 14px;
  color: #666;
}

.overlay-value {
  font-size: 28px;
  font-weight: bold;
  background: linear-gradient(135deg, #4f8ef7 0%, #74c0fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 6px 14px rgba(79, 142, 247, 0.35);
}
</style>

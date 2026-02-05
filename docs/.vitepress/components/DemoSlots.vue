<template>
  <div class="demo-card">
    <ClientOnly>
      <ECharts :options="option" style="height: 360px;">
        <template #header>
          <div class="demo-header">
            <strong>{{ props.title }}</strong>
            <span>{{ props.subtitle }}</span>
          </div>
        </template>
        <template #footer>
          <div class="demo-footer">{{ props.footerText }}</div>
        </template>
      </ECharts>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ECharts } from '../../../src'

const props = withDefaults(defineProps<{
  title?: string
  subtitle?: string
  footerText?: string
}>(), {
  title: '带 Header/Footer 的图表',
  subtitle: '图表会自动避让',
  footerText: '更新时间：2024-01-01'
})

const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: { type: 'value' },
  series: [
    {
      data: [120, 132, 101, 134, 90, 230, 210],
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

.demo-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  background: #f6f7fb;
  border-bottom: 1px solid #e6e8f0;
  font-size: 14px;
}

.demo-footer {
  padding: 8px 12px;
  text-align: right;
  color: #999;
  background: #fafafa;
  border-top: 1px solid #f0f0f0;
  font-size: 12px;
}
</style>

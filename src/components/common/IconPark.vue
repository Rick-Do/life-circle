<template>
  <Component :is="icon" :theme="theme" :size="size" :spin="spin" :fill="fill" :strokeLinecap="strokeLinecap"
             :strokeLinejoin="strokeLinejoin" :strokeWidth="strokeWidth"/>
</template>

<script lang="ts" setup>
import type {Icon} from "@icon-park/vue-next/lib/runtime";

defineProps<{
  icon: Icon | string,
  theme?: 'outline' | 'filled' | 'two-tone' | 'multi-color',
  size?: number | string,
  spin?: boolean,
  fill?: string | string[],
  strokeLinecap?: 'butt' | 'round' | 'square',
  strokeLinejoin?: 'miter' | 'round' | 'bevel',
  strokeWidth?: number
}>()
</script>

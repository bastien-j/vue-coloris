<script setup lang="ts">
import Coloris from '@melloware/coloris'
import { computed, inject, onMounted } from 'vue'

import { injectionKey, type PluginOptions } from '../types'

const props = defineProps<{
  options?: PluginOptions
  value?: string
  modelValue?: string
}>()
const emits = defineEmits<{
  (e: 'change', color: string): void
  (e: 'update:model-value', color: string): void
}>()

const globalOptions = inject(injectionKey) as PluginOptions
const mergedOptions = computed(() => ({ ...globalOptions, ...props.options }))
const key = (Math.random() + 1).toString(36).substring(5)

const currentValue = computed(() => props.value ?? props.modelValue ?? '')

const onChangeCallback: Coloris.OnChangeCallback = (color: string) => {
  if (props.modelValue !== undefined) emits('update:model-value', color)
  emits('change', color)
}

onMounted(() => {
  const alreadyInitalised = document.querySelector('.clr-field') !== null

  if (!alreadyInitalised) {
    Coloris({
      ...globalOptions,
      onChange: onChangeCallback,
      el: '.coloris'
    })
  }

  Coloris.setInstance(`[data-clr-key="${key}"]`, {
    ...mergedOptions.value,
    onChange: onChangeCallback
  })
})
</script>

<template>
  <div class="coloris-input-wrapper" :class="{ previewOnly: mergedOptions.previewOnly }">
    <input type="text" class="coloris" :data-clr-key="key" :value="currentValue" />
  </div>
</template>

<style scoped lang="scss">
.coloris-input-wrapper {
  :deep(button) {
    border-radius: 0 6px 6px 0;
    cursor: pointer;
    pointer-events: all;
  }

  input.coloris {
    padding: 7px;
    border-radius: 6px;
    border: 1px solid hsl(0, 0%, 80%);
    font-size: 16px;
    background-color: hsl(0, 100%, 100%);
    color: hsl(0, 0%, 20%);
  }

  &.previewOnly {
    :deep(button) {
      width: 100%;
      border-radius: 6px;
    }
    input.coloris {
      width: 40px;
      height: 40px;
    }
  }
}
</style>

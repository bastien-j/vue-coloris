<script setup lang="ts">
import { ref } from 'vue'

const firstColor = ref('red')
const secondColor = ref('blue')
</script>

<template>
  <div class="coloris-example">
    <p>First color picker</p>
    <VueColoris v-model="firstColor" :options="{ previewOnly: true }" />
    <span>{{ firstColor }}</span>
  </div>
  <div class="coloris-example">
    <p>Second color picker</p>
    <VueColoris v-model="secondColor" />
    <span>{{ secondColor }}</span>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

.coloris-example {
  padding: 16px;

  p {
    margin-bottom: 16px;
  }
}
</style>

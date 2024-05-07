<script lang="ts" setup>
  import { ButtonProps } from './button';

  defineProps(ButtonProps);

  defineOptions({
    name: 'IButton',
  });
</script>

<template>
  <button type="button" :class="classes" :style="style" @click="() => onClick?.()">
    {{ label }}
  </button>
</template>

<script lang="ts" setup>
  import './button.css';
  import { computed } from 'vue';
  import { IButton } from '../../../packages';
  // import IButton from '../../../dist/types/packages/components/button/index';

  const props = withDefaults(
    defineProps<{
      /**
       * The label of the button
       */
      label: string;
      /**
       * primary or secondary button
       */
      primary?: boolean;
      /**
       * size of the button
       */
      size?: 'small' | 'medium' | 'large';
      /**
       * background color of the button
       */
      backgroundColor?: string;
    }>(),
    { primary: false },
  );

  const emit = defineEmits<{
    (e: 'click', id: number): void;
  }>();

  const classes = computed(() => ({
    'storybook-button': true,
    'storybook-button--primary': props.primary,
    'storybook-button--secondary': !props.primary,
    [`storybook-button--${props.size || 'medium'}`]: true,
  }));

  const style = computed(() => ({
    backgroundColor: props.backgroundColor,
  }));

  const onClick = () => {
    console.log('这里点击了按钮');
    emit('click', 1);
  };
</script>

<template>
  <IButton :class="classes" :style="style" :label="label" @click="() => onClick()"> </IButton>
</template>

import type { ExtractPropTypes, PropType } from 'vue';
import type button from './button.vue';

export type Type = 'primary' | 'success' | 'error';

export const ButtonProps = {
  type: String as PropType<Type>,
  classes: Object,
  style: Object,
  onClick: Function,
  label: String,
};

export type ButtonPropsType = ExtractPropTypes<typeof ButtonProps>;
export type ButtonInstanceType = InstanceType<typeof button>;

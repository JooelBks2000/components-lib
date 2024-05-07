import type { ExtractPropTypes } from 'vue';
import type Icon from './icon.vue';

export const IconProps = {};

export type IconPropsType = ExtractPropTypes<typeof IconProps>;
export type IconInstance = InstanceType<typeof Icon>;

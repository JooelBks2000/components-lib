import type { ExtractPropTypes } from 'vue';
import type Tag from './tag.vue';

export const TagProps = {};

export type TagPropsType = ExtractPropTypes<typeof TagProps>;
export type TagInstance = InstanceType<typeof Tag>;

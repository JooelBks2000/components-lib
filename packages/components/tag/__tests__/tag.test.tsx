import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import Tag from '../src/tag.vue';

describe('Tag.vue', () => {
  it('create', () => {
    const wrapper = mount(() => <Tag />);
    expect(wrapper.text()).toContain('Tag components');
  });
});

import React from 'react';

import { Page } from './Page';

export default {
  title: 'Example/Page',
  component: Page,
};

const Template = (args: any) => <Page {...args} />;

export const Test = Template.bind({});
// @ts-expect-error
Test.args = {
  srcs: Array.from({length: 10}).map(()=>{
    return "https://1.bp.blogspot.com/-tVeC6En4e_E/X96mhDTzJNI/AAAAAAABdBo/jlD_jvZvMuk3qUcNjA_XORrA4w3lhPkdQCNcBGAsYHQ/s1048/onepiece01_luffy.png"
  })
};

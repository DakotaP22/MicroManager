import type { Meta, StoryObj } from '@storybook/angular';

import { BodyTextComponent } from './body-text.component';
import type { BodyTextSize } from './body-text.component';

//👇 This default export determines where your story goes in the story list
const meta: Meta<BodyTextComponent> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Body Text',
  component: BodyTextComponent,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<BodyTextComponent>;

export const Story: Story = {
  args: {
    //👇 The args you need here will depend on your component
    size: 'md'
  },
  render: (args) => ({
    props: args,
    template: '<body-text [size]="size">Test</body-text>'
  })
};

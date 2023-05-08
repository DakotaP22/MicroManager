import type { Meta, StoryObj } from '@storybook/angular';

import { DisplayTextComponent } from './display-text.component';

//👇 This default export determines where your story goes in the story list
const meta: Meta<DisplayTextComponent> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Display Text',
  component: DisplayTextComponent,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<DisplayTextComponent>;

export const Story: Story = {
  args: {
    //👇 The args you need here will depend on your component
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: '<display-text [size]="size">Test</display-text>',
  }),
};

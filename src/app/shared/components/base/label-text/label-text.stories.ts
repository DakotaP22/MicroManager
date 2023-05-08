import type { Meta, StoryObj } from '@storybook/angular';

import { LabelTextComponent } from './label-text.component';

//👇 This default export determines where your story goes in the story list
const meta: Meta<LabelTextComponent> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Label Text',
  component: LabelTextComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<LabelTextComponent>;

export const Story: Story = {
  args: {
    //👇 The args you need here will depend on your component
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: '<label-text [size]="size">Test</label-text>',
  }),
};

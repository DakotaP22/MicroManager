import type { Meta, StoryObj } from '@storybook/angular';

import { HeadlineTextComponent } from './headline-text.component';

//👇 This default export determines where your story goes in the story list
const meta: Meta<HeadlineTextComponent> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Headline Text',
  component: HeadlineTextComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<HeadlineTextComponent>;

export const Story: Story = {
  args: {
    //👇 The args you need here will depend on your component
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: '<headline-text [size]="size">Test</headline-text>',
  }),
};

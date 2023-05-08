import type { Meta, StoryObj } from '@storybook/angular';

import { TitleTextComponent } from './title-text.component';

//👇 This default export determines where your story goes in the story list
const meta: Meta<TitleTextComponent> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Title Text',
  component: TitleTextComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TitleTextComponent>;

export const Story: Story = {
  args: {
    //👇 The args you need here will depend on your component
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: '<title-text [size]="size">Test</title-text>',
  }),
};

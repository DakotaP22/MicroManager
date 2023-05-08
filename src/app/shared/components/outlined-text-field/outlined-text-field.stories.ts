import type { Meta, StoryObj } from '@storybook/angular';

import { OutlinedTextFieldComponent } from './outlined-text-field.component';

//👇 This default export determines where your story goes in the story list
const meta: Meta<OutlinedTextFieldComponent> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Outlined Text Field',
  component: OutlinedTextFieldComponent,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<OutlinedTextFieldComponent>;

export const Story: Story = {
  args: {
    //👇 The args you need here will depend on your component
    disabled: false,
    placeholder: 'Placeholder',
    error: "Error"
  },
  render: (args) => ({
    props: args,
    template: '<outlined-text-field> [disabled]="disabled"</outlined-text-field>',
    
  }),
};

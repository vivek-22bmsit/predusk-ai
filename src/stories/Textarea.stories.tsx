import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '../components/ui/textarea';

const meta: Meta<typeof Textarea> = {
  title: 'UI/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    rows: {
      control: { type: 'number' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Type your message here...',
  },
};

export const WithValue: Story = {
  args: {
    value: 'This is a textarea with some content',
    placeholder: 'Type your message here...',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'This textarea is disabled',
    value: 'Cannot edit this content',
  },
};

export const MultipleRows: Story = {
  args: {
    rows: 6,
    placeholder: 'This textarea has 6 rows...',
  },
};

export const LongContent: Story = {
  args: {
    value: `This is a longer piece of content that demonstrates how the textarea handles multiple lines of text. It will automatically resize to fit the content while maintaining the minimum height constraints.

This is a second paragraph to show how the textarea handles line breaks and longer content.

And here's a third paragraph with even more content to demonstrate the scrolling behavior when the content exceeds the available space.`,
    placeholder: 'Type your message here...',
  },
};

export const WithError: Story = {
  args: {
    placeholder: 'This field has an error',
    'aria-invalid': true,
    className: 'border-destructive',
  },
};

export const Resizable: Story = {
  args: {
    placeholder: 'This textarea can be resized',
    className: 'resize',
  },
};
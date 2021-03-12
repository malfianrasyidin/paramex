import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from '../components/button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
      control: {
        type: 'text',
      },
      defaultValue: 'This is example of Button',
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'md',
  type: 'primary',
  onClick: action('onClick'),
};

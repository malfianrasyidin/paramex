import { Story, Meta } from '@storybook/react';
import {
  Button,
  ButtonProps,
  ButtonType,
  ButtonSize,
} from '../components/button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ButtonType,
      },
    },
    size: {
      control: {
        type: 'select',
        options: ButtonSize,
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
  type: ButtonType.Primary,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  type: ButtonType.Secondary,
  outline: true,
};

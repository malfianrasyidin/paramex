import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps, ButtonType } from '../components/button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {},
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  type: ButtonType.Primary,
};

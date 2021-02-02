import { Story, Meta } from '@storybook/react';
import { Icon, IconProps, IconSize, IconStyle } from '../components/icon';

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: IconSize,
      },
    },
    style: {
      control: {
        type: 'select',
        options: IconStyle,
      },
    },
  },
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'camera',
  size: IconSize.Large,
  style: IconStyle.Solid,
};

import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { Icon, IconProps } from '../components/icon';

export default {
  title: 'Icon',
  component: Icon,
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'camera',
  size: '3x',
  prefix: 'fas',
  onClick: action('onClick'),
};

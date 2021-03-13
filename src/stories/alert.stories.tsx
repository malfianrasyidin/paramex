import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Alert, AlertProps } from '../components/alert';

export default {
  title: 'Alert',
  component: Alert,
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
      defaultValue: 'This is example of Alert',
    },
  },
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const Clickable = Template.bind({});
Clickable.args = {
  type: 'primary',
  onClick: action('onClick'),
};

export const Unclickable = Template.bind({});
Unclickable.args = {
  type: 'primary',
};

import { render } from '@testing-library/react';
import { Icon } from '../icon';

describe('Icon', () => {
  it('renders correctly', () => {
    const { container } = render(<Icon name="camera" />);

    expect(container).toMatchSnapshot();
  });
});

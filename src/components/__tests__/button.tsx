import { render } from '@testing-library/react';
import { Button } from '../button';

describe('Button', () => {
  it('renders correctly', () => {
    const { container } = render(<Button label="example" outline block />);

    expect(container).toMatchSnapshot();
  });
});

import { render, screen } from '@testing-library/react';

import { getRoles } from '~/testUtils';
import { Button } from '.';

describe('Button', () => {
  test('唯一の role として button を持つ', () => {
    const { container } = render(<Button>ボタン</Button>);

    expect(getRoles(container).length).toBe(1);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});

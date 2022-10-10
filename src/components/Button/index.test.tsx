import { render, screen } from '@testing-library/react';
import { Button } from '.';

describe('Button', () => {
  test('button の role を持つ', () => {
    render(<Button>ボタン</Button>);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});

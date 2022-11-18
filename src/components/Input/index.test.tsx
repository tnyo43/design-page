import { render, screen } from '@testing-library/react';
import { getRoles } from '~/testUtils';
import { Input } from '.';

describe('Input', () => {
  test('唯一の role として textbox を持つ', () => {
    const { container } = render(<Input />);

    expect(getRoles(container).length).toBe(1);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  describe('label と一緒に使うとき', () => {
    test('htmlFor でラベルを紐づけられる', () => {
      const inputId = 'input-user-name';
      render(
        <div>
          <label htmlFor={inputId}>ユーザー名</label>
          <Input type="text" id={inputId} />
        </div>
      );

      expect(
        screen.getByRole('textbox', { name: 'ユーザー名' })
      ).toBeInTheDocument();
    });
  });
});

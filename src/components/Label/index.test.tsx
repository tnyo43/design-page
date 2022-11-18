import { render, screen } from '@testing-library/react';
import { getRoles } from '~/testUtils';
import { Label } from '.';

describe('Label', () => {
  test('role を持たない', () => {
    const { container } = render(<Label>ラベル</Label>);

    expect(getRoles(container).length).toBe(0);
  });

  describe('input と一緒に使うとき', () => {
    test('htmlFor でラベルを紐づけられる', () => {
      const inputId = 'input-user-name';
      render(
        <div>
          <Label htmlFor={inputId}>ユーザー名</Label>
          <input type="text" id={inputId} />
        </div>
      );

      expect(
        screen.getByRole('textbox', { name: 'ユーザー名' })
      ).toBeInTheDocument();
    });
  });
});

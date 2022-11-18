import { css } from '@emotion/react';
import { colors } from '~/styles/colors';

export const common = css`
  line-height: 40px;
  height: 40px;

  border-radius: 8px;
  border: 1px solid ${colors.gray};

  padding: 0 2px 0 8px;
  box-sizing: border-box;

  ::placeholder {
    color: ${colors.gray};
  }

  :focus {
    border-color: ${colors.blue};
    outline: 2px solid ${colors.blueSecondary};
  }
`;

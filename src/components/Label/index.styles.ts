import { css } from '@emotion/react';
import { colors } from '~/styles/colors';

export const common = css`
  font-weight: 700;
  font-size: 0.8rem;
`;

export const required = css`
  margin-left: 0.2rem;
  color: ${colors.red};
  font-size: 1.2rem;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

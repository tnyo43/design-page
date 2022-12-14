import { css } from '@emotion/react';
import { colors } from '~/styles/colors';

export const common = css`
  font-weight: 700;
  font-size: 0.8rem;

  svg {
    height: 1em;
    vertical-align: -0.125em;
    margin-right: 0.2em;
  }
`;

export const required = css`
  margin-left: 0.2rem;
  color: ${colors.red};
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

import { css, SerializedStyles } from '@emotion/react';
import { colors } from '~/styles/colors';

export type Theme = 'primary' | 'alert' | 'mono-strong' | 'mono-weak';
export type Size = 'normal' | 'small';
export type Display = 'fill' | 'inline';

export const commonStyle = css`
  border-style: solid;
  border-color: transparent;
  box-shadow: none;
  cursor: pointer;
  outline-offset: 3px;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const themes: Record<Theme, SerializedStyles> = {
  primary: css`
    background-color: ${colors.blue};
    color: ${colors.white};

    &:hover {
      background-color: ${colors.blueSecondary};
    }
  `,
  alert: css`
    background-color: ${colors.red};
    color: ${colors.white};

    &:hover {
      background-color: ${colors.redSecondary};
    }
  `,
  'mono-strong': css`
    background-color: ${colors.black};
    color: ${colors.white};

    &:hover {
      background-color: ${colors.darkGray};
    }
  `,
  'mono-weak': css`
    background-color: ${colors.white};
    color: ${colors.black};
    border-color: ${colors.black};

    &:hover {
      color: ${colors.gray};
      border-color: ${colors.gray};
    }
  `,
} as const;

export const sizes: Record<Size, SerializedStyles> = {
  normal: css`
    height: 32px;
    border-width: 2px;
    border-radius: 8px;
    padding: 0 16px;
    font-weight: 700;
    font-size: 14px;
  `,
  small: css`
    height: 24px;
    border-width: 1px;
    border-radius: 12px;
    padding: 0 14px;
    font-weight: 500;
    font-size: 12px;
  `,
} as const;

export const displays: Record<Display, SerializedStyles> = {
  inline: css``,
  fill: css`
    width: 100%;
  `,
} as const;

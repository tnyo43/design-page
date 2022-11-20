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

  svg {
    height: 1.5em;
    width: 1.5em;
    vertical-align: -0.375em;
    margin-right: 0.4em;
  }
`;

export const themes: Record<Theme, SerializedStyles> = {
  primary: css`
    background-color: ${colors.blue};
    color: ${colors.white};

    &:hover {
      background-color: ${colors.blueSecondary};
    }

    svg path {
      fill: ${colors.white};
    }
  `,
  alert: css`
    background-color: ${colors.red};
    color: ${colors.white};

    &:hover {
      background-color: ${colors.redSecondary};
    }

    svg path {
      fill: ${colors.white};
    }
  `,
  'mono-strong': css`
    background-color: ${colors.black};
    color: ${colors.white};

    &:hover {
      background-color: ${colors.darkGray};
    }

    svg path {
      fill: ${colors.white};
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

    svg path {
      fill: ${colors.black};
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

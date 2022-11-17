import React from 'react';
import { ComponentPropsWithoutRef, FC } from 'react';
import {
  Display,
  Size,
  Theme,
  commonStyle,
  displays,
  sizes,
  themes,
} from './index.styles';

type Props = Omit<ComponentPropsWithoutRef<'button'>, 'style'> & {
  theme?: Theme;
  size?: Size;
  display?: Display;
};

export const Button: FC<Props> = React.forwardRef<HTMLButtonElement, Props>(
  ({ theme, size, display, ...props }, ref) => (
    <button
      {...props}
      ref={ref}
      css={[
        commonStyle,
        displays[display || 'inline'],
        sizes[size || 'normal'],
        themes[theme || 'primary'],
      ]}
    />
  )
);

Button.displayName = 'Button';

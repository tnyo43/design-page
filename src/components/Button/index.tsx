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

export const Button: FC<
  Omit<ComponentPropsWithoutRef<'button'>, 'style'> & {
    theme?: Theme;
    size?: Size;
    display?: Display;
  }
> = ({ theme, size, display, ...props }) => (
  <button
    {...props}
    css={[
      commonStyle,
      displays[display || 'inline'],
      sizes[size || 'normal'],
      themes[theme || 'primary'],
    ]}
  />
);

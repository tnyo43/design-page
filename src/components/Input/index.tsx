import React, { ComponentPropsWithoutRef, FC } from 'react';
import * as styles from './index.styles';

type Props = ComponentPropsWithoutRef<'input'>;

export const Input: FC<Props> = React.forwardRef<HTMLInputElement, Props>(
  (props, ref) => <input {...props} css={styles.common} ref={ref} />
);

Input.displayName = 'Input';

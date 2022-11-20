import React, { ComponentPropsWithoutRef, FC } from 'react';
import * as styles from './index.styles';

type Props = ComponentPropsWithoutRef<'label'> & {
  required?: boolean;
};

export const Label: FC<Props> = React.forwardRef<HTMLLabelElement, Props>(
  ({ children, required, ...props }, ref) => (
    <label {...props} css={styles.common} ref={ref}>
      {children}
      {required && <span css={styles.required}>*</span>}
    </label>
  )
);

Label.displayName = 'Label';

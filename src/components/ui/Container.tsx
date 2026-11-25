import type { ElementType, ReactNode } from 'react';
import styles from './Container.module.css';

type ContainerProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  id?: string;
  'aria-label'?: string;
};

/** Centres content at the page width with the standard gutter. */
export function Container({ as: Tag = 'div', className, children, ...rest }: ContainerProps) {
  return (
    <Tag className={className ? `${styles.container} ${className}` : styles.container} {...rest}>
      {children}
    </Tag>
  );
}

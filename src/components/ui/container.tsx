import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'narrow' | 'wide';
}

export function Container({ 
  className, 
  size = 'default', 
  children, 
  ...props 
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        {
          'max-w-7xl': size === 'default',      // 1280px
          'max-w-4xl': size === 'narrow',       // 896px - for prose/content
          'max-w-[1400px]': size === 'wide',    // 1400px - for galleries
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

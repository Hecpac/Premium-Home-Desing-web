import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, disabled, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    
    return (
      <Comp
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center font-medium transition-all duration-normal',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          'disabled:pointer-events-none disabled:opacity-50',
          
          // Variants
          {
            // Primary - Rosso Corsa
            'bg-primary text-white hover:bg-primary-dark active:scale-[0.98]': variant === 'primary',
            
            // Secondary - Surface
            'bg-surface-card text-foreground hover:bg-surface-elevated active:scale-[0.98]': variant === 'secondary',
            
            // Ghost
            'bg-transparent text-foreground hover:bg-surface-card': variant === 'ghost',
            
            // Outline
            'border border-border bg-transparent text-foreground hover:bg-surface-card hover:border-border-light': variant === 'outline',
          },
          
          // Sizes
          {
            'h-9 px-4 text-sm rounded-lg': size === 'sm',
            'h-11 px-6 text-base rounded-xl': size === 'md',
            'h-14 px-8 text-lg rounded-xl': size === 'lg',
          },
          
          className
        )}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            {isLoading && (
              <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            )}
            {children}
          </>
        )}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export { Button };

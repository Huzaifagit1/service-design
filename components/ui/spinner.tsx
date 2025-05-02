import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const spinnerVariants = cva(
  "inline-block animate-spin rounded-full border-2 border-solid border-current border-e-transparent text-primary",
  {
    variants: {
      size: {
        default: "h-5 w-5",
        sm: "h-4 w-4",
        lg: "h-6 w-6",
        xl: "h-10 w-10",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
  className?: string
}

export function Spinner({ size, className }: SpinnerProps) {
  return (
    <div 
      className={cn(spinnerVariants({ size, className }))} 
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
} 
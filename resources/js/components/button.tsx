import { cn } from '@/lib/utils';

export default function Button({ className, children, ...props }: React.ComponentProps<'button'>) {
    return (
        <button
            className={cn(
                'h-12 cursor-pointer rounded-full bg-main-purple px-6 text-sm font-bold text-white transition hover:bg-main-purple-hover focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-main-purple-hover disabled:opacity-25',
                className,
            )}
            {...props}
        >
            {children}
        </button>
    );
}

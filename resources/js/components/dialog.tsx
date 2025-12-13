import { cn } from '@/lib/utils';
import { Dialog as DialogPrimitive } from '@base-ui-components/react/dialog';

function Dialog({ ...props }: React.ComponentProps<typeof DialogPrimitive.Root>) {
    return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger({ ...props }: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
    return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({ ...props }: React.ComponentProps<typeof DialogPrimitive.Portal>) {
    return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogBackdrop({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Backdrop>) {
    return (
        <DialogPrimitive.Backdrop
            data-slot="dialog-backdrop"
            className={cn(
                'fixed inset-0 min-h-dvh bg-black opacity-50 transition-all duration-150 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 supports-[-webkit-touch-callout:none]:absolute',
                className,
            )}
            {...props}
        />
    );
}

function DialogPopUp({
    className,
    children,
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Popup> & {
    showCloseButton?: boolean;
}) {
    return (
        <DialogPortal data-slot="dialog-portal">
            <DialogBackdrop />
            <DialogPrimitive.Popup
                data-slot="dialog-content"
                className={cn(
                    'fixed top-1/2 left-1/2 -mt-8 w-96 max-w-[calc(100vw-3rem)] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 text-black transition-all duration-150 data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 dark:bg-dark-grey dark:text-white',
                    className,
                )}
                {...props}
            >
                {children}
            </DialogPrimitive.Popup>
        </DialogPortal>
    );
}

function DialogTitle({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>) {
    return <DialogPrimitive.Title data-slot="dialog-title" className={cn('text-lg leading-tight font-bold', className)} {...props} />;
}

function DialogDescription({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Description>) {
    return <DialogPrimitive.Description data-slot="dialog-description" className={cn('text-sm text-medium-grey', className)} {...props} />;
}

export { Dialog, DialogDescription, DialogPopUp, DialogTitle, DialogTrigger };

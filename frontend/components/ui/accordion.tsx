/* /components/ui/accordion.tsx */
'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDownIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

/* -------------------------------------------------------------------------- */
/*   Root                                                                     */
/* -------------------------------------------------------------------------- */

const Accordion = AccordionPrimitive.Root

/* -------------------------------------------------------------------------- */
/*   Item                                                                     */
/* -------------------------------------------------------------------------- */

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    data-slot="accordion-item"
    className={cn('border-b last:border-b-0', className)}
    {...props}
  />
))
AccordionItem.displayName = AccordionPrimitive.Item.displayName

/* -------------------------------------------------------------------------- */
/*   Trigger                                                                  */
/* -------------------------------------------------------------------------- */

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      data-slot="accordion-trigger"
      className={cn(
        'flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all',
        'hover:underline',
        'focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring',
        'disabled:pointer-events-none disabled:opacity-50',
        '[&[data-state=open]>svg]:rotate-180',
        className
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon className="size-4 shrink-0 translate-y-0.5 text-muted-foreground pointer-events-none transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

/* -------------------------------------------------------------------------- */
/*   Content                                                                  */
/* -------------------------------------------------------------------------- */

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    data-slot="accordion-content"
    className={cn(
      'overflow-hidden text-sm',
      'data-[state=closed]:animate-accordion-up',
      'data-[state=open]:animate-accordion-down',
      className
    )}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

/* -------------------------------------------------------------------------- */
/*   Exports                                                                  */
/* -------------------------------------------------------------------------- */

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

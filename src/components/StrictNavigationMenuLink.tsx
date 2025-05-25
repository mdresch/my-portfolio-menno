import * as React from "react";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";

interface StrictNavigationMenuLinkProps {
  asChild?: boolean;
  children: React.ReactNode;
  [key: string]: any;
}

export function StrictNavigationMenuLink({
  asChild,
  children,
  ...props
}: StrictNavigationMenuLinkProps) {
  if (
    asChild &&
    (
      !React.isValidElement(children) ||
      Array.isArray(children) ||
      (typeof children === "object" && (children as any).type === React.Fragment)
    )
  ) {
    if (process.env.NODE_ENV !== "production") {
      throw new Error(
        "NavigationMenuLink with asChild expects exactly one React element child (not a fragment, array, or null/undefined)."
      );
    }
  }
  return (
    <NavigationMenuLink asChild={asChild} {...props}>
      {children}
    </NavigationMenuLink>
  );
}

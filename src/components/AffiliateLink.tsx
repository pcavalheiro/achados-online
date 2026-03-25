"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { track } from "@vercel/analytics";

type AffiliateLinkProps = Omit<ComponentProps<typeof Link>, "onClick"> & {
  eventName: string;
  eventProduct?: string;
};

export default function AffiliateLink({
  eventName,
  eventProduct,
  children,
  ...rest
}: AffiliateLinkProps) {
  return (
    <Link
      {...rest}
      onClick={() => {
        track(eventName, {
          product: eventProduct ?? "",
          href: typeof rest.href === "string" ? rest.href : "",
        });
      }}
    >
      {children}
    </Link>
  );
}

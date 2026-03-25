"use client";

import AffiliateLink from "./AffiliateLink";

type StickyAmazonCtaProps = {
  href: string;
  productName: string;
  label?: string;
};

export default function StickyAmazonCta({
  href,
  productName,
  label = "Ver na Amazon",
}: StickyAmazonCtaProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-sm md:hidden">
      <p className="mb-2 text-center text-[11px] leading-snug text-slate-500">
        Link de afiliado — compra na Amazon, sem custo extra para ti.
      </p>
      <AffiliateLink
        href={href}
        eventName="amazon_cta_sticky"
        eventProduct={productName}
        className="flex w-full items-center justify-center rounded-xl bg-sky-600 px-4 py-3.5 text-base font-semibold text-white hover:bg-sky-700 transition"
      >
        👉 {label}
      </AffiliateLink>
    </div>
  );
}

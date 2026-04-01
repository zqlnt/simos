import { CreditCard } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export default function CheckoutPage() {
  return (
    <div className="relative z-10 mx-auto max-w-2xl space-y-8">
      <PageHeader
        icon={CreditCard}
        title="Checkout"
        subtitle="Reserve this route for payments or subscriptions. The shell stays the same so checkout matches the rest of Sim."
      />
      <div className="glass-panel flex flex-col items-center gap-3 rounded-[1.75rem] px-6 py-12 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/45 text-gray-400 ring-1 ring-white/50">
          <CreditCard className="h-6 w-6" strokeWidth={1.5} />
        </span>
        <p className="text-sm text-gray-500">
          No payment provider connected yet.
        </p>
      </div>
    </div>
  );
}

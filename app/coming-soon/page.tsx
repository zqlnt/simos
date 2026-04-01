import { Clock, Rocket } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export default function ComingSoonPage() {
  return (
    <div className="relative z-10 mx-auto max-w-2xl space-y-8 text-center">
      <PageHeader
        icon={Clock}
        title="Coming soon"
        subtitle="Placeholder for the next public surface. Swap this route for a product launch or waitlist when you are ready."
        subtitleClassName="max-w-2xl mx-auto"
        align="center"
      />
      <div className="glass-bubble mx-auto inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium text-gray-700">
        <Rocket className="h-4 w-4 text-[var(--app-primary)]" strokeWidth={1.75} />
        Checkout and billing can plug in here later.
      </div>
    </div>
  );
}

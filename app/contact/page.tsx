import { Mail, Send } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export default function ContactPage() {
  return (
    <div className="relative z-10 mx-auto max-w-xl space-y-8 sm:space-y-10">
      <PageHeader icon={Mail} title="Contact" />
      <form
        className="glass-panel space-y-6 rounded-[1.75rem] p-6 sm:p-8"
        action="#"
        method="post"
      >
        <div className="space-y-2.5">
          <label
            htmlFor="email"
            className="flex items-center gap-2 text-sm font-medium text-gray-700"
          >
            <Mail className="h-4 w-4 text-gray-400" strokeWidth={1.75} />
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="glass-field w-full rounded-xl px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--app-primary)]"
            placeholder="you@example.com"
          />
        </div>
        <div className="space-y-2.5">
          <label htmlFor="msg" className="text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="msg"
            name="message"
            rows={5}
            className="glass-field w-full resize-y rounded-xl px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--app-primary)]"
            placeholder="How can we help?"
          />
        </div>
        <button
          type="submit"
          className="btn-primary inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold sm:w-auto"
        >
          <Send className="h-4 w-4" strokeWidth={1.75} />
          Send
        </button>
      </form>
    </div>
  );
}

import { redirect } from "next/navigation";

/** Alternate name / URL for Simulatia — keeps bookmarks valid. */
export default function SimulonRedirect() {
  redirect("/simulatia");
}

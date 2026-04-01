"use client";

import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  const fn = () => onChange();
  window.addEventListener("hashchange", fn);
  window.addEventListener("popstate", fn);
  return () => {
    window.removeEventListener("hashchange", fn);
    window.removeEventListener("popstate", fn);
  };
}

function getHashSnapshot() {
  return typeof window !== "undefined" ? window.location.hash : "";
}

/** Client hash for scope pills; SSR-safe. */
export function useHash() {
  return useSyncExternalStore(subscribe, getHashSnapshot, () => "");
}

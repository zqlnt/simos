"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type ViewMode = "2d" | "3d";

export type AppChromeContextValue = {
  leftCollapsed: boolean;
  setLeftCollapsed: (v: boolean) => void;
  toggleLeft: () => void;
  rightCollapsed: boolean;
  setRightCollapsed: (v: boolean) => void;
  toggleRight: () => void;
  rightMobileOpen: boolean;
  setRightMobileOpen: (v: boolean) => void;
  /** When true, the top dock header is fully hidden (restore via floating control). */
  topChromeHidden: boolean;
  setTopChromeHidden: (v: boolean) => void;
  toggleTopChrome: () => void;
  promptExpanded: boolean;
  setPromptExpanded: (v: boolean) => void;
  togglePrompt: () => void;
  viewMode: ViewMode;
  setViewMode: (v: ViewMode) => void;
  /** iOS-style: bottom prompt + Sim OS bar collapsed to a minimal pill. */
  bottomDockCollapsed: boolean;
  setBottomDockCollapsed: (v: boolean) => void;
  toggleBottomDock: () => void;
};

const AppChromeContext = createContext<AppChromeContextValue | null>(null);

export function AppChromeProvider({ children }: { children: ReactNode }) {
  const [leftCollapsed, setLeftCollapsed] = useState(false);
  const [rightCollapsed, setRightCollapsed] = useState(false);
  const [rightMobileOpen, setRightMobileOpen] = useState(false);
  const [topChromeHidden, setTopChromeHidden] = useState(false);
  const [promptExpanded, setPromptExpanded] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>("2d");
  const [bottomDockCollapsed, setBottomDockCollapsed] = useState(false);

  const toggleLeft = useCallback(() => setLeftCollapsed((c) => !c), []);
  const toggleRight = useCallback(() => setRightCollapsed((c) => !c), []);
  const toggleTopChrome = useCallback(() => setTopChromeHidden((c) => !c), []);
  const togglePrompt = useCallback(() => setPromptExpanded((c) => !c), []);
  const toggleBottomDock = useCallback(() => {
    setBottomDockCollapsed((c) => {
      if (!c) setPromptExpanded(false);
      return !c;
    });
  }, []);

  const value = useMemo(
    () => ({
      leftCollapsed,
      setLeftCollapsed,
      toggleLeft,
      rightCollapsed,
      setRightCollapsed,
      toggleRight,
      rightMobileOpen,
      setRightMobileOpen,
      topChromeHidden,
      setTopChromeHidden,
      toggleTopChrome,
      togglePrompt,
      promptExpanded,
      setPromptExpanded,
      viewMode,
      setViewMode,
      bottomDockCollapsed,
      setBottomDockCollapsed,
      toggleBottomDock,
    }),
    [
      leftCollapsed,
      rightCollapsed,
      rightMobileOpen,
      topChromeHidden,
      promptExpanded,
      viewMode,
      bottomDockCollapsed,
      toggleLeft,
      toggleRight,
      toggleTopChrome,
      togglePrompt,
      toggleBottomDock,
    ],
  );

  return (
    <AppChromeContext.Provider value={value}>
      {children}
    </AppChromeContext.Provider>
  );
}

export function useAppChrome() {
  const ctx = useContext(AppChromeContext);
  if (!ctx) {
    throw new Error("useAppChrome must be used within AppChromeProvider");
  }
  return ctx;
}

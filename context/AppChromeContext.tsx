"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
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
  /** Mobile left navigation drawer — mirrors rightMobileOpen. */
  leftMobileOpen: boolean;
  setLeftMobileOpen: (v: boolean) => void;
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
  /** True while main canvas is scrolling — workspace top bar + compact prompt dock. */
  scrollChromeActive: boolean;
  /** One-shot pulse after scroll idle — spring-open animation on prompt dock. */
  scrollDockSpring: boolean;
  /** Attach the scrollable main canvas (for reset view). */
  registerMainCanvas: (el: HTMLElement | null) => void;
  /** Scroll main canvas to top-left; also resets window scroll. */
  resetMainView: () => void;
};

const AppChromeContext = createContext<AppChromeContextValue | null>(null);

const SCROLL_CHROME_IDLE_MS = 240;
const SCROLL_DOCK_SPRING_MS = 560;

export function AppChromeProvider({ children }: { children: ReactNode }) {
  const mainCanvasRef = useRef<HTMLElement | null>(null);
  const [mainCanvasEl, setMainCanvasEl] = useState<HTMLElement | null>(null);
  const scrollIdleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const springTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [scrollChromeActive, setScrollChromeActive] = useState(false);
  const [scrollDockSpring, setScrollDockSpring] = useState(false);

  const registerMainCanvas = useCallback((el: HTMLElement | null) => {
    mainCanvasRef.current = el;
    setMainCanvasEl(el);
  }, []);

  const resetMainView = useCallback(() => {
    const el = mainCanvasRef.current;
    if (el) {
      el.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [leftCollapsed, setLeftCollapsed] = useState(false);
  const [rightCollapsed, setRightCollapsed] = useState(false);
  const [rightMobileOpen, setRightMobileOpen] = useState(false);
  const [leftMobileOpen, setLeftMobileOpen] = useState(false);
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

  useEffect(() => {
    if (!mainCanvasEl) return;

    const clearIdle = () => {
      if (scrollIdleTimerRef.current) {
        clearTimeout(scrollIdleTimerRef.current);
        scrollIdleTimerRef.current = null;
      }
    };

    const onScrollActivity = () => {
      setScrollDockSpring(false);
      setScrollChromeActive(true);
      clearIdle();
      scrollIdleTimerRef.current = setTimeout(() => {
        setScrollChromeActive(false);
        setScrollDockSpring(true);
        if (springTimerRef.current) clearTimeout(springTimerRef.current);
        springTimerRef.current = setTimeout(
          () => setScrollDockSpring(false),
          SCROLL_DOCK_SPRING_MS,
        );
      }, SCROLL_CHROME_IDLE_MS);
    };

    mainCanvasEl.addEventListener("scroll", onScrollActivity, { passive: true });
    mainCanvasEl.addEventListener("wheel", onScrollActivity, { passive: true });
    return () => {
      mainCanvasEl.removeEventListener("scroll", onScrollActivity);
      mainCanvasEl.removeEventListener("wheel", onScrollActivity);
      clearIdle();
      if (springTimerRef.current) clearTimeout(springTimerRef.current);
    };
  }, [mainCanvasEl]);

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
      leftMobileOpen,
      setLeftMobileOpen,
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
      scrollChromeActive,
      scrollDockSpring,
      registerMainCanvas,
      resetMainView,
    }),
    [
      leftCollapsed,
      rightCollapsed,
      rightMobileOpen,
      leftMobileOpen,
      topChromeHidden,
      promptExpanded,
      viewMode,
      bottomDockCollapsed,
      scrollChromeActive,
      scrollDockSpring,
      toggleLeft,
      toggleRight,
      toggleTopChrome,
      togglePrompt,
      toggleBottomDock,
      registerMainCanvas,
      resetMainView,
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

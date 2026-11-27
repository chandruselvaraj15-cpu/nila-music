export type ThemeMode = "light" | "dark" | "system";
export function applyTheme(mode: ThemeMode) {
  const isDark =
    mode === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : mode === "dark";
  document.documentElement.setAttribute(
    "data-theme",
    isDark ? "dark" : "light"
  );
  localStorage.setItem("nila-theme-mode", mode);
}
export function loadTheme() {
  const saved = localStorage.getItem("nila-theme-mode") as ThemeMode | null;
  applyTheme(saved || "system");
}

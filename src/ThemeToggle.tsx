import { useState } from "react";
import { applyTheme, type ThemeMode } from "./themeController";
export default function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>(() => {
    return (
      (localStorage.getItem("nila-theme-mode") as ThemeMode) || "system"
    );
  });
  const changeTheme = (newMode: ThemeMode) => {
    setMode(newMode);
    applyTheme(newMode);
  };
  return (
    <div className="theme-toggle">
      <h3>Appearance</h3>

      <div className="theme-options">
        <button
          className={mode === "light" ? "selected" : ""}
          onClick={() => changeTheme("light")}
        >
          ☀️ White
        </button>
        <button
          className={mode === "dark" ? "selected" : ""}
          onClick={() => changeTheme("dark")}
        >
          🌙 Dark
        </button>
        <button
          className={mode === "system" ? "selected" : ""}
          onClick={() => changeTheme("system")}
        >
          ⚙️ Auto
        </button>
      </div>
    </div>
  );
}

import { useGlobalState } from "../hooks/useGlobalState";

export function DarkModeButton2() {
  const [darkMode, setDarkMode] = useGlobalState("darkMode", false);
  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      Toggle Dark Mode {darkMode ? "Off" : "On"}
    </button>
  );
}

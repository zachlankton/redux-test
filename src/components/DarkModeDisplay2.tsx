import { useGlobalState } from "../hooks/useGlobalState";

export function DarkModeDisplay2() {
  const [darkMode] = useGlobalState("darkMode", false);
  return <p>{darkMode ? "Dark Mode" : "Light Mode"}</p>;
}

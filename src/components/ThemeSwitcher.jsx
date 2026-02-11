import { useTheme } from "../context/ThemeContext";

export default function ThemeSwitcher() {
  const { theme } = useTheme();
  return (
    <>
      <button className={theme}>ThemeSwitcher</button>
    </>
  );
}

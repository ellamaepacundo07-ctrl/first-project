import useTheme from "../hooks/useTheme";

export default function AppHeader() {
  const { theme, changeTheme } = useTheme();

  return (
    <div className="app-header">
      <button onClick={() => changeTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? "change to light" : "change to dark"}
      </button>
    </div>
  );
}

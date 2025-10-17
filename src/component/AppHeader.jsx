import useTheme from "../hooks/useTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AppHeader() {
  const { theme, changeTheme } = useTheme();

  return (
    <div className="app-header">
      <h1 className="site-title">
        <FontAwesomeIcon icon="book" className="book-icon" /> My Library</h1>
      <button 
        onClick={() => changeTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? "light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}
 
import "./App.css";
import QuoteCard from "./component/QuoteCard";
import QuoteForm from "./component/QuoteForm";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash,
  faPencilAlt,
  faBook,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import useQuotes from "./hooks/useQuotes";
import AppHeader from "./component/AppHeader";
import useTheme from "./hooks/useTheme";
import { useState } from "react";

library.add(faTrash, faPencilAlt, faBook, faHeart);

function App() {
  const {
    quotesArray,
    editingIndex,
    handleDelete,
    handleEdit,
    handleSelectEdit,
    handleCancelEdit,
    handleCreate,
    handleClearQuotes,
    handleToggleFavorite,
  } = useQuotes();

  const { theme } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className={`app-background ${theme === "dark" ? "dark" : "light"}`}>
      <AppHeader />
      <div className="app-content">
        <div className="search-filter-section">
          <input
            type="text"
            placeholder="Search quotes..."
            className="search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="filter-buttons">
            <button onClick={() => setSelectedCategory("All")}>All</button>
            <button onClick={() => setSelectedCategory("Motivational")}>
              Motivational
            </button>
            <button onClick={() => setSelectedCategory("Love")}>Love</button>
            <button onClick={() => setSelectedCategory("Wisdom")}>
              Wisdom
            </button>
            <button onClick={() => setSelectedCategory("Favorites")}>
              Favorites
            </button>
          </div>
        </div>

        <QuoteForm handleCreate={handleCreate} />

        <div className="clearall-container">
          <button
            className="clearall-btn"
            onClick={() => {
              if (confirm("Would you like to clear all quotes?")) {
                handleClearQuotes();
              }
            }}
          >
            Clear All
          </button>
        </div>

        <div className="quote-card-container">
          {quotesArray.map((quote, index) => (
            <QuoteCard
              key={quote.id}
              sentence={quote.sentence}
              author={quote.author}
              onDelete={() => handleDelete(index)}
              isEditing={editingIndex === index}
              selectEdit={() => handleSelectEdit(index)}
              cancelEditing={handleCancelEdit}
              onUpdate={(newSentence, newAuthor) =>
                handleEdit(index, newSentence, newAuthor)
              }
              onToggleFavorite={() => handleToggleFavorite(index)}
              isFavorite={quote.favorite}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

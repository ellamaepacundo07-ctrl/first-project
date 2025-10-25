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
    editingId,
    handleDeleteById,
    handleEditById,
    handleSelectEdit,
    handleCancelEdit,
    handleCreate,
    handleClearQuotes,
    handleToggleFavoriteById,
  } = useQuotes();

  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter quotes based on category
  const filteredQuotes = quotesArray.filter((quote) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Favorites") return quote.favorite;
    return quote.category === selectedCategory;
  });

  return (
    <div className={`app-background ${theme === "dark" ? "dark" : "light"}`}>
      <AppHeader />

      <div className="app-content">
        <div className="filter-buttons">
          <button onClick={() => setSelectedCategory("All")}>All</button>
          <button onClick={() => setSelectedCategory("Motivational")}>
            Motivational
          </button>
          <button onClick={() => setSelectedCategory("Love")}>Love</button>
          <button onClick={() => setSelectedCategory("Wisdom")}>Wisdom</button>
          <button onClick={() => setSelectedCategory("Favorites")}>
            Favorites
          </button>
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
          {filteredQuotes.map((quote) => (
            <QuoteCard
              key={quote.id}
              sentence={quote.sentence}
              author={quote.author}
              onDelete={() => handleDeleteById(quote.id)}
              isEditing={editingId === quote.id}
              selectEdit={() => handleSelectEdit(quote.id)}
              cancelEditing={handleCancelEdit}
              onUpdate={(newSentence, newAuthor) =>
                handleEditById(quote.id, newSentence, newAuthor)
              }
              onToggleFavorite={() => handleToggleFavoriteById(quote.id)}
              isFavorite={quote.favorite}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

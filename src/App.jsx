import "./App.css";
import bookImage from "./assets/book.jpg";
import QuoteCard from "./component/QuoteCard";
import QuoteForm from "./component/QuoteForm";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import useQuotes from "./hooks/useQuotes";
import AppHeader from "./component/AppHeader";
import useTheme from "./hooks/useTheme";

library.add(faTrash, faPencilAlt);

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
  } = useQuotes();

  const { theme } = useTheme();

  return (
    <div className={`app-background ${theme === "dark" ? "dark" : "light"}`}>
      <AppHeader />
      <div className="app-content">
        <QuoteForm handleCreate={handleCreate} />
        <button onClick={handleClearQuotes}>clearall</button>

        <div className="responsive">change me</div>
        <div className="quote-card-container">
          <img src={bookImage} alt="Book" className="book-image" />
          {quotesArray.map((quote, index) => (
            <QuoteCard
              key={index}
              sentence={quote.sentence}
              author={quote.author}
              onDelete={() => handleDelete(index)}
              isEditing={editingIndex === index}
              selectEdit={() => handleSelectEdit(index)}
              cancelEditing={handleCancelEdit}
              onUpdate={(newSentence, newAuthor) =>
                handleEdit(index, newSentence, newAuthor)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

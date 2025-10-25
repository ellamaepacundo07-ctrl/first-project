import { useEffect, useState } from "react";

export default function useQuotes() {
  const [quotesArray, setQuotesArray] = useState([]);
  const [editingId, setEditingId] = useState(null); // track editing by id

  useEffect(() => {
    setQuotesArray([
      {
        id: 1,
        sentence:
          "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
        author: "Albert Einstein",
        category: "Wisdom",
        favorite: false,
      },
      {
        id: 2,
        sentence:
          "The best and most beautiful things in the world cannot be seen or even touched. They must be felt with the heart",
        author: "Joe Jackson",
        category: "Love",
        favorite: false,
      },
      {
        id: 3,
        sentence:
          "My mission in life is not merely to survive, but to thrive. And to do so with some passion, some compassion, some humor, and some style",
        author: "Margaret Thatcher",
        category: "Motivational",
        favorite: false,
      },
    ]);
  }, []);

  // Create a new quote
  function handleCreate(sentence, author, category = "All") {
    const newQuote = {
      id: Date.now(),
      sentence,
      author,
      category,
      favorite: false,
    };
    setQuotesArray((prev) => [...prev, newQuote]);
  }

  // Delete by id
  function handleDeleteById(id) {
    setQuotesArray(quotesArray.filter((quote) => quote.id !== id));
  }

  // Edit by id
  function handleEditById(id, newSentence, newAuthor) {
    setQuotesArray(
      quotesArray.map((quote) =>
        quote.id === id ? { ...quote, sentence: newSentence, author: newAuthor } : quote
      )
    );
    setEditingId(null);
  }

  // Select quote for editing
  function handleSelectEdit(id) {
    setEditingId(id);
  }

  // Cancel editing
  function handleCancelEdit() {
    setEditingId(null);
  }

  // Toggle favorite by id
  function handleToggleFavoriteById(id) {
    setQuotesArray(
      quotesArray.map((quote) =>
        quote.id === id ? { ...quote, favorite: !quote.favorite } : quote
      )
    );
  }

  // Clear all quotes
  function handleClearQuotes() {
    setQuotesArray([]);
  }

  return {
    quotesArray,
    editingId,
    handleCreate,
    handleDeleteById,
    handleEditById,
    handleSelectEdit,
    handleCancelEdit,
    handleToggleFavoriteById,
    handleClearQuotes,
  };
}

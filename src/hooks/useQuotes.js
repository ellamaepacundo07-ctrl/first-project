import { useEffect, useState } from "react";

export default function useQuotes() {
  const [quotesArray, setQuotesArray] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  // Initialize some default quotes
  useEffect(() => {
    setQuotesArray([
      {
        id: 1,
        sentence:
          "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
        author: "Albert Einstein",
        favorite: false,
        category: "Wisdom",
      },
      {
        id: 2,
        sentence:
          "The best and most beautiful things in the world cannot be seen or even touched. They must be felt with the heart",
        author: "Joe Jackson",
        favorite: false,
        category: "Love",
      },
      {
        id: 3,
        sentence:
          "My mission in life is not merely to survive, but to thrive. And to do so with some passion, some compassion, some humor, and some style",
        author: "Margaret Thatcher",
        favorite: false,
        category: "Motivational",
      },
    ]);
  }, []);

  // Delete a quote
  function handleDelete(indexToRemove) {
    const updatedQuotes = [...quotesArray];
    updatedQuotes.splice(indexToRemove, 1);
    setQuotesArray(updatedQuotes);
  }

  // Edit a quote (merge instead of replace!)
  function handleEdit(index, sentence, author) {
    const updatedQuotes = [...quotesArray];
    updatedQuotes[index] = {
      ...updatedQuotes[index], // <-- preserves favorite, id, category
      sentence,
      author,
    };
    setQuotesArray(updatedQuotes);
    setEditingIndex(null);
  }

  // Select a quote for editing
  function handleSelectEdit(index) {
    setEditingIndex(index);
  }

  // Cancel editing
  function handleCancelEdit() {
    setEditingIndex(null);
  }

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

  // Toggle favorite state
  function handleToggleFavorite(index) {
    const updatedQuotes = [...quotesArray];
    updatedQuotes[index] = {
      ...updatedQuotes[index],
      favorite: !updatedQuotes[index].favorite,
    };
    setQuotesArray(updatedQuotes);
    console.log("Toggled favorite for:", updatedQuotes[index]);
  }

  // Clear all quotes
  function handleClearQuotes() {
    setQuotesArray([]);
  }

  return {
    quotesArray,
    editingIndex,
    handleDelete,
    handleEdit,
    handleSelectEdit,
    handleCancelEdit,
    handleCreate,
    handleClearQuotes,
    handleToggleFavorite,
  };
}

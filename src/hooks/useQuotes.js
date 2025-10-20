import { useEffect, useState } from "react";

export default function useQuotes() {
  const [quotesArray, setQuotesArray] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

    useEffect(() => {
    const storedQuotes = JSON.parse(localStorage.getItem("quotes"));
    if (storedQuotes) {
      setQuotesArray(storedQuotes);
    } else {
      setQuotesArray([
        {
          sentence:
            "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
          author: "Albert Einstein",
          isFavorite: false,
        },
        {
          sentence:
            "The best and most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.",
          author: "Joe Jackson",
          isFavorite: false,
        },
        {
          sentence:
            "My mission in life is not merely to survive, but to thrive — and to do so with some passion, some compassion, some humor, and some style.",
          author: "Margaret Thatcher",
          isFavorite: false,
        },
      ]);
    }
  }, []);

  // Save to localStorage every time quotes change
  useEffect(() => {
    localStorage.setItem("quotes", JSON.stringify(quotesArray));
  }, [quotesArray]);

  function handleDelete(indexToRemove) {
    let shadowArray = [...quotesArray];
    shadowArray.splice(indexToRemove, 1);
    setQuotesArray(shadowArray);
  }

  function handleEdit(index, sentence, author) {
    let shadowArray = [...quotesArray];
    shadowArray[index] = { sentence: sentence, author: author };
    setQuotesArray(shadowArray);
    setEditingIndex(null);
  }

  function handleSelectEdit(index) {
    setEditingIndex(index);
  }

  function handleCancelEdit() {
    setEditingIndex(null);
  }

  function handleCreate(sentence, author) {
    const newArray = [
      { sentence, author, isFavorite: false },
      ...quotesArray,
    ];
    setQuotesArray(newArray);
  }

  // ❤️ Toggle favorite
  function handleToggleFavorite(index) {
    const updated = [...quotesArray];
    updated[index].isFavorite = !updated[index].isFavorite;
    setQuotesArray(updated);
  }

  function handleClearQuotes() {
    setQuotesArray([])
  }

  return {
    quotesArray,
    handleEdit,
    handleDelete,
    editingIndex,
    handleSelectEdit,
    handleCancelEdit,
    handleCreate,
    handleClearQuotes,
     handleToggleFavorite, // <- added this
  };
}

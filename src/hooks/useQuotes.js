import { useEffect, useState } from "react";

export default function useQuotes() {
  const [quotesArray, setQuotesArray] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    setQuotesArray([
      {
        sentence:
          "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
        author: "Albert Einstein",
      },
      {
        sentence:
          "The best and most beautiful things in the world cannot be seen or even touched. They must be felt with the heart",
        author: "Joe Jackson",
      },
      {
        sentence:
          "My mission in life is not merely to survive, but to thrive. And to do so with some passion, some compassion, some humor, and some style",
        author: "Margaret Thatcher",
      },
    ]);
  }, []);

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
    const newArray = [{ sentence: sentence, author: author }, ...quotesArray];
    setQuotesArray(newArray);
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
  };
}

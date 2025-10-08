import React, { useEffect, useState } from "react";
import "./App.css";
import QuoteCard from "./component/QuoteCard";
import QuoteForm from "./component/QuoteForm";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash, faPencilAlt);

function App() {
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

  return (
    <div className="app-background">
      <QuoteForm setQuoteArray={setQuotesArray} quotesArray={quotesArray} />
      <div className="quote-card-container">
        {quotesArray.map((quote, index) => (
          <QuoteCard
            key={index}
            sentence={quote.sentence}
            author={quote.author}
            onDelete={() => handleDelete(index)}
            isEditing={editingIndex === index}
            selectEdit={() => setEditingIndex(index)}
            cancelEditing={() => setEditingIndex(null)}
            onUpdate={(newSentence, newAuthor) =>
              handleEdit(index, newSentence, newAuthor)
            }
          />
        ))}
      </div>
    </div>
  );
}

export default App;

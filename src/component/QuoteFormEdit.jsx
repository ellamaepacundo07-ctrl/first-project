import { useState } from "react";

function QuoteFormEdit({ cardSentence, cardAuthor, cancelEditing, onUpdate }) {
  const [sentence, setSentence] = useState(cardSentence);
  const [author, setAuthor] = useState(cardAuthor);

  function handleCancel() {
    if (cardSentence != sentence || cardAuthor != author) {
      if (confirm("Are you sure you don't want to save previous changes?")) cancelEditing();
      return;
    }
    cancelEditing();
  }

  return (
    <div className="quote-form">
      <div className="quote-form-input">
        <div>Sentence</div>
        <input
          type="text"
          value={sentence}
          onChange={(event) => setSentence(event.target.value)}
        />
      </div>
      <div className="quote-form-input">
        <div>Author</div>
        <input
          type="text"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
      </div>
      <button
        className="quote-form-submit"
        onClick={() => onUpdate(sentence, author)}
      >
        Update
      </button>
      <button className="quote-form-cancel" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  );
}
export default QuoteFormEdit;

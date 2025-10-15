import { useState } from "react";

function QuoteForm({ handleCreate }) {
  const [sentence, setSentence] = useState("");
  const [author, setAuthor] = useState("");

  function onSubmit() {
    if (sentence.length > 0 && author.length > 0) {
      handleCreate(sentence, author);
      onClear();
      return;
    }

    alert("please enter inputs");
  }

  function onClear() {
    setSentence("");
    setAuthor("");
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
      <button className="quote-form-submit" onClick={onSubmit}>
        Submit
      </button>
      <button className="quote-form-cancel" onClick={onClear}>
        Cancel
      </button>
    </div>
  );
}
export default QuoteForm;

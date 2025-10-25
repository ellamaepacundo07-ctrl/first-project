import { useState } from "react";

function QuoteForm({ handleCreate }) {
  const [sentence, setSentence] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("Motivational"); // default category

  function onSubmit() {
    if (sentence.length > 0 && author.length > 0) {
      handleCreate(sentence, author, category);
      onClear();
      return;
    }
    alert("Please enter sentence and author");
  }

  function onClear() {
    setSentence("");
    setAuthor("");
    setCategory("Motivational");
  }

  return (
    <div className="quote-form">
      <div className="quote-form-input">
        <div>Sentence</div>
        <input
          type="text"
          value={sentence}
          onChange={(e) => setSentence(e.target.value)}
        />
      </div>

      <div className="quote-form-input">
        <div>Author</div>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div className="quote-form-input">
        <div>Category</div>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Motivational">Motivational</option>
          <option value="Love">Love</option>
          <option value="Wisdom">Wisdom</option>
        </select>
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

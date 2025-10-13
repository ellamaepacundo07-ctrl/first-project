import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QuoteFormEdit from "./QuoteFormEdit";

function QuoteCard({
  sentence,
  author,
  onDelete,
  selectEdit,
  isEditing,
  cancelEditing,
  onUpdate,
}) {
  return (
    <div className="quote-card">
      {isEditing ? (
        <QuoteFormEdit
          cancelEditing={cancelEditing}
          cardSentence={sentence}
          cardAuthor={author}
          onUpdate={onUpdate}
        />
      ) : (
        <>
          <div className="quote-sentence">"{sentence}"</div>
          <div className="quote-author">
            <div className="quote-author-line" />
            {author}
          </div>

          <div
            className="quote-card-fatrash"
            onClick={() => {
              if (confirm("Are you sure you want to delete?")) {
                onDelete();
              }
            }}
          >
            <FontAwesomeIcon icon="trash" />
          </div>
          <div className="quote-card-fapen" onClick={selectEdit}>
            <FontAwesomeIcon icon="pencil" />
          </div>
        </>
      )}
    </div>
  );
}

export default QuoteCard;

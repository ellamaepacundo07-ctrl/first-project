import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QuoteFormEdit from "./QuoteFormEdit";
import Swal from "sweetalert2";

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
              Swal.fire({
                title: "Are you sure?",
                text: "Do you want to delete this quote?",
                showCancelButton: true,
                confirmButtonText: "Yes",
                cancelButtonText: "Cancel",
                customClass: {
                  popup: "delete-swal-popup",
                  title: "delete-swal-title",
                  confirmButton: "delete-swal-confirm",
                  cancelButton: "delete-swal-cancel",
                },
                buttonsStyling: false,
              }).then((result) => {
                if (result.isConfirmed) {
                  onDelete();
                  Swal.fire("Your quote has been removed.");
                }
              });
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

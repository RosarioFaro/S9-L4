import { ListGroup, Button } from "react-bootstrap";
import crossDlt from "../assets/cross.png";

const API_KEY = import.meta.env.VITE_API_KEY;

const SingleComment = ({ comment, onDelete }) => {
  const deleteComment = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      });

      if (response.ok) {
        onDelete();
      } else {
        console.error("Errore nella cancellazione del commento");
      }
    } catch (error) {
      console.error("Errore nella richiesta DELETE:", error);
    }
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <p className="mb-0">{comment.comment}</p>
      <div className="d-flex align-items-center">
        <p className="mb-0 me-2">
          <strong>Voto:</strong> {comment.rate}
        </p>
        <Button variant="transparent" size="sm" onClick={deleteComment}>
          <img src={crossDlt} alt="crossDlt" width="40" height="40" />
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default SingleComment;

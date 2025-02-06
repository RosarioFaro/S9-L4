import SingleComment from "./SingleComment";
import { ListGroup } from "react-bootstrap";

const CommentsList = ({ comments, onDelete }) => {
  return (
    <ListGroup>
      {comments.length > 0 ? (
        comments.map((comment) => <SingleComment key={comment._id} comment={comment} onDelete={onDelete} />)
      ) : (
        <ListGroup.Item>Nessun commento disponibile.</ListGroup.Item>
      )}
    </ListGroup>
  );
};

export default CommentsList;

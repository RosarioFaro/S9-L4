import React from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  toggleSelection = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };

  render() {
    const { book } = this.props;
    return (
      <>
        <Card
          style={{
            border: this.state.selected ? "3px solid red" : "3px solid rgb(255, 224, 130)",
            cursor: "pointer",
          }}
          className="mb-4"
          onClick={this.toggleSelection}
        >
          <Card.Img
            variant="top"
            src={book.img}
            alt={book.title}
            style={{
              objectFit: "contain",
              width: "100%",
              height: "24em",
            }}
          />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
          </Card.Body>
        </Card>
        {this.state.selected && <CommentArea bookAsin={book.asin} />}
      </>
    );
  }
}

export default SingleBook;

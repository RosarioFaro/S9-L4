import { Component } from "react";
import { Form, Button } from "react-bootstrap";
import send from "../assets/send.png";

const API_KEY = import.meta.env.VITE_API_KEY;

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      rate: 1,
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const newComment = {
      comment: this.state.comment,
      rate: this.state.rate,
      elementId: this.props.bookAsin,
    };

    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments", {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      });

      if (response.ok) {
        this.setState({ comment: "", rate: 1 });
        this.props.onCommentAdded();
      } else {
        console.error("Errore nell'invio del commento");
      }
    } catch (error) {
      console.error("Errore nella richiesta POST:", error);
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="mt-3">
        <Form.Group>
          <Form.Label>Aggiungi un commento</Form.Label>
          <Form.Control
            type="text"
            placeholder="Scrivi un commento..."
            value={this.state.comment}
            onChange={(e) => this.setState({ comment: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group className="mt-2">
          <Form.Label>Voto</Form.Label>
          <Form.Control as="select" value={this.state.rate} onChange={(e) => this.setState({ rate: e.target.value })}>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num}>{num}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Button
          type="submit"
          className="mt-2 bg-transparent"
          style={{
            backgroundColor: "#e8b95a",
            borderColor: "#e8b95a",
          }}
        >
          <img src={send} alt="send" width="40" height="40" />
        </Button>
      </Form>
    );
  }
}

export default AddComment;

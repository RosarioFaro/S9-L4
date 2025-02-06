import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

const API_KEY = import.meta.env.VITE_API_KEY;

class CommentArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    if (this.props.bookAsin) {
      this.fetchComments();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.bookAsin !== this.props.bookAsin && this.props.bookAsin) {
      this.fetchComments();
    }
  }

  fetchComments = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.bookAsin}`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Fetched comments:", data);
        this.setState({ comments: data });
      } else {
        console.error("Errore nel recupero dei commenti");
      }
    } catch (error) {
      console.error("Errore nella fetch:", error);
    }
  };

  handleDelete = () => {
    this.fetchComments();
  };

  render() {
    return (
      <div className="mt-3">
        {this.state.comments.length === 0 ? (
          <p>No comments yet.</p>
        ) : (
          <CommentList comments={this.state.comments} onDelete={this.handleDelete} />
        )}
        <AddComment bookAsin={this.props.bookAsin} onCommentAdded={this.fetchComments} />
      </div>
    );
  }
}

export default CommentArea;

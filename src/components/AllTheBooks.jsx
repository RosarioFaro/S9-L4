import { Card, Container, Row, Col } from "react-bootstrap";
import books from "../Books/fantasy.json";

const AllTheBooks = () => {
  return (
    <Container className="mt-4">
      <Row>
        {books.map((book) => (
          <Col key={book.asin} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="d-flex flex-column h-100">
              <Card.Img variant="top" src={book.img} alt={book.title} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{book.title}</Card.Title>
                <Card.Text className="mt-auto">Price: {book.price}€</Card.Text>
                <Card.Text>Category: {book.category}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;

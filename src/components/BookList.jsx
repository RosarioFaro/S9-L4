import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = ({ books }) => {
  return (
    <Container className="mt-4">
      <Row className="g-2">
        {books.map((book) => (
          <Col key={book.asin} xs={12} sm={6} lg={4}>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;

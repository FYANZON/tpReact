import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-light mt-auto">
      <Container>
        <Row>
          <Col md={6}>
            <p>&copy; 2023 Tu Nombre</p>
          </Col>
          <Col md={6} className="text-end">
            <a href="/contacto" className="text-light">
              Contacto
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;


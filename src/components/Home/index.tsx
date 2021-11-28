import React from 'react'
import { Button, Container, Image, Row, Col, Card, Carousel } from 'react-bootstrap'
import Logo from '../../assets/img/logo/logo.png'

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="home-el">
        <Container fluid className="flex-center">
          <Row className="logo-options">
            <Col>
              <Image src={Logo} className="img-presentation" alt="Residencial Schappo" />
            </Col>
            <Col>
              <Row>
                <Col>
                  <Card style={{ width: '18rem' }}>
                    <Carousel>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="holder.js/800x400?text=First slide&bg=373940"
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3>First slide label</h3>
                          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="holder.js/800x400?text=Second slide&bg=282c34"
                          alt="Second slide"
                        />

                        <Carousel.Caption>
                          <h3>Second slide label</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="holder.js/800x400?text=Third slide&bg=20232a"
                          alt="Third slide"
                        />

                        <Carousel.Caption>
                          <h3>Third slide label</h3>
                          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        {
                          `Some quick example text to build on the card title and make up the bulk of
                          the card's content.`
                        }
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  Reservas
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="home-el slogan">
        <Container className="flex-center">
          <Row>
            <Col><h4 className="home-rs">Residencial Schappo</h4></Col>
          </Row>
          <Row>
            <Col><h1 className="home-slogan">Suas férias em Florianópolis começam aqui</h1></Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Home

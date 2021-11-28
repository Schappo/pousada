import React from 'react'
import { Container, Image, Row, Col, Card, Carousel } from 'react-bootstrap'
import Logo from '../../assets/img/logo/logo.png'
import FaxadaRS from '../../assets/img/rs-wp/1.jpg'
import Ap01 from '../../assets/img/rs-wp/schappo-apto1-1.jpg'
import Ap02 from '../../assets/img/rs-wp/apto2-1.jpg'
import Ap03 from '../../assets/img/rs-wp/apto3-1.jpg'
import Ap04 from '../../assets/img/rs-wp/apto4-1.jpg'
import Ap05 from '../../assets/img/rs-wp/apto5-1.jpg'

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
                  <Card>
                    <Carousel>
                      <Carousel.Item>
                        <Image
                          className="d-block w-100 p-2"
                          src={FaxadaRS}
                          alt="Third slide"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <Image
                          className="d-block w-100 p-2"
                          src={Ap01}
                          alt="Third slide"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <Image
                          className="d-block w-100 p-2"
                          src={Ap02}
                          alt="Third slide"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <Image
                          className="d-block w-100 p-2"
                          src={Ap03}
                          alt="Third slide"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <Image
                          className="d-block w-100 p-2"
                          src={Ap04}
                          alt="Third slide"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <Image
                          className="d-block w-100 p-2"
                          src={Ap05}
                          alt="Third slide"
                        />
                      </Carousel.Item>
                    </Carousel>
                    {/* <Card.Body>
                      <Card.Title>Ver todos os apartamentos</Card.Title>
                    </Card.Body> */}
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

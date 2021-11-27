import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'
import Logo from '../../assets/img/logo/logo.png'

const Introduction: React.FC = () => {
  return (
    <>
      <div>
        <Container fluid className="flex-center introduction">
          <Image src={Logo} className="img-presentation" alt="Residencial Schappo" />
        </Container>
      </div>
      <div className="intro">
        <Container className="flex-center intro">
          <Row>
            <Col><h4 className="intro-rs">Residencial Schappo</h4></Col>
          </Row>
          <Row>
            <Col><h1 className="intro-slogan">Suas férias em Florianópolis começam aqui</h1></Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Introduction

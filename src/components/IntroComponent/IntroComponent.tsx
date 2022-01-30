import React from "react";
import styled from "styled-components";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { ButtonData } from "../ButtonComponent/ButtonComponent";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const StyledContainer = styled(Container)`
  margin-top: 200px;
`;

const Box = styled.div`
  padding: 50px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  border: 2px solid white;
`;

const Title: any = styled.h1`
  font-size: 50px;
  text-transform: uppercase;
`;
const Paragraph: any = styled.p``;

const IntroCompontent = ({ data }: Props) => (
  <StyledContainer data-testid="IntroCompontent">
    <Row>
      <Col lg={{ span: 5, offset: 6 }}>
        <Box>
          <Title>{data.title}</Title>
          <Paragraph>{data.text}</Paragraph>
          <ButtonComponent
            data={data.primaryButton}
            type="primary"
          ></ButtonComponent>
          {data.secondaryButton ? (
            <ButtonComponent
              data={data.secondaryButton}
              type="secondary"
            ></ButtonComponent>
          ) : null}
        </Box>
      </Col>
    </Row>
  </StyledContainer>
);

export default IntroCompontent;

interface IntroData {
  title: string;
  text: string;
  primaryButton: ButtonData;
  secondaryButton?: ButtonData;
}

interface Props {
  data: IntroData;
}

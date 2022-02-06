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
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 2px;
  border: 1px solid #aaa;
  box-shadow: 0px 0px 51px -17px #111;
`;

const Title: any = styled.h1`
  font-weight: 600;
  font-size: 32px;
  text-transform: uppercase;
  margin-bottom: 20px;
`;
const Paragraph: any = styled.p`
  font-weight: 300;
  line-height: 30px;
`;

const Signature: any = styled.div`
  white-space: pre-wrap;
  font-family: "Comforter";
  font-size: 48px;
  margin-bottom: 26px;
  color: #040685;
`;
const IntroCompontent = ({ data }: Props) => (
  <StyledContainer data-testid="IntroCompontent">
    <Row>
      <Col lg={{ span: 5, offset: 1 }}>
        <Box>
          <Title>{data.title}</Title>
          <Paragraph>{data.text}</Paragraph>
          <Signature>{data.signature}</Signature>
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
  signature?: string;
  primaryButton: ButtonData;
  secondaryButton?: ButtonData;
}

interface Props {
  data: IntroData;
}

import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

const BackgroundImage: any = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  overflow: auto;

  &:before {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: ${(props: any) => `url(${props.image})`};
    opacity: 0.6;
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: -1;
  }
`;

const FullScreenImageComponent = ({ image, children }: any) => (
  <BackgroundImage image={image} data-testid="FullScreenImageComponent">
    <Container>{children}</Container>
  </BackgroundImage>
);

export default FullScreenImageComponent;

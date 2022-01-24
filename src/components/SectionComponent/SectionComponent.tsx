import React from "react";
import styled from "styled-components";

const BackgroundContainer: any = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 150px 0 150px 0;
  background-color: ${(props: any) => props.color};
`;

const SectionComponent = ({ color, children }: Props) => (
  <section>
    <BackgroundContainer color={color} data-testid="SectionComponent">
      {children}
    </BackgroundContainer>
  </section>
);

export default SectionComponent;

interface Props {
  children: any;
  color: string;
}

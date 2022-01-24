import React from "react";
import styled from "styled-components";

const OuterDiv: any = styled.div`
  background-color: red;
  width: 100%;
  padding-top: ${(props: any) => `${props.ratio}`};
  position: relative;
`;

const InnerDiv: any = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const RatioContainerComponent = ({ ratio, children }: Props) => (
  <OuterDiv ratio={ratio} data-testid="RatioContainerComponent">
    <InnerDiv>{children}</InnerDiv>
  </OuterDiv>
);

export default RatioContainerComponent;

interface Props {
  children: any;
  ratio: string;
}

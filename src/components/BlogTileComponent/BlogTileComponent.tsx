import React, { FC } from "react";
import styled from "styled-components";

interface BlogTileComponentProps {
  data: BlogTile;
}

export interface BlogTile {
  title: string;
  text: string;
  image: string;
  date: string;
}

const BlogTileContainer: any = styled.div`
  width: 300px;
  background-color: white;
  border: 0 #eee solid;
  box-sizing: border-box;
  margin: 0 24px 50px 0;
  padding-bottom: 10px;

  cursor: pointer;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0 5px 5px -5px #333;
    transform: translateY(-5px);
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:active {
    box-shadow: 0 5px 5px -8px #333;
    transform: translateY(-2px);
    transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const TextWrapper: any = styled.div`
  padding-top: 10px;
`;

const Image: any = styled.img`
  width: 100%;
  border-radius: 3px 3px 0 0;
  border-bottom: 1px #eee solid;
`;

Image.defaultProps = (props: any) => ({
  src: props.image,
});

const Title: any = styled.h3`
  font-weight: 600;
  font-size: 18px;
`;

const Text: any = styled.p`
  font-weight: 300;
  font-size: 14px;
  margin-bottom: 5px;
`;

const Date: any = styled.div`
  font-weight: 400;
  font-size: 12px;
  font-style: italic;
  color: #ccc;
`;

const BlogTileComponent: FC<BlogTileComponentProps> = (props) => {
  const { data } = props;
  return (
    <BlogTileContainer data-testid="BlogTileComponent">
      <Image src={props.data.image}></Image>
      <TextWrapper>
        <Title>{data.title}</Title>
        <Text>{data.text}</Text>
        <Date>{data.date}</Date>
      </TextWrapper>
    </BlogTileContainer>
  );
};

export default BlogTileComponent;

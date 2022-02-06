import React from "react";

import styles from "./BlogOverviewComponent.module.scss";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import BlogTileComponent, {
  BlogTile,
} from "../../../components/BlogTileComponent/BlogTileComponent";

import Masonry from "react-masonry-component";

interface BlogOverviewComponentProps {
  data: BlogOVerview;
}

interface BlogOVerview {
  title: string;
  text: string;
  blogTiles: BlogTile[];
}

const masonryOptions = {
  columnWidth: 315,
  transitionDuration: 400,
};

const imagesLoadedOptions = { background: ".my-bg-image-el" };

class BlogOverviewComponent extends React.Component<
  BlogOverviewComponentProps,
  any
> {
  render() {
    const { title, text, blogTiles } = this.props.data;

    const childElements = blogTiles.map((blogTile) => {
      return (
        <li className="image-element-class">
          <BlogTileComponent data={blogTile}></BlogTileComponent>
        </li>
      );
    });

    return (
      <Container className={styles.LandingPage} data-testid="BlogComponent">
        <Row>
          <Col>
            <h2>{title}</h2>
            <p>{text}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Masonry
              className={"my-gallery-class"} // default ''
              elementType={"ul"}
              options={{
                columnWidth: 324,
                itemSelector: ".image-element-class",
                transitionDuration: 400,
              }} // default {}
              disableImagesLoaded={false} // default false
              updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            >
              {childElements}
            </Masonry>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BlogOverviewComponent;

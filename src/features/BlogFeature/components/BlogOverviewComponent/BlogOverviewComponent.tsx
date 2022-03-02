import React from "react";
import styles from "./BlogOverviewComponent.module.scss";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import BlogTileComponent from "../../../../components/BlogTileComponent/BlogTileComponent";

import { Blog } from "../../../../model/model";
import Masonry from "react-masonry-component";
import BlogService from "../../../../services/BlogService";

const masonryOptions = {
  columnWidth: 324,
  itemSelector: ".image-element-class",
  transitionDuration: 400,
};

interface BlogOverviewComponentState {
  error?: string;
  isLoaded: boolean;
  data?: Blog[];
}

interface BlogOverviewComponentProps {}

class BlogOverviewComponent extends React.Component<
  BlogOverviewComponentProps,
  BlogOverviewComponentState
> {
  private blogService;

  constructor(props: BlogOverviewComponentProps) {
    super(props);
    this.state = {
      error: undefined,
      isLoaded: false,
      data: undefined,
    };
    this.blogService = new BlogService();
  }

  async componentDidMount() {
    this.setState({ data: await this.blogService.listBlogs(), isLoaded: true });
  }

  render() {
    const { data, error, isLoaded } = this.state;

    if (error) {
      return <div>Error: {error}</div>;
    } else if (isLoaded && data) {
      const childElements = data?.map((blog, index) => {
        return (
          <li className="image-element-class">
            <BlogTileComponent
              data={blog}
              key={index}
              href={blog._id ? "/blog/" + blog._id : undefined}
            ></BlogTileComponent>
          </li>
        );
      });

      return (
        <Container className={styles.LandingPage} data-testid="BlogComponent">
          <Row>
            <Col>
              {/* {title ? <h2>{title}</h2> : null}
              {text ? <p>{text}</p> : null} */}
            </Col>
          </Row>
          <Row>
            <Col>
              <Masonry
                className={"my-gallery-class"}
                elementType={"ul"}
                options={masonryOptions}
                disableImagesLoaded={false}
                updateOnEachImageLoad={false}
              >
                {childElements}
              </Masonry>
            </Col>
          </Row>
        </Container>
      );
    } else {
      return <div>loading</div>;
    }
  }
}

export default BlogOverviewComponent;

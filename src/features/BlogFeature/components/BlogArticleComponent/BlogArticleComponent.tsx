import React from "react";

import styles from "./BlogArticleComponent.module.scss";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import BlogService from "../../../../services/BlogService";
import { Blog } from "../../../../model/model";
import BlogParagraphComponent from "../../../../components/BlogParagraphComponent/BlogParagraphComponent";
import BlogIntroComponent from "../../../../components/BlogIntroComponent/BlogIntroComponent";

interface BlogArticleComponentState {
  error?: string;
  isLoaded: boolean;
  data?: Blog;
}

interface BlogArticleComponentProps {}

class BlogArticleComponent extends React.Component<
  BlogArticleComponentProps,
  BlogArticleComponentState
> {
  private blogService;

  constructor(props: BlogArticleComponentProps) {
    super(props);
    this.state = {
      error: undefined,
      isLoaded: false,
      data: undefined,
    };
    this.blogService = new BlogService();
  }

  async componentDidMount() {
    const result = await this.blogService.getBlog();
    this.setState({ data: result, isLoaded: true });
  }

  render() {
    const { data, error, isLoaded } = this.state;

    if (error) {
      return <div>Error: {error}</div>;
    } else if (isLoaded && data) {
      const paragraphs = data.paragraphs?.map((paragraph, index) => {
        return (
          <BlogParagraphComponent
            data={paragraph}
            key={index}
          ></BlogParagraphComponent>
        );
      });

      return (
        <Container
          className={styles.BlogArticleComponent}
          data-testid="BlogArticleComponent"
        >
          <Row>
            <Col lg={{ span: 10, offset: 1 }}>
              <BlogIntroComponent data={data}></BlogIntroComponent>
            </Col>
          </Row>
          <Row>
            <Col lg={{ span: 8, offset: 2 }}>{paragraphs}</Col>
          </Row>
        </Container>
      );
    } else {
      return <div data-testid="BlogArticleComponentLoading">loading</div>;
    }
  }
}

export default BlogArticleComponent;

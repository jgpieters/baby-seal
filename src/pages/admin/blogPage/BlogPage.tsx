import React from "react";
import styles from "./BlogPage.module.scss";
import BlogService from "../../../services/BlogService";
import { Blog } from "../../../model/model";
import { Form, Container, Col, Row, Button } from "react-bootstrap";
import moment from "moment";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

interface BlogPageProps {}

interface BlogPageState {
  blogList: Blog[];
  blog?: Blog;
}

class BlogPage extends React.Component<BlogPageProps, BlogPageState> {
  private blogService;

  constructor(props: any) {
    super(props);
    this.state = {
      blogList: [],
      blog: undefined,
    };
    this.blogService = new BlogService();
  }

  async componentDidMount() {
    this.setState({ blogList: await this.blogService.listBlogs() });
  }

  async getBlog(id: string) {
    this.setState({ blog: await this.blogService.getBlog(id) });
  }

  async saveBlog() {
    const { blog } = this.state;
    if (blog && blog._id) {
      this.setState({ blog: await this.blogService.updateBlog(blog) });
    } else if (blog) {
      this.setState({ blog: await this.blogService.postBlog(blog) });
    }
  }

  updateDateField(value: string) {
    const date = moment(value, "yyyy-MM-DD").toDate();
    if (this.state.blog) {
      this.setState({
        blog: {
          ...this.state.blog,
          date,
        },
      });
    }
  }

  updateBlogField(fieldName: string, value: any) {
    let { blog }: any = this.state;
    blog[fieldName] = value;
    this.setState({ blog });
  }

  updateParagraphField(fieldName: string, value: any, index: number) {
    let blog = this.state.blog;

    let paragraphs = blog?.paragraphs;
    if (paragraphs && blog) {
      let paragraph: any = paragraphs[index];
      paragraph[fieldName] = value;
      paragraphs[index] = paragraph;

      blog = {
        ...blog,
        paragraphs,
      };
    }

    this.setState({ blog: blog });
  }

  addParagraph() {
    const blog = this.state.blog;
    if (blog) {
      let paragraphs = blog.paragraphs;
      paragraphs && paragraphs.push({ text: "" });
      this.setState({ blog: { ...blog, paragraphs } });
    }
  }

  deleteParagraph(index: number) {
    const blog = this.state.blog;
    if (blog) {
      let paragraphs = blog.paragraphs;
      console.log(paragraphs);
      paragraphs.splice(index, 1);
      console.log(paragraphs);
      this.setState({ blog: { ...blog, paragraphs } });
    }
  }

  newBlog() {
    this.setState({
      blog: {
        title: "",
        text: "",
        image: "",
        date: new Date(),
        author: "",
        paragraphs: [],
      },
    });
  }

  async deleteBlog() {
    const blog = this.state.blog;
    blog && (await this.blogService.deleteBlog(blog));
  }

  toBase64(file: any): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  }
  async updateFile(file: any) {
    const image: string = await this.toBase64(file);

    if (this.state.blog) {
      this.setState({ blog: { ...this.state.blog, image: image } });
    }
  }

  async updateParagraphFile(file: any, index: number) {
    const image: string = await this.toBase64(file);
    this.updateParagraphField("image", image, index);
  }

  deleteParagraphImage(index: number) {
    this.updateParagraphField("image", undefined, index);
  }

  render() {
    const { blogList, blog } = this.state;
    const date = blog && moment(blog.date).format("yyyy-MM-DD");

    return (
      <Container className={styles.BlogPage} data-testid="BlogPage">
        <Row>
          <Col lg="9">
            {blog ? (
              <div>
                <Form.Control
                  size="sm"
                  type="text"
                  className={styles.formInput}
                  value={blog.title}
                  onChange={(e) =>
                    this.updateBlogField("title", (e.target as any).value)
                  }
                />
                <Form.Control
                  size="sm"
                  type="text"
                  as="textarea"
                  rows={6}
                  className={styles.formInput}
                  value={blog.text}
                  onChange={(e) =>
                    this.updateBlogField("text", (e.target as any).value)
                  }
                />
                <Form.Control
                  size="sm"
                  type="date"
                  className={styles.formInput}
                  value={date}
                  onChange={(e) =>
                    this.updateDateField((e.target as any).value)
                  }
                />
                <Form.Control
                  size="sm"
                  type="text"
                  className={styles.formInput}
                  value={blog.author}
                  onChange={(e) =>
                    this.updateBlogField("author", (e.target as any).value)
                  }
                />

                {blog.image ? (
                  <div className={styles.imageWrapper}>
                    <img src={blog.image} alt="" className={styles.image} />
                    <FontAwesomeIcon
                      icon={faClose}
                      className={styles.icon}
                      onClick={() => this.updateBlogField("image", undefined)}
                    />
                  </div>
                ) : (
                  <Form.Control
                    type="file"
                    size="sm"
                    onChange={(e) =>
                      this.updateFile((e.target as any).files[0])
                    }
                  />
                )}
                <hr />
                {blog?.paragraphs.map((paragraphInstance, index) => (
                  <div key={index}>
                    <div className={styles.paragraphTitleWrapper}>
                      <div>{"Paragraph " + (index + 1)}</div>
                      <Button
                        variant="danger"
                        className={styles.button}
                        onClick={() => this.deleteParagraph(index)}
                      >
                        Delete
                      </Button>
                    </div>
                    <Form.Control
                      placeholder="title"
                      size="sm"
                      type="text"
                      className={styles.formInput}
                      value={paragraphInstance.title}
                      onChange={(e) =>
                        this.updateParagraphField(
                          "title",
                          (e.target as any).value,
                          index
                        )
                      }
                    />

                    <Form.Control
                      placeholder="text"
                      size="sm"
                      type="text"
                      as="textarea"
                      rows={6}
                      className={styles.formInput}
                      value={paragraphInstance.text}
                      onChange={(e) =>
                        this.updateParagraphField(
                          "text",
                          (e.target as any).value,
                          index
                        )
                      }
                    />

                    <Form.Control
                      placeholder="quote"
                      size="sm"
                      type="text"
                      className={styles.formInput}
                      value={paragraphInstance.quote}
                      onChange={(e) =>
                        this.updateParagraphField(
                          "quote",
                          (e.target as any).value,
                          index
                        )
                      }
                    />
                    {paragraphInstance.image ? (
                      <img
                        src={paragraphInstance.image}
                        alt=""
                        className={styles.image}
                      />
                    ) : (
                      <Form.Control
                        type="file"
                        size="sm"
                        onChange={(e) =>
                          this.updateParagraphFile(
                            (e.target as any).files[0],
                            index
                          )
                        }
                      />
                    )}
                    <hr />
                  </div>
                ))}
                <div>
                  <Button
                    variant="secondary"
                    className={styles.button}
                    onClick={() => this.addParagraph()}
                  >
                    Add Paragraph
                  </Button>
                </div>
                <div>
                  <Button
                    variant="primary"
                    className={styles.button}
                    onClick={() => this.saveBlog()}
                  >
                    Save Blog
                  </Button>
                  <Button
                    variant="danger"
                    className={styles.button}
                    onClick={() => this.deleteBlog()}
                  >
                    Delete Blog
                  </Button>
                </div>
              </div>
            ) : null}
          </Col>
          <Col lg="3">
            <Button color="primary" onClick={() => this.newBlog()}>
              New blog
            </Button>
            {blogList.map((blogInstance, index) => (
              <div
                key={index}
                className={styles.blogTile}
                onClick={() =>
                  blogInstance._id && this.getBlog(blogInstance._id)
                }
              >
                <div className={styles.title}>{blogInstance.title}</div>
                <div className={styles.text}>{blogInstance.text}</div>
                <div className={styles.date}>
                  {moment(blogInstance.date).format("DD-MM-yyyy")}
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BlogPage;

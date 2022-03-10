import React from "react";
import styles from "./SectionPage.module.scss";
import SectionService from "../../../services/SectionService";
import { Section, SectionTextType } from "../../../model/model";
import { Form, Container, Col, Row, Button } from "react-bootstrap";
import moment from "moment";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

interface SectionPageProps {}

interface SectionPageState {
  sectionList: Section[];
  section?: Section;
}

class SectionPage extends React.Component<SectionPageProps, SectionPageState> {
  private sectionService;

  constructor(props: any) {
    super(props);
    this.state = {
      sectionList: [],
      section: undefined,
    };
    this.sectionService = new SectionService();
  }

  async componentDidMount() {
    this.listSections();
  }

  async listSections() {
    this.setState({ sectionList: await this.sectionService.listSections() });
  }

  async getSection(id: string) {
    this.setState({ section: await this.sectionService.getSection(id) });
  }

  processSaveSection() {
    this.saveSection(this.state.section)?.then((section) => {
      this.setState({ section });
      this.listSections();
    });
  }

  saveSection(section?: Section): Promise<Section> | undefined {
    if (section && section._id) {
      return this.sectionService.updateSection(section);
    } else if (section) {
      return this.sectionService.postSection(section);
    }
    return;
  }

  updateDateField(value: string) {
    const date = moment(value, "yyyy-MM-DD").toDate();
    if (this.state.section) {
      this.setState({
        section: {
          ...this.state.section,
          date,
        },
      });
    }
  }

  updateSectionField(fieldName: string, value: any) {
    let { section }: any = this.state;
    section[fieldName] = value;
    this.setState({ section });
  }

  newSection() {
    this.setState({
      section: {
        title: "",
        text: "",
        url: "",
        date: new Date(),
        type: "",
        images: [],
      },
    });
  }

  deleteSection() {
    const section = this.state.section;
    section &&
      this.sectionService.deleteSection(section).then(() => {
        this.listSections();
        this.setState({ section: undefined });
      });
  }

  addImages(files: any[]) {
    console.log(files);
    files.forEach((file) => this.addFile(file));
  }

  deleteImage(index: number) {
    const section = this.state.section;

    section?.images.splice(index, 1);

    this.setState({ section });
  }

  toBase64(file: any): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  }

  async addFile(file: any) {
    const image: string = await this.toBase64(file);
    let section = this.state.section;

    section?.images.push(image);
    this.setState({ section });
  }

  render() {
    const { sectionList, section } = this.state;
    const date = section && moment(section.date).format("yyyy-MM-DD");

    return (
      <Container className={styles.SectionPage} data-testid="SectionPage">
        <Row>
          <Col lg="9">
            {section ? (
              <div>
                <Form.Select
                  aria-label="Default select example"
                  value={section.type}
                  onChange={(e) =>
                    this.updateSectionField("type", (e.target as any).value)
                  }
                >
                  <option value={undefined}>Select type</option>
                  {Object.keys(SectionTextType)
                    .filter((key) => isNaN(Number(key)))
                    .map((item, index) => (
                      <option key={index}>{item}</option>
                    ))}
                </Form.Select>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="title"
                  className={styles.formInput}
                  value={section.title}
                  onChange={(e) =>
                    this.updateSectionField("title", (e.target as any).value)
                  }
                />
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="text"
                  as="textarea"
                  rows={6}
                  className={styles.formInput}
                  value={section.text}
                  onChange={(e) =>
                    this.updateSectionField("text", (e.target as any).value)
                  }
                />
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="url"
                  className={styles.formInput}
                  value={section.url}
                  onChange={(e) =>
                    this.updateSectionField("url", (e.target as any).value)
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
                <Row>
                  {section.images.map((image, index) => (
                    <Col xs="3" key={index}>
                      <div className={styles.imageWrapper}>
                        <img src={image} alt="" className={styles.image} />
                        <FontAwesomeIcon
                          icon={faClose}
                          className={styles.icon}
                          onClick={() => this.deleteImage(index)}
                        />
                      </div>
                    </Col>
                  ))}
                </Row>
                {section.images?.length < 3 ? (
                  <Form.Control
                    type="file"
                    size="sm"
                    onChange={(e) => this.addFile((e.target as any).files[0])}
                  />
                ) : null}
                <div>
                  <Button
                    variant="primary"
                    className={styles.button}
                    onClick={() => this.processSaveSection()}
                  >
                    Save Section
                  </Button>
                  <Button
                    variant="danger"
                    className={styles.button}
                    onClick={() => this.deleteSection()}
                  >
                    Delete Section
                  </Button>
                </div>
              </div>
            ) : null}
          </Col>
          <Col lg="3">
            <Button color="primary" onClick={() => this.newSection()}>
              New section
            </Button>
            {sectionList.map((sectionInstance, index) => (
              <div
                key={index}
                className={styles.sectionTile}
                onClick={() =>
                  sectionInstance._id && this.getSection(sectionInstance._id)
                }
              >
                <div className={styles.title}>{sectionInstance.title}</div>
                <div className={styles.text}>{sectionInstance.text}</div>
                <div className={styles.date}>
                  {moment(sectionInstance.date).format("DD-MM-yyyy")}
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SectionPage;

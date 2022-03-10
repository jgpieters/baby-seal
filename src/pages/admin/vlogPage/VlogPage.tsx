import React from "react";
import styles from "./VlogPage.module.scss";
import VlogService from "../../../services/VlogService";
import { Vlog } from "../../../model/model";
import { Form, Container, Col, Row, Button } from "react-bootstrap";
import moment from "moment";

interface VlogPageProps {}

interface VlogPageState {
  vlogList: Vlog[];
  vlog?: Vlog;
}

class VlogPage extends React.Component<VlogPageProps, VlogPageState> {
  private vlogService;

  constructor(props: any) {
    super(props);
    this.state = {
      vlogList: [],
      vlog: undefined,
    };
    this.vlogService = new VlogService();
  }

  async componentDidMount() {
    this.listVlogs();
  }

  async listVlogs() {
    this.setState({ vlogList: await this.vlogService.listVlogs() });
  }

  async getVlog(id: string) {
    this.setState({ vlog: await this.vlogService.getVlog(id) });
  }

  processSaveVlog() {
    this.saveVlog(this.state.vlog)?.then((vlog) => {
      this.setState({ vlog });
      this.listVlogs();
    });
  }

  saveVlog(vlog?: Vlog): Promise<Vlog> | undefined {
    if (vlog && vlog._id) {
      return this.vlogService.updateVlog(vlog);
    } else if (vlog) {
      return this.vlogService.postVlog(vlog);
    }
    return;
  }

  updateDateField(value: string) {
    const date = moment(value, "yyyy-MM-DD").toDate();
    if (this.state.vlog) {
      this.setState({
        vlog: {
          ...this.state.vlog,
          date,
        },
      });
    }
  }

  updateVlogField(fieldName: string, value: any) {
    let { vlog }: any = this.state;
    vlog[fieldName] = value;
    this.setState({ vlog });
  }

  newVlog() {
    this.setState({
      vlog: {
        title: "",
        text: "",
        url: "",
        date: new Date(),
      },
    });
  }

  deleteVlog() {
    const vlog = this.state.vlog;
    vlog &&
      this.vlogService.deleteVlog(vlog).then(() => {
        this.listVlogs();
        this.setState({ vlog: undefined });
      });
  }

  render() {
    const { vlogList, vlog } = this.state;
    const date = vlog && moment(vlog.date).format("yyyy-MM-DD");

    return (
      <Container className={styles.VlogPage} data-testid="VlogPage">
        <Row>
          <Col lg="9">
            {vlog ? (
              <div>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="title"
                  className={styles.formInput}
                  value={vlog.title}
                  onChange={(e) =>
                    this.updateVlogField("title", (e.target as any).value)
                  }
                />
                <Form.Control
                  size="sm"
                  type="text"
                  as="textarea"
                  placeholder="text"
                  rows={6}
                  className={styles.formInput}
                  value={vlog.text}
                  onChange={(e) =>
                    this.updateVlogField("text", (e.target as any).value)
                  }
                />
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="url"
                  className={styles.formInput}
                  value={vlog.url}
                  onChange={(e) =>
                    this.updateVlogField("url", (e.target as any).value)
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
                <div>
                  <Button
                    variant="primary"
                    className={styles.button}
                    onClick={() => this.processSaveVlog()}
                  >
                    Save Vlog
                  </Button>
                  <Button
                    variant="danger"
                    className={styles.button}
                    onClick={() => this.deleteVlog()}
                  >
                    Delete Vlog
                  </Button>
                </div>
              </div>
            ) : null}
          </Col>
          <Col lg="3">
            <Button color="primary" onClick={() => this.newVlog()}>
              New vlog
            </Button>
            {vlogList.map((vlogInstance, index) => (
              <div
                key={index}
                className={styles.vlogTile}
                onClick={() =>
                  vlogInstance._id && this.getVlog(vlogInstance._id)
                }
              >
                <div className={styles.title}>{vlogInstance.title}</div>
                <div className={styles.text}>{vlogInstance.text}</div>
                <div className={styles.date}>
                  {moment(vlogInstance.date).format("DD-MM-yyyy")}
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default VlogPage;

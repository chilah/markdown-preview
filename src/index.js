import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./styles.css";

import Markdown from "./components/Markdown";

class App extends React.Component {
  state = {
    text: `### This is a header And this is a paragraph`
  };

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  setToBold = () => {
    this.setState({
      text: this.state.text + "**enter text here**"
    });
  };

  render() {
    return (
      <Container style={{ padding: "1.5rem" }}>
        <Row>
          <Col>
            {/* <Button variant="primary" onClick={this.setToBold}>
              B
            </Button> */}
            <textarea value={this.state.text} onChange={this.handleChange} />
          </Col>
          <Col>
            <Markdown text={this.state.text} />
          </Col>
        </Row>
      </Container>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

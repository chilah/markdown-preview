import React from "react";
import ReactMarkdown from "react-markdown/with-html";
import { Card } from "react-bootstrap";

const Markdown = props => {
  return (
    <div>
      <Card style={{ width: "100%", height: "90vh", overflow: "auto" }}>
        <Card.Header>Markdown Preview</Card.Header>
        <Card.Body>
          <Card.Text>
            <ReactMarkdown source={props.text} escapeHtml={false} />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Markdown;

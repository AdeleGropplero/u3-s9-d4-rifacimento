import { Component } from "react";
import { Card, Col } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false
  };

  toggleSelected = () => {
    console.log(this.state.selected);
    this.setState({ selected: !this.state.selected });
  };

  render() {
    const newClass = this.state.selected
      ? "mb-4 border border-danger border-2"
      : "mb-4";
    return (
      <Col xs={10} md={4} xl={3}>
        <Card
          onClick={this.toggleSelected}
          className={newClass}
          style={{ height: "480px" }}
        >
          <Card.Img
            variant="top"
            src={this.props.src}
            style={{ height: "350px" }}
            className="p-3"
          />
          <Card.Body className="px-2 py-0">
            <Card.Title
              className="text-truncate"
              style={{ height: "25px", textOverflow: "ellipsis" }}
            >
              {this.props.title}
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;

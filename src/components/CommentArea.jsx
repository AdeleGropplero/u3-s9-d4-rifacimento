import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  render() {
    return (
      <>
        <CommentList />
        <AddComment />
      </>
    );
  }
}
export default CommentArea;

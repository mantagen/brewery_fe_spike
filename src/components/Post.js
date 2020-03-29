import React, { Component } from "react";
import axios from "axios";
class Post extends Component {
  state = {
    product_id: "",
    name: ""
  };

  onIDChange = e => {
    this.setState({
      product_id: e.target.value
    });
  };

  onNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const data = {
      product_id: this.state.product_id,
      name: this.state.name
    };
    axios.post("api/products", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));  
  };

  render() {
    return (
      <div className="post">
        <form className="post" onSubmit={this.handleSubmit}>
          <input
            placeholder="product_id" value={this.state.product_id}
            onChange={this.onIDChange} required
          />
          <input
            placeholder="name" value={this.state.name}
            onChange={this.onNameChange} required
          />
          <button type="submit">Create Post</button>
        </form>
      </div>
    );
  }
}

export default Post;

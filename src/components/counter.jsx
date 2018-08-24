import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: []
  };
  styles = {
    fontSize: "20px",
    fontWeight: "bold"
  };
  renderTags() {
    if (this.state.tags.length === 0) return <p> There are no tags</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrease = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={this.handleDecrease}
          className="btn btn-secondary btn-sm"
        >
          {" "}
          -{" "}
        </button>
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;

    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

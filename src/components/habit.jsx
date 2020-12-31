import { React, Component } from "react";

class Habit extends Component {
  render() {
    const { name, count } = this.props.habit;
    const handleIncrement = () => {
      this.props.onIncrement(this.props.habit);
    };
    const handleDecrement = () => {
      this.props.onDecrement(this.props.habit);
    };
    const handleDelete = () => {
      this.props.onDelete(this.props.habit);
    };
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete" onClick={handleDelete}>
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
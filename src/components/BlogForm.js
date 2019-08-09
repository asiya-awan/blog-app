import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class BlogForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.blog ? props.blog.description : '',
      title: props.blog ? props.blog.title : '',
      createdAt: props.blog ? moment(props.blog.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onTitleChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.title) {
      this.setState(() => ({ error: 'Please provide description and title.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,

        createdAt: this.state.createdAt.valueOf(),
        title: this.state.title
      });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          className="text-input"
          placeholder="Post title"
          autoFocus
          value={this.state.title}
          onChange={this.onTitleChange}
        />
       
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          className="textarea"
          placeholder="Post body"
          value={this.state.description}
          onChange={this.onDescriptionChange}
        >
        </textarea>
        <div>
          <button className="button">Save Blog</button>
        </div>
      </form>
    )
  }
}

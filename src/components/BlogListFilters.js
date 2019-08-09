import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByTitle, sortByDescription} from '../actions/filters';

export class BlogListFilters extends React.Component {
 
    onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  }

  onSortByChange = (e) => {
    if (e.target.value === 'date') {
      this.props.sortByTitle();
    } else if (e.target.value === 'amount') {
      this.props.sortByDescription();
    }
  }

  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              className="text-input"
              type="text"
              placeholder="Search posts"
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-group__item">
            <select
              className="select"
              value={this.props.filters.sortBy}
              onChange={this.onSortByChange}
            >
              <option value="date">By Title</option>
              <option value="amount">By Description</option>
            </select>
          </div>
          {/* <div>
              <button class="button" onClick ={this.props.handleAddPost}>Add Post</button>
          </div> */}
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByTitle: () => dispatch(sortByTitle()),
    sortByDescription: () => dispatch(sortByDescription())
    // handleAddPost: () => dispatch(handleAddPost()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogListFilters);

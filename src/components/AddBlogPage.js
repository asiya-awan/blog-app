import React from 'react';
import  BlogForm  from './BlogForm';
import { connect } from 'react-redux';
import { startAddBlog } from '../actions/blogs'


export class AddBlogPage extends React.Component{

  onSubmit= (blog) => {
    this.props.startAddBlog(blog);
    this.props.history.push('/dashboard')
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Blog</h1>
          </div>
        </div>
        <div className="content-container">
          <BlogForm onSubmit = {this.onSubmit} />
          </div>
      </div>

   )
  }
}

const mapDispatchToProps = (dispatch) => 
  ({startAddBlog : (blog) => dispatch(startAddBlog(blog))
});


export default connect(undefined, mapDispatchToProps)(AddBlogPage);


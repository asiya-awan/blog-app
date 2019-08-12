import React from 'react';
import  BlogForm  from './BlogForm';
import { connect } from 'react-redux';
import { startRemoveBlog, startEditBlog} from '../actions/blogs';
import RemoveModal from '../components/RemoveModal';

export class EditBlogPage extends React.Component{
    state = {
        selectedBlogToRemove: undefined
      };
  onSubmit= (blog) => {
    this.props.startEditBlog(this.props.blog.id, blog);
    this.props.history.push('/dashboard')
  }

  onRemove = () => {
    this.setState(()=> ({
      selectedBlogToRemove: this.props.blog
    }));    
  };

  handleConfirmRemove = () => {
    this.props.startRemoveBlog({ id: this.props.blog.id });
    //this.setState(()=> ({selectedExpenseToRemove: undefined}))
    this.props.history.push('/dashboard');
  }

  handleClearSelectedBlogToRemove =() => {
    this.setState(()=> ({selectedBlogToRemove: undefined}))
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Blog</h1>
            <span>Post readable of: <a href=""/> </span>
          </div>
        </div>
        <div className="content-container">
        <BlogForm 
            blog={this.props.blog}
            onSubmit = {this.onSubmit}
        />
        <button className="button button--secondary" onClick={this.onRemove}>Remove Expense</button>

          </div>
          <RemoveModal 
          selectedBlogToRemove={this.state.selectedBlogToRemove}
          handleClearSelectedBlogToRemove={this.handleClearSelectedBlogToRemove}
          handleConfirmRemove={this.handleConfirmRemove}
          />
      </div>

   )
  }
}

const mapStateToProps = (state, props) => ({
    blog: state.blogs.find((blog) => blog.id === props.match.params.id)
  });

const mapDispatchToProps = (dispatch) => 
  ({startEditBlog : (blog) => dispatch(startEditBlog(blog)),
    startRemoveBlog: (data) => dispatch(startRemoveBlog(data))

});


export default connect(mapStateToProps, mapDispatchToProps)(EditBlogPage);

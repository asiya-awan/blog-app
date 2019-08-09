import React from 'react';
import { connect } from 'react-redux';
import BlogListItem  from './BlogListItem';
import selectBlogs from '../selectors/blogs';

export const BlogList = (props) => (
    <div className="content-container">
        {/* <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div> */}
        <div className="list-body">     {
            props.blogs.length === 0 ? (
                <div><p className="list-item list-item--message">No Blogs</p></div>
            ) : (
                props.blogs.map((blog) => (<BlogListItem key={blog.id} {...blog}/>))
            )
        }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        blogs: selectBlogs(state.blogs, state.filters)
    };
};

export default connect(mapStateToProps)(BlogList)

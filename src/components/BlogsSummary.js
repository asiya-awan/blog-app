import React from 'react';
import {connect} from 'react-redux';
import  selectBlogs  from '../selectors/blogs';
import { Link } from 'react-router-dom';

export const BlogsSummary = ({visibleBlogsCount, invisibleBlogsCount }) => {
    const blogWord = visibleBlogsCount === 1 ? 'blog' :'blogs';

    return (
        <div className= "page-header">
            <div className="content-container">
                <h1 className="page-header__title"> Viewing <span> {visibleBlogsCount}  </span> {blogWord}</h1> 
                { invisibleBlogsCount> 0 && <p>There are <strong> {invisibleBlogsCount} </strong>  Blogs which are hidden because of applied filter.</p>} 
                <div className="page-header__actions">
                    <Link to="/create" className="button">Create Blog</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    const visibleBlogs = selectBlogs(state.blogs, state.filters);
    const totalBlogs = selectBlogs(state.blogs, {text: '', sortBy: 'title'});
    
    const invisibleBlogsCount= (totalBlogs.length)-(visibleBlogs.length);
    return{
        visibleBlogsCount: visibleBlogs.length,
        invisibleBlogsCount: invisibleBlogsCount
    }

}
export default connect(mapStateToProps)(BlogsSummary);

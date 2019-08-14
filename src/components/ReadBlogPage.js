
import { connect } from 'react-redux';
import React from 'react';

export const ReadBlogPage = ({blog}) => (
    <div >
       
        <h1> {blog.title}</h1>
        <p>{blog.description}</p>
    </div>
);

const mapStateToProps = (state, props) => ({
 
  blog : state.blogs.find((blog) => blog.id == props.match.params.id)
});

export default connect(mapStateToProps) (ReadBlogPage);
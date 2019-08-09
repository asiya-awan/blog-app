import React from 'react';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import numeral from 'numeral';

export const BlogListItem = 
    ({dispatch, id, title, description, createdAt}) => (
       
    <Link className="list-item" to = {`/edit/${id}`} >
        <div>
            <h3 className="list-item__title">{title}</h3>
            <span className="list-item__subtitle" > {moment(createdAt).format('MMM Do, YYYY')}</span>
        </div>     
    </Link>    
);
export default connect()(BlogListItem); //dispatch
import React from "react";
import BlogItem from './BlogItem';

const BlogList = (props) => {
    return (
    <ul>
        {props.items.map((e) => <BlogItem item={e} key={e.id}/>)}
    </ul>)
};

export default BlogList;
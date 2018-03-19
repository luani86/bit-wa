import React from "react";
import PropTypes from "prop-types"


const BlogItem = (props) => {
    return (<div>
        <h2 className="podnaslov">{props.item.id} - {props.item.title}</h2>
        <p>{props.item.body}</p>
    </div>)
};


BlogItem.defaultProps = {
    id: "x",
    title: "podnaslov",
    body: "neki string"
}
BlogItem.propTypes = {
    item: PropTypes.object.isRequired
  }
export default BlogItem;
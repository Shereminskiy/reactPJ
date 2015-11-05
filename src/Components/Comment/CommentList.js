import React, { Component } from 'react';
import Comment from './Comment'

export default class CommentList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var commentNodes = this.props.data.map(function (comment) {
            return (
                <Comment author={comment.author}>
                    {comment.text}
                </Comment>
            );
        });

        return (
            <div className="commentList">
                <Comment author="Alexander Shereminskiy">This is one of the first my comments</Comment>
                {commentNodes}
            </div>
        );
    }
};

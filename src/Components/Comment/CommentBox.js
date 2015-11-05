import React, { Component } from 'react';
import CommentList from './CommentList'
import CommentForm from './CommentForm'

export default class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    loadCommentsFromServer()
    {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }
    componentDidMount() {
        this.loadCommentsFromServer();
        //setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval);
    }

    handleCommentSubmit(comment) {
        var comments = this.state.data;
        var newComments = comments.concat([comment]);
        this.setState({data: newComments});
    }

    render() {
        return (
        <div className="commentBox">
            <h1>Comments</h1>
            <CommentList data = {this.state.data}/>
            <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)}/>
        </div>
        );
    }
};

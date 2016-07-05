import React, { Component }  from 'react';

class CommentList extends Component {

    render() {
        const { comments } = this.props;
        return (
            <ul>
            {comments.map((comment) =>
                <li key={comment.id}>
                    <i>{comment.user}</i>
                    <p>{comment.text}</p>
                </li>
            )}
            </ul>
        )
    }
}

export default CommentList;
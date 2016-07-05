import React, { Component } from 'react';
import CommentList from './CommentList';

class ArticleBody extends Component {
    state = {
        isOpenComments: false
    }

    toggleComments = (ev) => {
        this.setState({
            isOpenComments: !this.state.isOpenComments
        })
    }

    render() {
        const { article } = this.props;
        const { isOpenComments } = this.state;
        const date = new Date(article.date).toISOString().replace(/T/, ' ').replace(/\..+/, '')
        const comments = isOpenComments ? <CommentList comments={article.comments}/> : null;
        const linkText = isOpenComments ? 'Hide comments' : 'Show comments';

        return (
            <div>
                <em>{date}</em>
                <p>{article.text}</p>
                <a onClick={this.toggleComments}>{linkText}</a>
                {comments}
            </div>
        )
    }
}

export default ArticleBody
import React, { Component } from 'react';
import ArticleBody from './ArticleBody';

class Article extends Component {
    state = {
        isOpen: false,
        isShowComments: false
    }

    toggleArticle = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    toggleComments = (ev) => {
        this.setState({
            isShowComments: !this.state.isShowComments
        })
    }

    render() {
        const { article } = this.props;
        const { isOpen } = this.state;
        const body = isOpen ? <ArticleBody article={article}/> : null;
        return (
            <div>
                <h1 onClick={this.toggleArticle}>
                    { article.title }
                </h1>
                {body}
            </div>
        )
    }
}

export default Article;
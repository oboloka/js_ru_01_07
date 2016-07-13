import React, { Component }  from 'react'
import Article from './Article/index'
import oneOpen from '../decorators/oneOpen'
import Select from 'react-select'
import DayPicker, { DateUtils } from "react-day-picker";
import moment from 'moment';
import 'react-select/dist/react-select.css'
import 'react-day-picker/lib/style.css'

class ArticleList extends Component {

    state = {
        selectedArticles: null,
        from: null,
        to: null,
    }

    handleDayClick = (e, day) => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }

    handleResetDates = (e) => {
        e.preventDefault();
        console.log('handleResetDates');
        this.setState({
          from: null,
          to: null,
        });
    }

    selectedInfo(from, to) {
        if (from && to) {
            return (
                <p>
                    Current selection of dates: <b>{moment(from).format('L')}</b> to <b>{moment(to).format('L')}</b>
                    <a href="#" className="reset-dates" onClick={this.handleResetDates}>Reset</a>
                </p>
            );
        } else {
            return ''; 
        }
    }

    render() {
        const { articles, isItemOpen, toggleOpenItem } = this.props
        const { from, to } = this.state;
        const selectedDates = this.selectedInfo(from, to);

        const listItems = articles.map((article) => <li key={article.id}>
            <Article article = {article}
                isOpen = {isItemOpen(article.id)}
                openArticle = {toggleOpenItem(article.id)}
            />
        </li>)

        const options = articles.map((article) => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <h1>Article list</h1>
                <DayPicker
                    initialMonth={ new Date(2016, 1) }
                    onDayClick={ this.handleDayClick }
                    selectedDays={day => DateUtils.isDayInRange(day, { from, to })}
                />
                {selectedDates}
                <Select
                    options = {options}
                    multi = {true}
                    value = {this.state.selectedArticles}
                    onChange = {this.handleSelectChange}
                />

                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }

    handleSelectChange = (selectedArticles) => {
        console.log(selectedArticles)
        this.setState({
            selectedArticles
        })
    }
}

export default oneOpen(ArticleList)
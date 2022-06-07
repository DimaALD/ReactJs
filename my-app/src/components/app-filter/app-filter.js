import React from "react";
import './app-filter.scss';

class AppFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 'all'
        };
    }

    onTabClick = (e) => {
        const element = e.target;
        if (element.matches('button')) {
            const value = element.getAttribute('data-tab');
            this.setState({
                tab: value
            })
            this.props.onTabClik(value);
        }
    }

    render() {
        const buttonsData = [
            {name: 'all', text: 'Все сотрудники'},
            {name: 'increase', text: 'Сотрудники на повышение'},
            {name: 'salary', text: 'ЗП больше 1000$'}
        ];
        const buttons = buttonsData.map(({name, text}) => {
            const isActive = this.state.tab === name;
            const clazz = isActive ? 'btn btn-light' : 'btn btn-outline-light';
            return <button className={clazz} key={name} data-tab={name} type="button">{text}</button>
        })
        return (
            <div className="btn-group" onClick={this.onTabClick}>
                {buttons}
            </div>
        )
    }
}

export default AppFilter;

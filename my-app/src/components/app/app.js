import './app.scss';

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import React from "react";
import styled from "styled-components";
import {v4 as uuid} from 'uuid';

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {fullName: 'John S.', salary: 800, increase: true, like: true, id: uuid()},
                {fullName: 'Leon K.', salary: 1000, increase: false, like: false, id: uuid()},
                {fullName: 'Max P.', salary: 1100, increase: false, like: false, id: uuid()},
            ],
            term: '',
            tab: 'all'
        }
    }

    deleteItem = (itemId) => {
        this.setState(({data}) => {
            const newData = data.filter(({id}) => id !== itemId);
            return {data: newData};
        })
    }

    addItem = (item) => {
        this.setState(({data}) => {
            const newArray = [...data, item];
            return {data: newArray};
        })
    }

    onToggleProp = (id, property) => {
        this.setState(({data}) => {
            return {
                data: data.map(item => {
                    if (item.id === id) {
                        return {...item, [property]: !item[property]}
                    }
                    return item;
                })
            }
        });
    }

    searchEmployee = (items, name) => {
        if (name.length === 0) {
            return items;
        }
        return items.filter(({fullName}) => new RegExp(name, 'gi').test(fullName));
    }

    onUserSearch = (name) => {
        this.setState(({term}) => {
            return {
                term: name
            }
        })
    }

    onTabClick = (name) => {
        this.setState({
            tab: name
        })
    }

    filterDataByTab = (data, tab) => {
        switch (tab) {
            case 'all':
                return data;
            case 'increase':
                return data.filter(item => item.increase);
            case 'salary':
                return data.filter(item => item.salary > 1000);
            default:
                return data;
        }
    }

    onSalaryChange = (id, salary) => {
        this.setState(({data}) => {
            const arrayOfItems = data.map(item => {
                if (item.id === id) item.salary = salary;
                return item;
            });
            return {
                data: arrayOfItems
            }
        })
    };

    render() {
        const {data, term, tab} = this.state;

        const visibleData = this.searchEmployee(data, term);
        const tabData = this.filterDataByTab(visibleData, tab);

        return (
            <Wrapper className="app">
                <AppInfo data={data}/>
                <div className="search-panel">
                    <SearchPanel onUserSearch={this.onUserSearch}/>
                    <AppFilter onTabClik={this.onTabClick}/>
                    <EmployeesList
                        data={tabData}
                        onDelete={this.deleteItem}
                        onToggleProp={this.onToggleProp}
                        onSalaryChange={this.onSalaryChange}
                    />
                    <EmployeesAddForm
                        onAdd={this.addItem}
                    />
                </div>
            </Wrapper>
        )
    }
}

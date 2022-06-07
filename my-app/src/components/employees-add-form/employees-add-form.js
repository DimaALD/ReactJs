import './employees-add-form.scss';
import React from "react";

import {v4 as uuid} from 'uuid';

class EmployeesAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        };
    }

    onValueChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.createEmployee());
        this.setState({name: '', salary: ''})
    }

    createEmployee = () => {
        return { id: uuid(), fullName: this.state.name, salary: +this.state.salary, increase: false, like: false};
    }

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    onSubmit={this.onSubmit}
                    className="add-form d-flex">
                    <input required type="text"
                           className="form-control new-post-label"
                           placeholder="Как его зовут?"
                           name="name"
                           value={name}
                           data-testid="test id"
                           onChange={this.onValueChange}
                    />
                    <input required type="number"
                           className="form-control new-post-label"
                           placeholder="З/П в $?"
                           name="salary"
                           value={salary}
                           onChange={this.onValueChange}
                    />

                    <button type="submit" className="btn btn-outline-light">Добавить
                    </button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;

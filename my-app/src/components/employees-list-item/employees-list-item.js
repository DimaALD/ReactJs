import './employees-list-item.scss';
import React from "react";

class EmployeesListItem extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                salary: 0
            };
        }

        onSalaryChange = (e) => {
            const value = parseFloat(e.target.value);
            this.setState({
                salary: value
            });
            this.props.onSalaryChange(value);
        }

        render() {
            const baseClass = "list-group-item d-flex justify-content-between";
            const {fullName, salary, onDelete, onToggleProp, increase, like} = this.props;

            let itemClasses;

            switch (true) {
                case increase && like:
                    itemClasses = `${baseClass} increase like`;
                    break;
                case increase:
                    itemClasses = `${baseClass} increase`;
                    break;
                case like:
                    itemClasses = `${baseClass} like`;
                    break;
                default:
                    itemClasses = baseClass;
            }

            return (<li className={itemClasses}>
                <span onClick={() => onToggleProp('like')} className="list-group-item-label">{fullName}</span>
                <input type="text" onChange={this.onSalaryChange} className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button" onClick={() => onToggleProp('increase')} className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"/>
                    </button>

                    <button onClick={onDelete} type="button" className="btn-trash btn-sm ">
                        <i className="fas fa-trash"/>
                    </button>
                    <i className="fas fa-star"/>
                </div>
            </li>)
        }
}

export default EmployeesListItem;

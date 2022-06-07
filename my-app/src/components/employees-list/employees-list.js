import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.scss';

const EmployeesList = ({data, onDelete, onToggleProp, onSalaryChange}) => {

    const listItems = data.map(({id, ...itemProps}) => {
        return <EmployeesListItem
            key={id}
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleProp = {(prop) => onToggleProp(id, prop)}
            onSalaryChange = {(salary) => onSalaryChange(id, salary)}
            />
    });
    return (
        <ul className="app-list list-group">
            {listItems}
        </ul>
    )
}

export default EmployeesList;

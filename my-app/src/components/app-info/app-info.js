import './app-info.scss';

const AppInfo = (props) => {
    const {data} = props;
    return (
        <div className="app-info">
            <h1>Учёт сотрудников компании: N</h1>
            <h2>Общее количество сотрудников: {data.length}</h2>
            <h2>Премию получат: {data.filter(item => item.increase).length}</h2>
        </div>
    )
}

export default AppInfo;

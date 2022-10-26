import './ExpenseDate.css'


const ExpenseDate = (props) => {

    // console.log(props.date)

    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });

    return (
        <div className="expense_date">
            <div className="expense_date_year">{year}</div>
            <div className="expense_date_month">{month}</div>
            <div className="expense_date_day">{day}</div>
        </div>
    );

}

export default ExpenseDate;
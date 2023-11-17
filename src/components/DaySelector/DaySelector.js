import React, { useState } from 'react';
import "./DaySelector.scss"

const DaySelector = ({ day, date, onSelect, selectedDate }) => {
    // const [isSelected, setIsSelected] = useState(false)
    const isSelected = selectedDate === date;

    const handleClick = (event) => {
        event.preventDefault();
        console.log('click event triggered')
        // setIsSelected(!isSelected)
        console.log('isSelected', !isSelected)
        onSelect(date);
        console.log(date)
    };


    return (

        <div
            id={`${isSelected ? 'date-picked' : ""}`}
            className='day-selector'
            onClick={handleClick}
        >
            <p className="day-selector__day">{day}</p>
            <p className="day-selector__date">{date}</p>
        </div>
    );
};

export default DaySelector;
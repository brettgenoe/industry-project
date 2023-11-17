import React, { useState } from 'react';
import "./DaySelector.scss"

const DaySelector = ({ day, date, onSelect }) => {
    const [isSelected, setIsSelected] = useState(false)
    const handleClick = (event) => {
        event.preventDefault();
        console.log('click event triggered')
        setIsSelected(!isSelected)
        onSelect(date);
        console.log(date)
    };


    return (

        <div
            className={`day-selector ${isSelected ? 'date-picked' : ''}`}
            onClick={handleClick}
        >
            <p className="day-selector__day">{day}</p>
            <p className="day-selector__date">{date}</p>
        </div>
    );
};

export default DaySelector;
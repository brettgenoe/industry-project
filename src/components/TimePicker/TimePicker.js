import React, { useState } from 'react';
import "./TimePicker.scss"

const TimePicker = () => {
    const [selectedHour, setSelectedHour] = useState('12');
    const [selectedMinute, setSelectedMinute] = useState('00');

    const handleHourChange = (e) => {
        setSelectedHour(e.target.value);
    };

    const handleMinuteChange = (e) => {
        setSelectedMinute(e.target.value);
    };

    return (
        <div>
            <label>
                Hours:
                <select value={selectedHour} onChange={handleHourChange}>
                    {Array.from({ length: 12 }, (_, index) => index + 1).map((hour) => (
                        <option key={hour} value={hour}>
                            {hour}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Minutes:
                <select value={selectedMinute} onChange={handleMinuteChange}>
                    {Array.from({ length: 60 }, (_, index) => index).map((minute) => (
                        <option key={minute} value={minute < 10 ? `0${minute}` : `${minute}`}>
                            {minute < 10 ? `0${minute}` : `${minute}`}
                        </option>
                    ))}
                </select>
            </label>
            <p>
                Selected Time: {selectedHour}:{selectedMinute}
            </p>
        </div>
    );
};

export default TimePicker;

import "./Schedule.scss"
import usersData from "../../data/user.json"
import { useState } from "react";

const Schedule = ({ selectedMovie }) => {
    const [formData, setFormData] = useState({
        eventName: '',
        date: '',
        time: '',
        selectedFriends: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFriendSelect = (userId) => {
        const selectedFriends = formData.selectedFriends.includes(userId)
            ? formData.selectedFriends.filter((id) => id !== userId)
            : [...formData.selectedFriends, userId];

        setFormData({
            ...formData,
            selectedFriends,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(...formData, selectedMovie);
        setFormData({
            date: '',
            time: '',
            selectedFriends: [],
        });
    };

    return (

        <section className="schedule">
            <div className="schedule__container">
                <h1 className="schedule__title"> Let's Watch Together!</h1>

                <form onSubmit={handleSubmit}
                    className="scheudle__form"
                >
                    <label>
                        Event Name:
                        <input
                            type="text"
                            name="eventName"
                            value={formData.eventName}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Date:
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Time:
                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Friends:
                        <ul>
                            {usersData.users.map((user) => (
                                <div
                                    key={user.id}
                                    className={`friend-item ${formData.selectedFriends.includes(user.id) ? 'selected' : ''
                                        }`}
                                    onClick={() => handleFriendSelect(user.id)}
                                >
                                    <img
                                        src={user.imgUrl}
                                        alt={`${user.firstName} ${user.lastName}`}
                                    />
                                </div>
                            ))}
                        </ul>
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
};


export default Schedule
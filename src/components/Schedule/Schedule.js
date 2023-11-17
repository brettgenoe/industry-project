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
                <form
                    // onSubmit={handleSubmit}
                    className="scheudle__form"
                >
                    <div className="schedule__movie-details--container">
                        {selectedMovie && (
                            <>
                                <img
                                    src={selectedMovie.imgUrl}
                                    alt={selectedMovie.name}
                                    className="schedule__movie-poster"
                                />
                                <h2 className="schedule__movie-name">Join the {selectedMovie.name} Gathering</h2>
                                <p className="schedule__movie-description"> {selectedMovie.description}</p>


                            </>
                        )}
                    </div>
                    <div className="schedule__form--container">  <label
                        className="schedule__form--label">
                        Pick a Date </label>
                        <input
                            className="schedule__form--date"
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                        />

                        <div>
                            <label className="schedule__form--label">
                                Pick a Time  </label>
                            <input
                                type="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                            />
                        </div>

                        <br />
                        <label className="schedule__form--label">
                            Add Friends </label>
                        <ul className="schedule__form-friends--container">
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

                    </div>
                    <br />
                    <button
                        className="schedule__form--button"
                        type="submit">Invite</button>
                </form>
            </div>
        </section>
    );
};


export default Schedule
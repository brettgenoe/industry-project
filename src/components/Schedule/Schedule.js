import "./Schedule.scss"
import usersData from "../../data/userData.json"
import { useState } from "react";
import plus from "../../assets-temp/icons/icons8-plus-50.png"
import TimePicker from "../TimePicker/TimePicker";
import next30days from "../../data/days.json"
import DaySelector from "../DaySelector/DaySelector";
import Confirmation from "../Confirmation/Confirmation";
import movieData from "../../data/movies.json";


const Schedule = ({ selectedMovie }) => {
    const [formData, setFormData] = useState({
        selectedDate: null,
        time: '',
        selectedDay: null,

        selectedFriends: [],
    });

    const [showConfirmation, setShowConfirmation] = useState(false);

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

    const handleDateSelect = (selectedDate, selectedDay) => {
        setFormData({
            ...formData,
            selectedDate,
            selectedDay,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ ...formData, selectedMovie });
        // setFormData({
        //     date: '',
        //     time: '',
        //     selectedFriends: [],
        // });
        setShowConfirmation(true);
    };

    return (

        <section className="schedule">
            <div className="schedule__container">


                <form
                    onSubmit={handleSubmit}
                    className="scheudle__form"
                >
                    <div
                    // className="schedule__movie-details--container"
                    >
                        {/* {selectedMovie && (
                            <>
                                <img
                                    src={selectedMovie.imgUrl}
                                    alt={selectedMovie.name}
                                    className="schedule__movie-poster"
                                />
                                <h2 className="schedule__movie-name">Join the {selectedMovie.name} Gathering</h2>
                                <p className="schedule__movie-description"> {selectedMovie.description}</p>


                            </>
                        )} */}
                        <div className="schedule__movie-image--container">
                            <img
                                className="schedule__movie-image"
                                src={movieData[1].Poster} />

                        </div>
                        <h1 className="schedule__form--title"> Join the {movieData[1].Title} Gathering </h1>
                        <p className="schedule__form--description">{movieData[1].Plot}</p>
                    </div>
                    <div className="schedule__form--container">  <label
                        className="schedule__form--label">
                        Pick a Date </label>
                        <h3 className="schedule__form--date-title">November</h3>

                        <div className="schedule__form--date-container">
                            {next30days.next30Days.map((info, index) => (
                                <DaySelector
                                    key={index}
                                    day={info.day}
                                    date={info.date}
                                    onSelect={(selectedDate, selectedDay) => handleDateSelect(selectedDate, selectedDay)}
                                    selectedDate={formData.selectedDate}
                                />

                            ))}</div>

                        <div>
                            <label className="schedule__form--label">
                                Pick a Time  </label>
                            <input
                                className="schedule__form--time"
                                type="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                            />
                            {/* <TimePicker /> */}
                        </div>

                        <br />
                        <label className="schedule__form--label schedule__form--label-participents">
                            Add Participents </label>
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
                                    <p className="schedule__form-friends--name">{user.firstName}</p>
                                </div>

                            ))}
                            <img
                                className="schedule__form--add-button"
                                src={plus}
                                alt={`addition of friend`} />
                        </ul>
                    </div>
                    <br />
                    <button
                        className="schedule__form--button"
                        type="submit">Send Invite</button>
                </form>
                {showConfirmation && (<Confirmation
                    formData={formData}
                    selectedMovie={selectedMovie}
                    usersData={usersData}
                    showConfirmation={showConfirmation}
                    onClose={() => setShowConfirmation(false)}
                    selectedDate={formData.selectedDate}
                    selectedDay={formData.selectedDay}
                />)}
            </div>
        </section>
    );
};


export default Schedule
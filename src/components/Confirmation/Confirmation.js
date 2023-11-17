import "./Confirmation.scss"
import Popcorn from "../../assets-temp/icons/Popcporn_Graphic.svg"
import { Link } from "react-router-dom";

const Confirmation = ({ formData, selectedMovie, usersData, showConfirmation, onClose }) => {
    // const handleHomeNavgiate = () => {
    //     navigate(`/`);
    // }
    return (
        <div
            className=
            {`confimation__container--overlay ${showConfirmation ? "" : "confimation__container--close"} confimation__container--outside`} >



            <div className="confirmation">
                <h2 className="confirmation__title">Pop the Corn!</h2>
                <h2 className="confirmation__title">Your Watch Bash is a Go!</h2>

                <div className="confirmation__image--container"><img
                    className="confirmation__image"
                    src={Popcorn}
                    alt="Let's go popcorn"
                /></div>

                <p className="confirmation__paragraph">
                    We've got you confirmed for you Watch Bash with    <ul className="confirmation__paragraph--friends">
                        {formData.selectedFriends.map((friendId) => {
                            const friend = usersData.users.find((user) => user.id === friendId);
                            return (
                                <li
                                    key={friendId}
                                    className="confirmation__paragraph--friends-space"
                                >
                                    {friend.firstName}
                                </li>
                            );
                        })}!
                    </ul>
                    Get ready for a fantastic time together. Sit back, relax, and enjoy the show!

                </p>
                <div className="confirmation__time-container">
                    <p>Time: {formData.time}</p>
                    {/* <p>Movie: {selectedMovie.name}</p> */}

                </div>
                <p>Date: {formData.selectedDate}</p>



                <button className="confirmation__button"
                    onClick={onClose}>View Watch Bash Schedule</button>
                <Link to='/'
                >   <button
                    // onClick={handleHomeNavgiate}
                    className="confirmation__button" >Return Home</button>
                </Link>
            </div>
        </div >
    );
};

export default Confirmation
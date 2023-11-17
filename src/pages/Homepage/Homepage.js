import './Homepage.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import movieData from '../../data/movies.json';
import userData from '../../data/userData.json';
import mainProfileImg from '../../assets/icons/Homescreen_Icons/Bob.svg'
import Bell from '../../assets/icons/Homescreen_Icons/notifications-outline.svg';
import Message from '../../assets/icons/Homescreen_Icons/Chaticon.svg';
import Bookmark from '../../assets/icons/Homescreen_Icons/Bookmark.svg';
import Share from '../../assets/icons/Homescreen_Icons/Share.svg';
import Play from '../../assets/icons/Homescreen_Icons/play_arrow.svg'

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const Homepage = () => {
    const shuffledMovies = shuffleArray([...movieData]);
    const selectedUsers = userData.users.slice(0, 3);
    const otherUsers = userData.users.slice(-3);

    return (
        <section className="home">

            <nav className="home__nav">
                <Link to="/">
                    <img className="home__button-notification" src={Bell} alt="bell icon" />
                </Link>
                <Link to="/">
                    <img className="home__button-message" src={Message} alt="message icon" />
                </Link>
                <img className="home__profileImg" src={mainProfileImg} alt="img of the main profile user" />
            </nav>

            <div className="home__friends">
                <h3 className="home__activityTitle">Friends Activity</h3>
                <div className="home__activity">
                    <div className="home__leftSection">
                        {selectedUsers.map((user) => (
                            <div key={user.id} className="home__userProfile">
                                <img
                                    className="home__profileImg-left"
                                    src={user.imgUrl}
                                    alt={`${user.firstName} ${user.lastName}`}
                                />
                                <p className="home__userName">{user.firstName}</p>
                            </div>
                        ))}
                    </div>
                    <div className="home__rightSection">
                        <div className="home__rightSection-background">
                            {otherUsers.map((user) => (
                                <img
                                    key={user.id}
                                    className="home__profileImg-right"
                                    src={user.imgUrl}
                                    alt={`${user.firstName} ${user.lastName}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="home__mainSection">
                <h2 className="home__mainTitle">Most Popular Now</h2>
                <div className="home__movieSection">
                    {movieData.slice(0, 9).map((movie) => (
                        <div key={movie.id} className="home__movie-card">
                            <p className="home__genre">{movie.Genre}</p>
                            <img className="home__moviePosters" src={movie.Poster} alt={`Poster for ${movie.Series_Title}`} />
                            <div className="home__buttons">

                                <div className="home__save">
                                    <img src={Bookmark} alt="bookmark icon" />
                                    <button className="home__button-save">Save</button>
                                </div>

                                <div className="home__watchNow">
                                    <img className="home__playIcon" src={Play} alt="play icon" />
                                    <button className="home__button-watchNow">Watch Now</button>
                                </div>

                                <div className="home__share">
                                    <img src={Share} alt="share icon" />
                                    <button className="home__button-share">Share</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="home__recentlyWatched">
                <div className="home__popularMovies">
                    <h2 className="home__sectionTitle">Recently Watched</h2>
                    <button className="home__button-seeAll">See All</button>
                </div>

                <div className="home__popularMovies">
                    {shuffledMovies.slice(0, 4).map((movie) => (
                        <img key={movie.id} className="home__moviePosters" src={movie.Poster} alt={`Poster for ${movie.Series_Title}`} />
                    ))}
                </div>
            </div>

        </section>

    )
}

export default Homepage
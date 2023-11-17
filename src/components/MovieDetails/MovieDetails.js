import "./MovieDetails.scss"
import backArrowIcon from "../../assets/icons/FriendsWatchlist_Icons/Backbutton.svg"
import shareIcon from "../../assets/icons/FriendsWatchlist_Icons/Share.svg"
import addToListIcon from "../../assets/icons/FriendsWatchlist_Icons/Mylist.svg"
import lengthIcon from "../../assets/icons/FriendsWatchlist_Icons/MovieTime.svg"
import starIcon from "../../assets/icons/FriendsWatchlist_Icons/Star.svg"
import movieData from "../../data/movies.json"
import { Link } from "react-router-dom"
import movieThumbnail from "../../assets/Midnight-Family.jpg"
import backarrow from "../../assets/icons/FriendsWatchlist_Icons/Backbutton.svg"

const MovieDetail = () => {


    return (
        <div className="movie-detail">
            {/* The section of header */}

            <section className="movie-detail__header">
                <Link to ="/profile">
                <img src={backArrowIcon} className="movie-detail__header-back"></img>
                </Link>
                <h1 className="movie-detail__header-title">Watch with Friends List</h1>
            </section>

            {/* The section of hero image*/}
            <section className="movie-detail__hero">
                <img src={movieThumbnail} className="movie-detail__hero-poster"></img>
            </section>

            {/* The section of Moive Information */}
            <div>
                <section className="movie-detail__info">
                    <div className="movie-detail__info-title">
                        <h2 className="movie-detail__info-text">{movieData[1].Title}</h2>
                        <div className="movie-detail__info-icon-positioning">
                            <img src={shareIcon} className="movie-detail__info-icon"></img>
                            <img src={addToListIcon} className="movie-detail__info-icon"></img>
                        </div>
                    </div>
                    {/* Subinformation: length and rate */}
                    <div className="movie-detail__info-sub">
                        <div className="movie-detail__info-sub-pair">
                            <img src={lengthIcon}></img>
                            <p className="movie-detail__info-sub-pair-text">{movieData[1].Runtime}</p>
                        </div>

                        <div className="movie-detail__info-sub-pair">
                            <img src={starIcon} className="movie-detail__info-sub-pair-icon"></img>
                            <p className="movie-detail__info-sub-pair-text">{movieData[1].Ratings[0].Value}</p>
                        </div>
                    </div>
                </section>

                {/* Section of Synopsis */}
                <section className="movie-detail__synopsis">
                    <h3 className="movie-detail__synopsis-title">Synopsis</h3>
                    <p className="movie-detail__synopsis-text">{movieData[1].Plot}</p>
                </section>

                {/* Section of comments */}
                <section className="movie-detail__comments">
                    <div>
                        <h3 className="movie-detail__comments-user-name">Lizzie Says</h3>
                        <p className="movie-detail__comments-text">Let's watch this together!!!😍</p>
                    </div>
                </section>

                {/* Section of actions */}
                <section className="movie-detail__actions">
                    <h3 className="movie-detail__actions-title">Actions</h3>
                    <div className="movie-detail__actions-buttons">
                        <Link to='/schedule'> <button className="movie-detail__actions-buttons-schedule">
                            Schedule
                        </button></Link>

                        <button className="movie-detail__actions-buttons-discuss">Discuss</button>
                    </div>
                </section>
            </div>
        </div>

    )

}

export default MovieDetail
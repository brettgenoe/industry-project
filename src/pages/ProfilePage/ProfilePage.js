import "./ProfilePage.scss";
import { Link, useParams } from "react-router-dom";
import BackArrow from "../../assets/icons/BackArrow.png"
import Message from "../../assets/icons/Message.png"
import Bell from "../../assets/icons/notifications-outline.png"
import Emoji from "../../assets/icons/Emoji.png"
import data from "../../data/movies.json";


const ProfilePage = () => {

console.log(data);

    return (
        <main className="main">
        <section className="header">
            <div className="header__back">
                <img className = "header__back-icon" src ={BackArrow} alt= "Back Arrow">  
                </img>
            </div>
           
            <div className="header__details">
                <img className="header__details-profilephoto"src = "" alt ="Profile Photo"></img>
                <div className="header__details-user">
                    <p className="header__details-user-name">Lizzie’s Activity</p>
                </div>
            </div>
            <div className="header__image">
                <img className="header__image-icon" src = {Bell} alt = "Notification bell icon"></img>
                <img className="header__image-icon" src = {Message} alt = "Message"></img>
                <img className="header__image-icon" src = {Emoji} alt = "Emoji"></img>

            </div>
        </section>

        <section className="recent">
           <section className="recent__header">
                <h2>Recently Watched</h2>
                <p>View All</p>
           </section>

           <section className="recent__main">
            {data.map((movie,index) => (
                <div className="recent__main-movie" key={index}>
                <img className="recent__main-movie-poster" 
                        src = {movie.Poster_Link}
                        alt = "movie-poster"></img>
                <article className="recent__main-movie-details">
                    <h4>{movie.Genre}</h4>
                    <h3>{movie.Series_Title}</h3>
                    <p>{movie.Overview}</p>
                </article>
            </div>
            ))}
                
           </section>
        </section>

        <section>
            <section className="recent__header">
                <h2>Watch with Friends</h2>
                <p>View All</p>
            </section>

            {data.map((movie,index) => (
                <div key= {index} className="recent__main-movie">
                <img className="recent__main-movie-poster" src = {movie.Poster_Link} alt = "movie-poster"></img>
                <article className="recent__main-movie-details">
                    <p>...</p>
                    <div>
                        <h4>{movie.Genre}</h4>
                        <h3>{movie.Series_Title}</h3>
                    </div>
                    
                </article>
            </div>
            ))}
            
        </section>



        {/* <section className="movie">
            <img className="movie__poster"src="" alt = "Now playing movie poster"></img>
        </section> */}

        {/* <section className="content">
            <section className="content__movie">
                <div className="content__movie-titles">
                    <p className="content__movie-titles-main">Title</p>
                    <p className="content__movie-titles-sub">sub-Title</p>
                </div>
                <div className="content__movie-icons">
                    <img src = "" alt = "like icon">
                    </img>
                    <img src = "" alt = "play icon"></img>
                </div>
            </section>

            <section className="content-add">
                <img className="content-add-icon"src = "" alt = "add to playlist"></img>
                <p className="content-add-text">Add to playlist</p>
            </section>

            <section className="content-queue">
                <img className="content-queue-icon"src = "" alt = "add to queue"></img>
                <p className="content-queue-text">Add to queue</p>
            </section>

            <section className="content-share">
                <img className="content-share-icon"src = "" alt = "share"></img>
                <p className="content-share-text">share</p>
            </section>
             */}
        {/* </section> */}
        </main>
    )
}

export default ProfilePage;
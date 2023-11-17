import "./ProfilePage.scss";
import { Link, useParams } from "react-router-dom";
// import BackArrow from "../../assets/icons/BackArrow.png"
// import Emoji from "../../assets/icons/Emoji.png"
import data from "../../data/movies.json";
import ProfilePhoto from "../../assets/icons/Homescreen_Icons/Lizzie.svg"
import Bell from "../../assets/icons/Homescreen_Icons/notifications-outline.svg"
import Message from "../../assets/icons/Homescreen_Icons/Chaticon.svg"
import Emoji from "../../assets/icons/Homescreen_Icons/Bob.svg"
import BackArrow from "../../assets/icons/FriendsWatchlist_Icons/Backbutton.svg"

const ProfilePage = () => {

console.log(data);

    return (
        <main className="main">
        <section className="header">
            <div className="header__back">
                <img className = "header__back-icon" src ={BackArrow} alt= "Back Arrow">  
                </img>
            </div>
           
            
            <div className="header__image">
                <img className="header__image-icon" src = {Bell} alt = "Notification bell icon"></img>
                <img className="header__image-icon" src = {Message} alt = "Message"></img>
                <img className="header__image-icon" src = {Emoji} alt = "Emoji"></img>

            </div>
        </section>

        <section>
            <div className="details">
                <img className="details-profilephoto"src = {ProfilePhoto} alt ="Profile Photo"></img>
                <div className="details-user">
                    <h1 className="details-user-name">Lizzie’s Activity</h1>
                </div>
            </div>
        </section>

        <section className="recent">
           <section className="recent__header">
                <h1 className="recent__header-title">Recently Watched</h1>
                <h3 className="recent__header-subtitle">View All</h3>
           </section>

           <section className="recent__main">
            {data.map((movie,index) => (
                <div className="recent__main-movie" key={index}>
                <img className="recent__main-movie-poster" 
                        src = {movie.Poster_Link}
                        alt = "movie-poster"></img>
                <article className="recent__main-movie-details">
                    <h4 className="recent__main-movie-details-genre">{movie.Genre}</h4>
                    <h3 className="recent__main-movie-details-title">{movie.Series_Title}</h3>
                    <p className="recent__main-movie-details-overview">{movie.Overview}</p>
                </article>
            </div>
            ))}
                
           </section>
        </section>

        <section>
            <section className="friends__header">
                <h1 className="friends__header-title">Watch with Friends</h1>
                <h3 className="friends__header-subtitle">View All</h3>
            </section>
            <section className="friends__main">
            {data.map((movie,index) => (
                <div key= {index} className="friends__main-movie">
                    <img className="friends__main-movie-poster" src = {movie.Poster_Link} alt = "movie-poster"></img>
                    <article className="friends__main-movie-details">
                        
                        <div>
                            <h4 className="friends__main-movie-details-genre">{movie.Genre}</h4>
                            <h3 className="friends__main-movie-details-title">{movie.Series_Title}</h3>
                        </div>
                        <p className="friends__main-movie-details-options">...</p>
                        
                    </article>
                </div>
            ))}
            </section>
            
        </section>



    
        </main>
    )
}

export default ProfilePage;
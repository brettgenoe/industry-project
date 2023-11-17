import "./ProfilePage.scss";
import { Link, useParams } from "react-router-dom";
import data from "../../data/movies.json";
import ProfilePhoto from "../../assets/icons/Homescreen_Icons/Lizzie.svg"
import Bell from "../../assets/icons/Homescreen_Icons/notifications-outline.svg"
import Message from "../../assets/icons/Homescreen_Icons/Chaticon.svg"
import Emoji from "../../assets/icons/Homescreen_Icons/Bob.svg"
import BackArrow from "../../assets/icons/FriendsWatchlist_Icons/Backbutton.svg"
// import Footer from "../../components/Footer/Footer"
import Favourite from "../../assets/icons/Homescreen_Icons/FAVORITE.svg"

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }


const ProfilePage = () => {

    const shuffledMovies = shuffleArray([...data]);

    return (
        <main className="main">
        <section className="header">
            <Link to = "/">
            <div className="header__back">
                <img className = "header__back-icon" src ={BackArrow} alt= "Back Arrow">  
                </img>
            </div>
            </Link>
           
            
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
            {shuffledMovies.slice(0, 4).map((movie,index) => (
                <div className="recent__main-movie" key={index}>
                <img className="recent__main-movie-poster" 
                        src = {movie.Poster}
                        alt = {movie.Title}></img>
                <article className="recent__main-movie-details">
                    <h4 className="recent__main-movie-details-genre">{movie.Genre}</h4>
                    <h3 className="recent__main-movie-details-title">{movie.Title}</h3>
                    <p className="recent__main-movie-details-overview">{movie.Plot}</p>
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
                        <img className="friends__main-movie-poster" src = {movie.Poster} alt = "movie-poster"></img>
                        <div className="friends__main-movie-like">
                            <img className="friends__main-movie-like-icon" src={Favourite} alt= "Favorite"></img>
                        </div>
                   
                    
                    <article className="friends__main-movie-details">
                        
                        <div>
                            <h4 className="friends__main-movie-details-genre">{movie.Genre}</h4>
                            <h3 className="friends__main-movie-details-title">{movie.Title}</h3>
                        </div>
                        <p className="friends__main-movie-details-options">...</p>
                        
                    </article>
                </div>
            ))}
            </section>
            
        </section>
        {/* <Footer /> */}
        </main>
    )
}

export default ProfilePage;
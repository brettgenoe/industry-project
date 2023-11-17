<<<<<<< HEAD
import Comments from "../../components/Comments/Comments"
import "./Homepage.scss"
import movie from "../../data/user.json"
import Schedule from "../../components/Schedule/Schedule"

=======
import './Homepage.scss';
import movieData from '../../data/movies.json';
import userData from '../../data/user.json';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
>>>>>>> develop

const Homepage = () => {
    const shuffledMovies = shuffleArray([...movieData]);
    const selectedUsers = userData.users.slice(0, 3);
    const otherUsers = userData.users.slice(-3);

    return (
<section className="home">

<<<<<<< HEAD
        <>
            < Schedule />
=======
    <nav className="home__nav">
        <button className="home__button-profile"></button>
        <button className="home__button-settings"></button>
        <img src={selectedUsers[0].img} alt="img of {selectedUsers.firstName}" />
    </nav>

    <div className="home__friends">
    <h3 className="home__activityTitle">Friends & Activity</h3>
    <div className="home__activity">
        <div className="home__leftSection">
            <div className="home__leftSection-background">
            {selectedUsers.map((user) => (
                <img
                key={user.id}
                className="home__profileImg"
                src={user.imgUrl}
                alt={`${user.firstName} ${user.lastName}`}
                />
            ))}
            </div>
            <p className="home__user-stats">Vera +7</p>
            </div>

        <div className="home__activeUser">
            <img src="" alt="" />
            <p>Sussane</p>
        </div>

        <div className="home__rightSection">
        <div className="home__rightSection-background">
            {otherUsers.map((user) => (
            <img
            key={user.id}
            className="home__profileImg"
            src={user.imgUrl}
            alt={`${user.firstName} ${user.lastName}`}
            />
        ))}
        </div>
            <p className="home__user-stats">Suzie +3</p>
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
      <button className="home__button-save">Save</button>
      <button className="home__button-watchNow">Watch Now</button>
      <button className="home__button-share">Share</button>
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
>>>>>>> develop

    )
}

export default Homepage

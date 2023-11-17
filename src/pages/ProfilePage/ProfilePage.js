import "./ProfilePage.scss";

const ProfilePage = () => {
    return (

        <>
        <section className="header">
            <div className="header__details">
                <img className="header__details-profilephoto"src = "" alt ="Profile Photo"></img>
                <div className="header__details-user">
                    <p className="header__details-user-name">User's first Name</p>
                    <p className="header__details-user-status">Status</p>
                </div>
            </div>
            <div className="header__image">
                <img className="header__image-icon" src = "" alt = "Clock"></img>
            </div>
        </section>

        <section className="movie">
            <img className="movie__poster"src="" alt = "Now playing movie poster"></img>
        </section>

        <section className="content">
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
            
        </section>
        </>
    )
}

export default ProfilePage;
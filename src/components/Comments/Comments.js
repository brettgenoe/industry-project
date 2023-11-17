import "./Comments.scss"
import { useState } from "react";
import commentData from "../../data/comments.json"


const Comments = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [comments, setComments] = useState("");

    const [myFormData, setMyFormData] = useState({});

    const handleAllChanges = (event) => {
        setMyFormData({ ...myFormData, [event.target.name]: event.target.value })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    }


    return (

        <>
            <form onSubmit={handleSubmit}>
                <h2>Form with State</h2>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        onChange={handleAllChanges}
                        value={myFormData.firstName}
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        type="lastName"
                        name="lastName"
                        onChange={handleAllChanges}
                        value={myFormData.lastName}

                    />
                </label>
                <label>
                    Comments:
                    <input
                        type="comments"
                        name="comments"
                        onChange={handleAllChanges}
                        value={myFormData.comments}
                    />
                </label>

                <button type="submit" >Post Comment</button>
            </form>

            <div className="comments__container">




            </div>


        </>
    )

}

export default Comments
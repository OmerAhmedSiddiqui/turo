import "./stylingSecond.css"
import profilePic from "../assets/images/profilePic.png"

function ProfilePicHolder() {
    return (
        <>
            <div className="container-fluid">
                <div className="row" id="HeaderProfile">

                    <img src={profilePic} className=' ' id="profilePicImage" alt="" />
                    <button className="btn  " id="buttonProfilePicHolder">Edit Profile</button>

                </div>
                <div>
                </div>
            </div>

        </>
    );
}

export default ProfilePicHolder;


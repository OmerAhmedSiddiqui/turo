import '../components/styling.css'
import { AiFillApple, AiOutlineMail } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io";
import { GoogleAuthProvider, auth, signInWithPopup, provider, FacebookAuthProvider, fbProvider } from "../config/friebaseConfig"
import { Navigate } from 'react-router-dom';
const PopUp = () => {

    const loginWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log("user =>", user);
                <Navigate to='/profile'/>
                // ...
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log("error =>", errorMessage);

            });
    }

    const loginWithFb = () => {
        signInWithPopup(auth, fbProvider)
            .then((result) => {
                const user = result.user;
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;
                console.log("user =>", user);

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = FacebookAuthProvider.credentialFromError(error);
                console.log("error =>", errorMessage);

            });
    }
    return (
        <>

            <div className="container">
                <div className="row" style={{ marginTop: '-400px' }}>
                    <div className="col-lg-5 col-md-8 col m-auto bg-white" id='popUp'>
                        <h1 className='font-weight-bolder' style={{ marginBottom: '100px' }} >Welcome to Turo</h1>
                        <button className='btn btn-white  border border-dark  py-2  btnPopUp my-1 px-5 ' id='btn1PopUp'><AiFillApple size='25' /><h5 className='d-inline' >Continue With Apple</h5 > </button>
                        <button className='btn btn-white border border-dark  py-2  btnPopUp my-1 px-5' id='btn2PopUp' onClick={loginWithGoogle}><FcGoogle size='25' /> <h5 className='d-inline' >Continue With Google</h5 ></button>
                        <button className='btn btn-white border border-dark  py-2  btnPopUp my-1 px-5' id='btn3PopUp' onClick={loginWithFb}><IoLogoFacebook size='25' color='blue' /> <h5 className='d-inline'  >Continue With Facebook</h5 ></button>
                        <button className='btn btn-white border border-dark  py-2  btnPopUp my-1 px-5' id='btn4PopUp'><AiOutlineMail size='25' /> <h5 className='d-inline' >Continue With Email</h5 ></button>

                        <div className='mt-5'>Already have an account? <button className='btn ml-2 p-2 border border-dark '>Log In</button></div>

                        <div className='text-muted privacyPopUp' >This site is protected by reCAPTCHA and the Google <span className='spanPopUp'>Privacy Policy</span> and <span className='spanPopUp'>Terms OF Service</span>  apply</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopUp;
import "./stylingSecond.css"
import tic from "../assets/images/tic.png"
import profilePic from "../assets/images/profilePic.png"
import ReactStars from 'react-stars'
import React from 'react'
import { render } from 'react-dom'
function LoginInfo() {
    const ratingChanged = (newRating) => {
        console.log(newRating)
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row " style={{ marginTop: '100px' }} id="">
                    <div className="col-lg-4 col-12 m-auto">
                        <h2 className="h1 font-weight-bolder" style={{ fontWeight: "1500" }}>Omer A.</h2>
                        <p>Joined Dec 2022</p>

                        <h5 className="text-muted mt-5" style={{ fontSize: '12px', letterSpacing: '1px', fontWeight: '900' }}>VERIFIED INFO</h5>
                        <div className="d-flex col-12">
                            <div className="mt-2">
                                <p>Approved to drive</p>
                                <p>Email address</p>
                                <p>Phone number</p>
                                <p>Facebook</p>
                            </div>
                            <div className="mt-2 mx-5 " >
                                <p className="d-flex justify-content-end" style={{ color: '#1facfd' }}>Verified ID</p>
                                <p className="d-flex justify-content-end" style={{ color: '#1facfd' }}><img src={tic} alt="ticIcon" style={{ width: '13%' }} /></p>
                                <p className="d-flex justify-content-end" style={{ color: '#1facfd' }}> Verify Phone Number</p>
                                <p className="d-flex justify-content-end" style={{ color: '#1facfd' }}>Connect Account</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col">
                        <h5 className="text-muted mt-5" style={{ fontSize: '12px', letterSpacing: '1px', fontWeight: '900' }}>REVIEWS FROM HOSTS</h5>
                        <div className="d-flex my-4">
                            <img src={profilePic} alt="profilePic" style={{ width: "20%", marginLeft: '-20px' }} />
                            <div >
                                <ReactStars
                                    count={5}
                                    onChange={ratingChanged}
                                    size={20}
                                    color2={'#ffd700'} className='mx-3'/>
                                <p className="mx-3" style={{ fontWeight: 'bolder' }}>No Reviews Yet</p>
                                <p className="mx-3 no-gutters" style={{ marginTop: '-10px' }}> omer hasn’t received a review on Turo yet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default LoginInfo;


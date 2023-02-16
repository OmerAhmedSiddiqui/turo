import ProfilePicHolder from '../componentsSecond/ProfilePicHolder';
import HeaderSecond from '../componentsSecond/HeaderSecond';
import Footer from '../components/Footer';
import LoginInfo from '../componentsSecond/LoginInfo';
import { useContext } from 'react';
import { TestContext } from '../config/context';
function Profile() {
  // const profileData = useContext(TestContext)
  // console.log(profileData);
  return (
    <>
    <HeaderSecond/>
    <ProfilePicHolder/>
    <LoginInfo/>



    <Footer/>
   
    </>
  );
}

export default Profile;

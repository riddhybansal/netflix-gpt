import LogoImage from "../img/Netflix_Logo_PMS.png"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from "react";
import "../index.css"
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate=useNavigate();
    const user=useSelector(store=>store.user)
    const onToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    const dispatch=useDispatch();

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in
              const {uid,email,displayName} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName}))
              navigate('/browse')
              // ...
            } else {
              // User is signed out
              dispatch(removeUser());
              navigate('/')
            }
          });
          // unsubscribe when unmount
          return()=>unsubscribe();
    },[])

   

    const signOutNetflix=()=>{
        signOut(auth).then(() => {
            // dispatch(removeUser())
            // Sign-out successful.

          }).catch((error) => {
            // An error happened.
          });
    }
    return (
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between items-center">
            <img className="w-44" src={LogoImage} />
           { user && (<div className="flex items-center">
                <img className="w-10 mx-auto" height="50px" src="https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABU5Qwt10e3PzSXuq99ez0MKgEw_afpYolmVXe1QutqPdJnRccorGSFeXn4MY2Bin-TDoHjD_bU2v4vYz4BU27mwwogkWI5I.png?r=fab" />
                <ArrowDropDownIcon color="primary" onClick={onToggleMenu} />
                {isMenuOpen && (<div className="bg-white absolute p-4 header-menu">
                    <ul>
                        <li onClick={signOutNetflix}>Sign Out</li>
                    </ul>
                </div>)}
            </div>)}
        </div>
    )
}

export default Header;
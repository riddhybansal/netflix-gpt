import LogoImage from "../img/Netflix_Logo_PMS.png"
import MenuItem from '@mui/material/MenuItem';
import { Box } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from "react";
import "../index.css"
import {auth} from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate=useNavigate();
    const onToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const signOutNetflix=()=>{
        signOut(auth).then(() => {
            // dispatch(removeUser())
            navigate('/')
            // Sign-out successful.

          }).catch((error) => {
            // An error happened.
          });
    }
    return (
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between items-center">
            <img className="w-44" src={LogoImage} />
            <div className="flex items-center">
                <img className="w-10 mx-auto" height="50px" src="https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABU5Qwt10e3PzSXuq99ez0MKgEw_afpYolmVXe1QutqPdJnRccorGSFeXn4MY2Bin-TDoHjD_bU2v4vYz4BU27mwwogkWI5I.png?r=fab" />
                <ArrowDropDownIcon color="primary" onClick={onToggleMenu} />
                {isMenuOpen && (<div className="bg-white absolute p-4 header-menu">
                    <ul>
                        <li onClick={signOutNetflix}>Sign Out</li>
                    </ul>
                </div>)}
            </div>
        </div>
    )
}

export default Header;
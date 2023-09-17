import { useRef, useState } from "react";
import Header from "./Header";
import { checkSignUpForm } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [isSignInForm, setSignInForm] = useState(true)
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    const email = useRef(null);
    const password = useRef(null)
    const name ="Riddhi";
    const toggleSignInForm = () => {
        setSignInForm(!isSignInForm)
        setError(null);
    }

    const handleButtonClick = () => {
        //Validate the form data
        const message = checkSignUpForm(email.current.value, password.current.value)
        setError(message);

        if (message) return;
        // SignIn/ SignUp

        if (!isSignInForm) {
            //signUp logic
            signUp();
        }
        else {
            signIn();
            //signIn Logic
        }
    }

    const signUp = () => {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value,name)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate('/browse')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
                // ..
            });
    }

    const signIn = () => {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate('/browse')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
                console.log(errorCode + " " + errorMessage)
            });
    }

 

    return (
        <div>
            <Header />
            <img className="absolute" src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
            <form onSubmit={(e) => e.preventDefault()} className="w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-0">
                <h1 className="font-bold text-3xl py-4">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                {
                    !isSignInForm && (
                        <input type="text" placeholder="Full Name" className="p-2 my-2 w-full bg-gray-800"></input>
                    )
                }
                <input type="text" placeholder="Email Address" className="p-2 my-2 w-full bg-gray-800" ref={email}></input>
                <input type="password" placeholder="Password" className="p-2 my-2 w-full bg-gray-800" ref={password}></input>
                {
                    error && (
                        <p className="text-red-500  font-bold my-2" >{error}</p>
                    )
                }
                <button className="p-4 my-4 bg-red-700 w-full" onClick={handleButtonClick}>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                <p className="cursor-pointer" onClick={() => toggleSignInForm()}>{isSignInForm ? 'New to netflix? Sign Up' : 'Already registered? Sign In'}</p>
            </form>
        </div>
    )
}

export default Login;
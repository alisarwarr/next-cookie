'use client';
import Cookies from 'js-cookie';


export default function App(): JSX.Element {

    // Function to get a cookie
    const getCookie_rememberMe = () => {
        return Cookies.get('rememberMe');
    };
    // Function to set a cookie
    const setCookie_rememberMe = () => {
        Cookies.set('rememberMe', true, { expires: 7 });
        window.document.getElementById("rememberMe")!.innerHTML = getCookie_rememberMe();
    };
    // Function to remove a cookie
    const removeCookie_rememberMe = () => {
        Cookies.remove('rememberMe');
        window.document.getElementById("rememberMe")!.innerHTML = getCookie_rememberMe();
    };


    // Function to set a cookie
    const getCookie_accessToken = () => {
        return Cookies.get('accessToken');
    };
    // Function to set a cookie
    const setCookie_accessToken = () => {
        Cookies.set('accessToken', '12345ABC', { expires: 7 });
        window.document.getElementById("accessToken")!.innerHTML = getCookie_accessToken();
    };
    // Function to remove a cookie
    const removeCookie_accessToken = () => {
        Cookies.remove('accessToken');
        window.document.getElementById("accessToken")!.innerHTML = getCookie_accessToken();
    };


    return (
        <div className="App">
            <h1>rememberMe:</h1>
            <p id="rememberMe">{getCookie_rememberMe()}</p>
            <button onClick={setCookie_rememberMe}>Set Cookie</button>
            <button onClick={removeCookie_rememberMe}>Remove Cookie</button>

            <h1>accessToken:</h1>
            <p id="accessToken">{getCookie_accessToken()}</p>
            <button onClick={setCookie_accessToken}>Set AccessToken</button>
            <button onClick={removeCookie_accessToken}>Remove AccessToken</button>
        </div>
    )
}
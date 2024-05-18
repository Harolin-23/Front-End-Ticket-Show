import react from "react";
import { useState } from "react";

import "./ModalAccount.css";

function ModalAccount(Checked) {
  const [status, setStatus] = useState(false);

  //Redirects To logins
  const clickedRedirect = (event) => {
    window.location.href = "/Login";
  };

  return (
    <div className="accountModal">
      <div className="textAccount">
        <h1>
          {status ? (
            <h1>
              Hello!<br></br>Username
            </h1>
          ) : (
            <h1>Sign in</h1>
          )}
        </h1>
      </div>
      <div className="container-account">
        {status ? (
          <div className="sesion-Block">
            <button>Sing Out</button>
            <a href="">Your information</a>
          </div>
        ) : (
          <div className="sesion-Block">
            <button onClick={clickedRedirect}>Login</button>
            <p>or</p>
            <a href="/Registrer">Register</a>
          </div>
        )}
      </div>
      <p>The accounts are protected by data encryption</p>
    </div>
  );
}

export default ModalAccount;

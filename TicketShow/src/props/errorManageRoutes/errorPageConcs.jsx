import {text} from '../../components/header/Header.jsx'




export const ErrorSituation = ({errorTx,infoAct}) => {
    return(
        <div className="erroToAcces">
        <a href="/" className="logo LErrR">
          {text.Text}
          <b className="RS-Logo">{text.bold}</b>
          {text.textlag}
        </a>
        <h1>
          <br></br>
          <i class="fa-solid fa-xmark"></i>
          <br />
          <i>{errorTx}</i>
          <br></br>
          {infoAct}
        </h1>
      </div>
    )
}
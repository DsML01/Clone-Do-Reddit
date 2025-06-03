import './Header.css';

import logoReddit from '../../assets/reddit-logo.png';
import searchIcon from '../../assets/search.svg';
import chatIcon from '../../assets/bate-papo.svg';
import translationIcon from '../../assets/translate_symbol.svg';
import downloadIcon from '../../assets/download.svg';
import moreIcon from   '../../assets/more.svg';

function Header()
{

    return(
        <header className="header">
            <div className="header-container">
                <div className="header-logo" id='reddit-logo-header'>
                    <img src={logoReddit} alt="logo do reddit" width="100"/>
                </div>
                <div className="header-search-bar">
                    <div className="header-search-container" id='search-button'>
                        <img src={searchIcon} alt="search"/>
                    </div>
                    <div className="header-search-container">
                        <input type="text" placeholder='Pesquisar no Reddit'/>
                    </div>
                    <div className="header-search-container">
                        
                    </div>
                </div>
                <div className="header-buttons">
                    <button className="header-button">
                        <img src={chatIcon} alt="Chat symbol" />
                    </button>
                    <button className="header-button">
                        <img src={translationIcon} alt="translation symbol"/>    
                    </button>
                    <button className="header-button" id='download-button'>
                        <img src={downloadIcon} alt="baixar-app"/> <span>Baixar o app</span>   
                    </button>
                    <button className="header-button" id='singin-button'>
                        Entrar
                    </button>
                    <button className="header-button" id='singup-button'>
                        Cadastre-se
                    </button>
                    <button className="header-button">
                        <img src={moreIcon} alt="..."/>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
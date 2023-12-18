import GlobalNav from './GlobalNav';

import './Header.css';

function Header({pageChange}) {

    return (
        <header className="header">
            <div className="header__logo"> 
                <a href=""><img src="https://placekitten.com/200/160"
                    width="auto" height="60px" alt="Logo of the webpage"/></a>
            </div>

            <div className="header__title">
                <h1>Cats in the internet</h1>
            </div>
            <GlobalNav className="header__menu" onPageChange={pageChange}/>
        </header>
    );
}

export default Header;
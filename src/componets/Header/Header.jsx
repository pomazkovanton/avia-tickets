import logo from '../../images/logo.png';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img className={classes.logo} src={logo} alt='Логотип сайта'></img>
        </header>
    );
};

export default Header;
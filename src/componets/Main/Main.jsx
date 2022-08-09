import classes from './Main.module.css';

const Main = ({children}) => {
    return (
        <main>
            <div className={classes.wrapper}>
                {children}
            </div>
        </main>
    )
}

export default Main;
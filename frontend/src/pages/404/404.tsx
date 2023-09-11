import { NavLink } from "react-router-dom";
import styles from "./404.module.scss";

const PageNotFound = () => {
    return (
        <div className={styles.root}>
            <h3>404 | Page not found.</h3>
            <hr />
            <p>
                Go back to <NavLink to="/">Home</NavLink> page.
            </p>
        </div>
    );
};

export default PageNotFound;

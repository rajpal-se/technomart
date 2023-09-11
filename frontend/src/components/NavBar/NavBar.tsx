import { Link, NavLink } from "react-router-dom";
import { PiUserCircle } from "react-icons/pi";
import { RiLogoutBoxRLine, RiLoginBoxLine } from "react-icons/ri";
import styles from "./NavBar.module.scss";
import ProductSearchField from "../ProductSearchField/ProductSearchField";
import { useCallback, useState } from "react";
import ConfirmLogoutDialog from "../ConfirmLogoutDialog/ConfirmLogoutDialog";

const NavBar = () => {
    const isUserLoggedIn = true;
    const [isConfirnLogoutDialogOpened, setIsConfirnLogoutDialogOpened] =
        useState(false);

    const cancelHandler = useCallback(() => {
        setIsConfirnLogoutDialogOpened(false);
    }, [setIsConfirnLogoutDialogOpened]);

    const logoutHandler = useCallback(() => {
        setIsConfirnLogoutDialogOpened(false);
    }, [setIsConfirnLogoutDialogOpened]);

    const openDialogHandler = useCallback(() => {
        setIsConfirnLogoutDialogOpened(true);
    }, [setIsConfirnLogoutDialogOpened]);

    return (
        <div className={styles.root}>
            <nav>
                <div className={styles.navGroupLeft}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/mobiles">Mobiles</NavLink>
                    <NavLink to="/laptops">Laptops</NavLink>
                </div>
                <div className={styles.navGroupCenter}>
                    <NavLink to="sdxcds">
                        <ProductSearchField />
                    </NavLink>
                </div>
                <div className={styles.navGroupRight}>
                    {isUserLoggedIn ? (
                        <>
                            <div>
                                <Link to="/account">
                                    <PiUserCircle />
                                    <span>Account</span>
                                </Link>
                            </div>
                            <div>
                                <span role="button" onClick={openDialogHandler}>
                                    <RiLogoutBoxRLine />
                                    <span>Logout</span>
                                </span>
                            </div>
                        </>
                    ) : (
                        <div>
                            <NavLink to="/login">
                                <RiLoginBoxLine />
                                <span>Login</span>
                            </NavLink>
                        </div>
                    )}
                </div>
            </nav>
            <ConfirmLogoutDialog
                isOpened={isConfirnLogoutDialogOpened}
                onCancel={cancelHandler}
                onLogout={logoutHandler}
            />
        </div>
    );
};

export default NavBar;

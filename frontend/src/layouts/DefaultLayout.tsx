import { ReactNode } from "react";
import styles from "./DefaultLayout.module.scss";
import NavBar from "../components/NavBar/NavBar";

type DefaultLayoutPropType = {
    children: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutPropType) => {
    return (
        <div className={styles.root}>
            <NavBar />
            <div className={styles.container}>{children}</div>
        </div>
    );
};

export default DefaultLayout;

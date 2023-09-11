import { ReactNode } from "react";
import styles from "./DefaultLayout.module.scss";

type DefaultLayoutPropType = {
    children: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutPropType) => {
    return <div className={styles.root}>{children}</div>;
};

export default DefaultLayout;

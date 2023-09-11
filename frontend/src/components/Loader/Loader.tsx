import { BiLoaderAlt } from "react-icons/bi";
import styles from "./Loader.module.scss";

const Loader = () => {
    return (
        <div className={styles.root}>
            <BiLoaderAlt />
        </div>
    );
};

export default Loader;

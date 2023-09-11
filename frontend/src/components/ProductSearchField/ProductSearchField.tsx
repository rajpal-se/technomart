import { TextField } from "@mui/material";
import styles from "./ProductSearchField.module.scss";

const ProductSearchField = () => {
    return (
        <div className={styles.root}>
            <TextField size="small" />
        </div>
    );
};

export default ProductSearchField;

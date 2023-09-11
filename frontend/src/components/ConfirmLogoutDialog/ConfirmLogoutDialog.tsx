import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";

type ConfirmLogoutDialogPropType = {
    isOpened: boolean;
    onLogout: (isOpened: boolean) => void;
    onCancel: (isOpened: boolean) => void;
};

const ConfirmLogoutDialog = ({
    isOpened = false,
    onLogout,
    onCancel,
}: ConfirmLogoutDialogPropType) => {
    return (
        <Dialog
            open={isOpened}
            keepMounted
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{"Are you sure to logout?"}</DialogTitle>
            <DialogActions>
                <Button onClick={() => onLogout(isOpened)}>Cancel</Button>
                <Button onClick={() => onCancel(isOpened)}>Logout</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmLogoutDialog;

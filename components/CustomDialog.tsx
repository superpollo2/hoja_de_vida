import { Button, Dialog, DialogTitle } from '@mui/material';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';

interface custromDialogProps {
    title: string;
    description: string;
    open: boolean;
    handleClose: () => void;

}

function CustomDialog({title, description,open, handleClose }: custromDialogProps) {

    return (
        <Dialog open={open} onClose={handleClose} className='custom-dialog' >
            <DialogTitle className='text-center'>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    {description}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
};

export { CustomDialog };
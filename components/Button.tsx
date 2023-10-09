import React, { useState } from 'react';
import { Button, Dialog, DialogTitle } from '@mui/material';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { keyframes, styled } from '@mui/material/styles';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import '@mui/material';



function MyButton ()  {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
                className='shadow-lg button flex items-center rounded-lg text-primary py-[2%] px-[5%] mt-[5%] bg-blue-500'
                onClick={handleClickOpen}

            >
                Hire me <AiOutlineArrowRight style={{ marginLeft: '10px' }} />
            </Button>
            <Dialog open={open} onClose={handleClose} className='custom-dialog ' >
                <DialogTitle>Hello Dialog</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>


    )
};

export { MyButton };

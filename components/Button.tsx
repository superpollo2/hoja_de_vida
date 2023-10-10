import React, { useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import '@mui/material';
import { CustomDialog } from './CustomDialog';

const dialogText = ` 
    👷 Start entering the Industry 
    🌱 Try to grow my tech stack 
    💪🧙Be better at the Backend 
    📝 Learn more about Fronted 
    ☁️ Learn about cloud 
    📉Learn about Data Science 
    🌈Be happy 🌟`;
                    
function MyButton() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button
                className='shadow-lg button flex items-center rounded-lg text-primary py-[2%] px-[5%] mt-[6%] bg-blue-500'
                onClick={handleClickOpen}>
                Hire me <AiOutlineArrowRight style={{ marginLeft: '10px' }} />
            </button>
            <CustomDialog title='My objectives' description={dialogText} open={open} handleClose={handleClose}  />
        </div>


    )
};

export { MyButton };

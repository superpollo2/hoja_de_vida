import { FiMail} from "react-icons/fi"; 

const Footer =() =>{
    return(
        <section className="w-full mt-[2%]">
            <div className="flex flex-col items-center text-primary justify-center bg-indigo-100 h-[80px] ">
                <span >&copy; Copyright 2023, SuperPolloDev. All Rights Reserved </span>
                 <span className="flex space-x-4 items-center"> <FiMail/><p>vanessatascon08@gmail.com</p></span>
            </div>
            <div className="bg-violet-300 h-[10px]">

            </div>
        </section>
    );
};


export { Footer};
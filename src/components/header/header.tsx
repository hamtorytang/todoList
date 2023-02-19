import React, { SetStateAction, useEffect } from "react";
import {MdOutlineLightMode} from 'react-icons/md';

interface HeaderProps{
    setState: React.Dispatch<SetStateAction<string>>;
    setbgColor: React.Dispatch<SetStateAction<boolean>>;
    bgColor:boolean;
}
export default function Header({setState, setbgColor, bgColor}:HeaderProps){
    return (
        <header className="App--header">
            <button className='mode--button' onClick={()=>setbgColor(!bgColor)}>
            <MdOutlineLightMode/>
            </button>
            <div className='state--container'>
                <button className='all--button selected' onClick={()=>{
                    const buttonSelected = document.querySelector('.selected');
                    const allBtn = document.querySelector('.all--button');

                    buttonSelected?.classList.remove('selected');
                    allBtn?.classList.add('selected')
                    setState('all');
                }}>All</button>
                <button className='active--button' onClick={()=>{
                    const buttonSelected = document.querySelector('.selected');
                    const activeBtn = document.querySelector('.active--button');
                    // console.log('ad');
                    console.log(buttonSelected,'check btn selected');
                    buttonSelected?.classList.remove('selected');
                    console.log(activeBtn,'active btn selected');
                    activeBtn?.classList.add('selected')
                    setState('active');
                }}>Active</button>
                <button className='completed--button' onClick={()=>{
                    const buttonSelected = document.querySelector('.selected');
                    const completedBtn = document.querySelector('.completed--button');

                    buttonSelected?.classList.remove('selected');
                    completedBtn?.classList.add('selected')
                    setState('completed');
                }}>Completed</button>
            </div>
        </header>
    )
}
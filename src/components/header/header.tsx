import React, { SetStateAction, useEffect } from "react";
import {MdOutlineLightMode} from 'react-icons/md';

interface HeaderProps{
    filters: Array<string>;
    filter: string;
    setFilter: React.Dispatch<SetStateAction<string>>;
}
export default function Header({filters, filter, setFilter}:HeaderProps){
    return (
        <header className="App--header">
            <button className='mode--button'>
            <MdOutlineLightMode/>
            </button>
            <div className='state--container'>
                {
                    filters.map((element, index)=>{
                        return(
                            <button 
                            key={index}
                            className={`${element}--button ${filter === element ? 'selected' : ''}`} 
                            onClick={()=>{
                                setFilter(element);
                            }}
                            >{element}</button>
                        )
                    })
                }
            </div>
        </header>
    )
}
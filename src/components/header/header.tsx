import React, { SetStateAction } from "react";
import {MdOutlineLightMode} from 'react-icons/md';
import {BsMoon} from 'react-icons/bs';
import { useDarkMode } from "../../context/darkmode";
import styles from './header.module.css'
interface HeaderProps{
    filters: Array<string>;
    filter: string;
    setFilter: React.Dispatch<SetStateAction<string>>;
}
export default function Header({filters, filter, setFilter}:HeaderProps){
    const {darkmode, toggleMode} = useDarkMode();
    return (
        <header className={styles.header}>
            <button className={styles.button} onClick={toggleMode}>
            {
                darkmode ? 
                <MdOutlineLightMode/>
                :
                <BsMoon/>
            }
            </button>
            <div className={styles.container}>
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
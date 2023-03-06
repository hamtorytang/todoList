import React, { useEffect, useState } from "react";
import { ItemProps } from '../../interface/item';
import styles from './footer.module.css'
interface FooterProps{
    addItem: (item:ItemProps)=>void;
}


const generateKey = () => {
    return new Date().getTime().toString();
}
export default function Footer({addItem}:FooterProps){

    const [content, setContent] = useState<ItemProps>({key:'',text:'', state:'active'});

    const enterContent = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(content.text.trim().length !== 0){
            addItem(content);
            setContent({key:'',text:'', state:'active'});
        }else{
            alert('write something');
        }
    }
    
    return (
        <form className={styles.footer}
        onSubmit={enterContent}
        >
            <input
            className={styles.input}
            type='text'
            placeholder='  Add Todo'
            onChange={(event)=>{
                setContent({key: generateKey(), text: event.target.value, state:'active'});
            }}
            value={content.text}
            />
            <button className={styles.button}>
                Add
            </button>
        </form>
    )
}
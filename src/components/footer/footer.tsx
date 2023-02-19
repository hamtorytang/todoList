import React, { useEffect, useState } from "react";

interface FooterProps{
    addedState: boolean;
    setAdded: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ContentProps{
    key: string;
    text: string;
    state: string;
}

const generateKey = () => {
    return new Date().getTime();
}
export default function Footer({addedState, setAdded}:FooterProps){

    const [content, setContent] = useState<ContentProps>({key:'',text:'', state:'active'});
    const [key, setKey] = useState<string>('');

    useEffect(()=>{
        setKey(generateKey().toString());
    },[]);
    useEffect(()=>{
        setKey(generateKey().toString());
    },[addedState]);

    const enterContent = ()=>{
        if(content.text.trim().length !== 0){
            setAdded(!addedState);
            window.localStorage.setItem(content.key,JSON.stringify({...content, text:content.text.trimStart()}));
            setContent({key:'', text:'', state:'active'});
        }else{
            alert('write something');
        }
    }
    
    return (
        <footer className='App--footer'>
            <textarea 
            onChange={(event)=>{
                setContent({key: key, text: event.target.value, state:'active'});
            }}
            onKeyDown={(event)=>{
                if(event.code === 'Enter'){
                    event.preventDefault();
                    enterContent();
                }
            }}
            value={content.text}
            />
            <button className='add-button' onClick={()=>{
                    enterContent();
                }}>
                Add
            </button>
        </footer>
    )
}
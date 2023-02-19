import {RiDeleteBinLine} from 'react-icons/ri';

interface ListProps{
    state:string;
    addedState:boolean;
    setAdded: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ContentProps{
    key:string;
    text:string;
    state:string;
}

export default function Main({state, addedState, setAdded}:ListProps){
    console.log('main being started again');

    const updatedList = ()=>{
        const tempArr: Array<ContentProps> = [];
        let tempObj;
        for(let i = 0; i < window.localStorage.length; ++i){
            tempObj = window.localStorage.getItem(window.localStorage.key(i) as string);
            tempArr.push(JSON.parse(tempObj as string));
        }
        return tempArr;
    }

    if(state === 'all'){
        return (
            <ul className='main--list'>
                {
                    updatedList().sort((a,b)=> Number(a.key)-Number(b.key)).map((element)=>{
                        return(
                            <Item item={element} addedState={addedState} key={element.key} setAdded={setAdded}/>
                        )
                    })
                }
            </ul>
        )
    }else if(state === 'active'){
        return (
            <ul className='main--list'>
                {
                    updatedList().sort((a,b)=> Number(a.key)-Number(b.key)).filter((element)=>element.state === 'active').map((element)=>{
                        return(
                            <Item item={element} addedState={addedState} key={element.key} setAdded={setAdded}/>
                        )
                    })
                }
            </ul>
        )
    }else if(state === 'completed'){
        return (
            <ul className='main--list'>
                {
                    updatedList().sort((a,b)=> Number(a.key)-Number(b.key)).filter((element)=>element.state === 'completed').map((element)=>{
                        return(
                            <Item item={element} addedState={addedState} key={element.key} setAdded={setAdded}/>
                        )
                    })
                }
            </ul>
        )
    }else{
        return(
            <p>error page</p>
        )
    }
}

interface ItemProps {
    item:ContentProps;
    addedState:boolean;
    setAdded: React.Dispatch<React.SetStateAction<boolean>>;
}

function Item({item, addedState, setAdded}:ItemProps){

    const handleCheckbox = (e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.checked){
            window.localStorage.setItem(item.key,JSON.stringify({...item, state:'completed'}));
        }else{
            window.localStorage.setItem(item.key,JSON.stringify({...item, state:'active'}));
        }
        setAdded(!addedState);
    }

    const checkInputStatus = ()=>{
        if(item.state === 'active'){
            return <input type='checkbox' onChange={e=>handleCheckbox(e)}/>
        }else if(item.state === 'completed'){
            return <input checked type='checkbox' onChange={e=>handleCheckbox(e)}/>
        }
    }

    return(
        <li>
            <article>
                {checkInputStatus()}
                {item.text}
            </article>
            <RiDeleteBinLine className='bin--button' onClick={()=>{
                window.localStorage.removeItem(item.key);
                setAdded(!addedState);
            }}/>
        </li>
    )
}
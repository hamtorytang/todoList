import {RiDeleteBinLine} from 'react-icons/ri';
import {ItemProps} from '../../interface/item';
import styles from './main.module.css'
interface ListProps{
    list:Array<ItemProps>;
    filter:string;
    deleteListItem:(item:ItemProps)=>void;
    updateListItem:(item:ItemProps)=>void;
}

export default function Main({filter, list, deleteListItem, updateListItem}:ListProps){

    const filteredList = (filter:string)=>{
        if(filter === 'all'){
            return list;
        }
        return list.filter((element)=>element.state === filter);
    }

    return(
        <ul className={styles.container}>
            {
                filteredList(filter).map((item)=>{
                    return(
                        <li key={item.key} className={styles.list}>
                            <article>
                                <input className={styles.input} type='checkbox' onChange={()=>updateListItem(item)} checked={item.state==='completed'}/>
                                {item.text}
                            </article>
                            <RiDeleteBinLine className={styles.button} onClick={()=>{
                                deleteListItem(item);
                            }}/>
                        </li>
                    )
                })
            }
        </ul>
    )
}

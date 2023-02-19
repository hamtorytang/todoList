import {RiDeleteBinLine} from 'react-icons/ri';
import {ItemProps} from '../../interface/item';
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
        <ul>
            {
                filteredList(filter).map((item)=>{
                    return(
                        <li key={item.key}>
                            <article>
                                <input type='checkbox' onChange={()=>updateListItem(item)} checked={item.state==='completed'}/>
                                {item.text}
                            </article>
                            <RiDeleteBinLine className='bin--button' onClick={()=>{
                                deleteListItem(item);
                            }}/>
                        </li>
                    )
                })
            }
        </ul>
    )
}

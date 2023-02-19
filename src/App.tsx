import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import { ItemProps } from './interface/item';


const filters = ['all', 'active', 'completed'];

function App() {
  const [filter, setFilter] = useState('all');

  const [list, setList] = useState<Array<ItemProps>>(window.localStorage.getItem('list') === null ? [] : JSON.parse(window.localStorage.getItem('list') as string));

  const addListItem = (item:ItemProps)=>{
    setList([...list, item]);
  }

  const deleteListItem = (item:ItemProps)=>{
    setList(list.filter((element)=>element.key !== item.key));
  }

  const updateListItem = (item:ItemProps)=>{
    setList(
      list.map((element)=>element.key === item.key ? 
      {...item, state:item.state === 'completed' ? 'active' : 'completed'} : element
      ));
  }

  useEffect(()=>{
    console.log(list,'list');
    window.localStorage.setItem('list',JSON.stringify(list));
  },[list]);

  return (
    <div className="App">
      <div className='todo'>
        <Header filters={filters} filter={filter} setFilter={setFilter}/>
        <Main filter={filter} list={list} deleteListItem={deleteListItem} updateListItem={updateListItem}/>
        <Footer addItem={addListItem}/>
      </div>
    </div>
  );
}

export default App;

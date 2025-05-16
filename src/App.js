import './App.css';
import Categories from './Categories';
import item from './data';
import Menu from './Menu';
import { useState } from 'react';
import { Navbar } from './Navbar';

const AllCategories = ['all', ...new Set(item.map((product) =>product.category))];

// console.log(AllCategories);

function App() {

const [menuitems, setMenuItems] = useState(item);
const [categories, setCategories] = useState(AllCategories);
// console.log(menuitems);

const filterItems = (category) =>{
  if(category === 'all'){
      setMenuItems(item);
      return;
  }
 const newItems =  item.filter((item) => item.category === category);
 setMenuItems(newItems);
}
  return (
   <>
   <Navbar/>
   <section className='menu section'>
    <div className='title'>
      <h2>ನಮ್ಮ ಮೆನು</h2>
      <div className='underline'> </div>
    </div>
    <Categories categories={categories} filterItems={filterItems}/>
      <Menu items={menuitems}/>
   </section>
      

 </>
  );
}

export default App;

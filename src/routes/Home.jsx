import React from 'react';
import Navbar from '../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import {getHomeAction} from '../redux/HomeDucks';


const Home = () => {

  const dispatch = useDispatch();
  const homeInfoInitial = useSelector(store => store.Home.infoInitial);

  const addItemCard = (idName) => {
    
  }

  return (
    <h6>
      <Navbar/>
      <br />
        <button onClick={() => dispatch(getHomeAction())} className='btn btn-dark'>Get info about the customers</button>
      <div>
      <br />
      <div style={ {width: '50%', float: 'left'} } >
        <ul>
          {
              homeInfoInitial.map(item => (
                <li key={item.name}>
                  {item.name} - {item.price}
                  <button onClick={() => addItemCard(item.name)}>Agregar</button>
                </li>
              ))
          }
        </ul>  
      </div>
      <div style={ {width: '50%'} } >
        Carrito de compra
      </div>
      </div>    
    </h6>   
  )
};

export default Home;

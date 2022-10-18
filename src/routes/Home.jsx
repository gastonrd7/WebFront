import React from 'react';
import Navbar from '../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import {getHomeAction} from '../redux/HomeDucks';


const Home = () => {

  const dispatch = useDispatch();
  const selector = useSelector(store => store.Home.infoInitial);

  return (
    <h6>
      <Navbar/>
      <br />
        <button onClick={() => dispatch(getHomeAction())} className='btn btn-dark'>Get info about the customers</button>
      <div>
      <br />
        <ul>
          {
              selector.map(item => (
                <li key={item.name}>
                  {item.name} - {item.url}
                </li>
              ))
          }
        </ul>   
      </div>    
    </h6>   
  )
};

export default Home;
import React from 'react';
import Navbar from '../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import {getInfoBlogAction} from '../redux/BlogDucks';


const Blog = () => {

  const dispatch = useDispatch();
  const selector = useSelector(store => store.Blog.infoInitial);

  return (
    <h6>
      <Navbar/>
      <br />
        <button onClick={() => dispatch(getInfoBlogAction())} className='btn btn-dark'>Get info by id</button>
        <div>
          <br />
            <ul>
                {
                  selector.map(item =>(
                    <li key={item.name}>
                      {item.name} - {item.url}
                    </li>
                  ))
                }
            </ul>
        </div>
    </h6>
  )
}

export default Blog;
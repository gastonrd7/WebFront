import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <h1>
        Error 404, no se encontro la pagina.
        <Link to='/' className='btn btn-outline-primary'>Regrese a la pagina de inicio</Link>
    </h1>
  )
}

export default NotFound;
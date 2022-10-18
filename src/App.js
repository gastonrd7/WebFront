import React from "react";
import {Provider} from 'react-redux';
import generateStore from './redux/store';
import {Outlet} from 'react-router';


function App() {
    const store = generateStore();
    return(
        <Provider store={store}>          
            <div className="container">
                {/* El componete outlet, permite a la interfaz anidada mostrar las rutas hijas cuando son renderizadas */}
                <Outlet/>
            </div>
        </Provider>
    );
}

export default App;
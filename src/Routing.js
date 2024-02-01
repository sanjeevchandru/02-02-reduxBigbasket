import React from 'react';
import {Home} from './redux/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Cart} from './redux/Cart'
import {Favorite} from './redux/Favorite'
import {Detail} from './redux/Detail'
export const Routing=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/fav' element={<Favorite/>}/>
                <Route path='/det' element={<Detail/>}/>
            </Routes>
        </BrowserRouter>
    )
}
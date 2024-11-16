import React, { Component } from 'react'
import { ErrorBoundary } from './ErrorBoundary.component'
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


const routes = (
  <Routes>
  <Route path="/Home" element={<HomeScreen/>}></Route>
  <Route path="/shop" element={<ShopScreen/>}></Route>
  <Route path="/profile" element={<ProfileScreen/>}></Route>
</Routes>
)


export default class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <BrowserRouter>
           <NavBar/>
            <ErrorBoundary>
              {routes}
            </ErrorBoundary>
        </BrowserRouter>
      </ErrorBoundary>
    
    )
  }
}

function NavBar(){
  return (
    <>
    <h1>Welcome to react router!</h1>
    <p>
      <NavLink to = "/home">Home</NavLink>
      </p>

    <p>

      <NavLink to = "/profile">Profile</NavLink>
      </p>


    <p>

      <NavLink to = "/shop">Shop</NavLink>
      </p>



    </>

  );
  // return <div>Hello</div>
}

function HomeScreen(){
  return <h1>Home</h1>
}

function ShopScreen(){
  return <h1>Shop</h1>
}

function ProfileScreen(){
  throw new Error("oh no!")
  return <h1>Profile</h1>
}
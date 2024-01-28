import { Button } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { LOGOUT_SUCCESS } from '../../redux/actionTypes';
import toast, { Toaster } from 'react-hot-toast';


const Navbar = () => {  
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuth = useSelector(store => store.authReducer.isAuth)
    let links = [
        { to: "/about", title: "About" },
        { to: "/contact", title: "Contact Us" },
        { to: "/add-product", title: "Admin Page" },
        // { to: "/login", title: `${isAuth ? `Logout` : "Login"}` },
    ];
    const handleLogout = () => {
        if (isAuth) { 
            toast.success('Successfully Logged out!')
        } 
        Navigate("/login")
        dispatch({type: LOGOUT_SUCCESS, })
    }
    
    return (
        <DIV>
            <button style={{
                boxshadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
                backgroundColor: "#00D84A",
                color: "#fff",
                border: "none",
                padding: "0 30px",
                borderRadius: "5px",
                cursor: "pointer",
                hover: "black"
            }} onClick={() => { Navigate("/") }}> Home </button>
            {links?.map((el, index) => {
                return (
                    <NavLink key={index}
                        className={({ isActive }) => {
                            return isActive ? "activeLink" : "notActiveLink";
                        }}
                        to={el.to}
                    >
                        {" "}
                        {el.title}{" "}
                    </NavLink>
                );
            })}
            <Button variant='outlined'  sx={{
                fontWeight: 'bold',
                bgcolor: isAuth ? 'red' :"#2196f3",
                color: "white"
            }}
            onClick={handleLogout}
            >{isAuth ? "Logout" : "Login"}</Button>
            <Toaster />

        </DIV>
    )
}

export default Navbar

const DIV = styled.div`
    display: flex;
    justify-content: center;
    gap: 90px;
    background-color: black;
    padding:10px;
    height: 30px;
    .navlink{
        text-decoration: none;
            color: white;

    }
    .notActiveLink{
    text-decoration: none;
    color: wheat;
}

.activeLink{
    text-decoration: none;
   color: rgb(107, 227, 42);
}
`
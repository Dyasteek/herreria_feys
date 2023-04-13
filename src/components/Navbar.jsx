import React from 'react'
import styled from 'styled-components'

function Navbar () {
    return (
        <>
            <NavContainer>
                <h2>Herreria <span>FEYS</span></h2>
                <div>
                    <a href='/'>Inicio</a>
                    <a href='/'>Contactos</a>
                    <a href='/'>Trabajos</a>
                </div>
            </NavContainer>
        </>
    )
}

export default Navbar

const NavContainer = styled.nav`
    h2{
        color: white;
        font-weight;=: 400;
        span{
            color: orange;
            font-weight: bold;
        }
    }
    background-color: #333;
    padding: .4em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a{
        color white;
        text-decoration: none;
        margin-right: 1rem;
        font-weight: bold;
    }
`
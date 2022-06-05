import React, { useState } from "react";
import styled from 'styled-components'

const ListaNombres = () => {

    const [nombre, setNombre] = useState("");
    const [nombres, setNombres] = useState([]);

    const guardar = () => {
        setNombres([...nombres, nombre]);
        setNombre("");
    }

    return (
        <div>
            <Container>
            <Header>Ingresa un nombre: <p></p>
            <Input type="text" value= {nombre} onChange={(e) => {setNombre(e.target.value)}}></Input>
            <Button onClick={guardar}>Enviar</Button>
            <ul>
            {
                nombres.map((elemento, index) => {
                    return <li key={index}>{elemento}</li>
                })
            }
            </ul>
            </Header>
            </Container>
        </div>
    )
}

export const Container = styled.div`
       width: 100%;
       height: 100vh;
       display: flex;
       justify-content: center;
       align-items: center;
`

export const Input = styled.input`
    border-radius: 10px;
    margin: 10px;
    background-color: #def;
    width: 150px;
    padding: 5px;
    width: 250px;
    height: 40px;
`

const Header = styled.h1`
   color: Black;
   font-size: 2rem;
   font-familily: sans-serif;
   

&:hover {
    background-color: #33b8ff;
    color: Black;
    transition: 0.3s all ease;

}
`

const Button = styled.button`
background-color: #4CAF50; /* Green */
    border: 5px;
    margin: 10px;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
`

export default ListaNombres;

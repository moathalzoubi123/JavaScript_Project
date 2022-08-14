import React from "react"; 
import {useDrag } from "react-dnd";
import styled from "styled-components"

const Text = styled.p`
font-size: 1.5rem;
`

const ColourInPl = ({colour}) => {

    const [{isDragging}, drag] = useDrag(() => ({
        type : "word",
        item: {id : colour.id},
        collect : (monitor) => ({
            isDragging : !! monitor.isDragging(),
        })
  
    }))
    return (
      <div ref={drag}>
        <Text>{colour.pl}</Text>
      </div>
    );
} 






export default ColourInPl; 
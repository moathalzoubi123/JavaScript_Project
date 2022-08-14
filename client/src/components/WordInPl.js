import React from "react";
import { useDrag } from "react-dnd";
import styled from "styled-components";

const Text = styled.p`
  font-size: 1.5rem;
`;

const WordInPl = ({ word }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "word",
    item: { id: word.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag}>
      <Text>{word.pl} </Text>
    </div>
  );
};

export default WordInPl;

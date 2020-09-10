import styled from "styled-components";

export const Container = styled.div`
  padding: 0 1rem;
`;

export const CardContainer = styled.div`
  margin-top: 110px;
`;

export const Box = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(6, minmax(100px, 1fr));
`;

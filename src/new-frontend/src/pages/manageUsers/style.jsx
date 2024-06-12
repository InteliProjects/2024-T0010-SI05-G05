import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    margin: 0 auto
`;
import styled from "styled-components";

const Container = styled.section`
  max-width: 1280px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px 2%;
  border-bottom: 2px solid #ccc;
  margin: 0 auto;
  min-height: 100vh;
`;

const LineBox = styled.div`
  width: 100%;
  //background-color: red;
  position: relative;
  text-align: center;
  display: inline-block;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

export { Container, LineBox };

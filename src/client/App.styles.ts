import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  margin: auto;
  width: 700px;
  h1 {
    text-align: center;
  }
  .info-wrapper {
    display: flex;
    justify-content: space-between;
  }
  .restart-game {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    border: none;
    background-color: #fff;
    :hover{
      background-color: #EFEFEF;
      transition: 0.3s;
    }
}
  li {
    list-style: none;
    margin-bottom: 3px;
  }
`;

import styled from 'styled-components';

import { shade } from 'polished';



export const Title = styled.div`
  margin-top: 18px;
  img {
    width: 280px;
  }
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 800px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0px 0px 5px;
    color: #3a3a3b;

    &::placeholder {
      color: #808080;
      font-size: 14px;
    }
  }

  button {
    width: 200px;
    height: 70px;
    border: 0;
    border-radius: 0px 5px 5px 0px;
    background: #800000;
    color: #FFF;
    font-weight: 700;

    &:hover {
      background: ${shade(0.2, '#800000')}
    }
  }

`;

export const Repository = styled.div`
  margin-top: 80px;
  max-width: 800px;

  a {
    width: 100%;
    background: #fff;
    border-radius: 5px;
    padding: 20px;
    display: block;
    text-decoration: none;
    transition: transform 0.2s;

    display: flex;
    align-items: center;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 280px;
      height: 280px;
      border-radius: 5px;
    }

    div {
      margin-left: 20px;
      text-align: justify;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #696969;
        margin-top: 8px;
      }
    }

  }
`;

export const Rodape = styled.div`
  p {
    margin-top: 50px;
    text-align: center;
    color: #696969;
    font-weight: 700;
    font-size: 12px;
  }
`;

import styled from "styled-components";

export const FormContent = styled.div`
  display: flex;

  justify-content: center;

  form {
    display: grid;
    width: 50%;

    h2 {
      margin-bottom: 20px;
    }

    label {
      margin-top: 15px;
      margin-bottom: 5px;
      font-weight: lighter;
      font-size: 14px;

      span {
        margin-left: 10px;
      }
    }

    input {
      padding: 10px;
      border: 1px solid #d31c5b;
      border-radius: 7px;
    }
    .inputSubmit {
      background-color: #d31c5b;
      padding: 10px 20px;
      font-size: 12px;
      border: none;
      border-bottom: 3px solid #9b0032;
      color: #fff;

      width: 50%;
      margin-left: 25%;
      margin-top: 10px;

      :hover {
        background-color: #9b0032;
        border-bottom: 3px solid #d31c5b;
      }
    }
  }
`;

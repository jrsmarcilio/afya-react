import styled from "styled-components";

export const NavBarContent = styled.nav`
  background-color: #d31c5b;
  display: flex;
  height: 90px;
  justify-content: space-between;
  padding: 0 20px;

  box-shadow: 0 1px 2px #ddd;
  backface-visibility: hidden;

  img {
    width: 180px;
    height: auto;
    margin-top: 8px;
    cursor: pointer;
  }

  .links-content {
    width: 25%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    :first-child {
      margin-left: -4px;
    }

    a {
      color: #fff;
      font-size: 1rem;
      padding: 6px;
      font-weight: bold;
      text-transform: uppercase;
      position: relative;

      :hover {
        color: rgba(0, 0,0,0.5);
      }

      :hover:after {
        content: "";
        width: 30px;
        height: 4px;
        border-radius: 10px;
        background-color: #8E9794;
        position: absolute;
        top: 30px;
        left: 0;
        transform: translateX(0);
        transition: 0.5s;
      }
    }
  }
`;

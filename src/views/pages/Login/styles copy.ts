import styled from "styled-components";

export const SectionComponent = styled.div`
  background-color: #8e9794;
  height: 80vh;
  min-height: 100%;
  margin-left: 50%;
  position:  relative;
 

  .formulario {
    position: absolute;
    
    h2 {
      font-size: 21px;
      font-weight: 900;
      line-height: 1.1;
      text-align: left;
      color: #63dc3e;
    }

    hr {
    background-color: #63dc3e;
    height: 3px;
    width: 330px;
    margin: 0 auto;
  }

  }
  .imgResponsive {
    /* @media (min-width: 992px) { */
    /* float: left; */
    margin-left: 25%;
    width: 50%;
    margin-top: 30px;
    position: absolute;
    /* } */
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const SectionLeft = styled.div`
  background-color: #f5f5f5;
  min-height: 100%;
  position: fixed;

  .titulo {
    padding: 70px 70px;
    font-size: 30px;

    p {
      font-size: 1.1rem;
      padding-top: 20px;
      width: 450px;
    }

    h2 {
      font-weight: lighter;
    }

    span {
      font-weight: bold;
    }
  }

  @media (min-width: 992px) {
    width: 50%;
  }
`;

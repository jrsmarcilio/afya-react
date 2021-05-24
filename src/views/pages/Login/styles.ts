import styled from "styled-components";

export const SectionComponent = styled.div`
  background-color: #8e9794;
  height: 80vh;
  width: auto;

  display: flex;
`;

export const SectionLeft = styled.div`
  flex-wrap: wrap;
  background-color: #f5f5f5;
  width: 150vh;

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
`;

export const SectionRight = styled.div`
  flex-wrap: wrap;
  background-color: #E1E2E1;
  width: 150vh;

  img {
    margin-left: 25%;
    width: 50%;
  }
`;

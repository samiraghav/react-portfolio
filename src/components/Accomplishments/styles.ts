import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  .accomplishment-list {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    .accomplishment-item {
      padding: 2rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      color: #fff;
      transition: 0.3s;
      position: relative;

      &:hover {
        transform: translateY(-5px);
        background-color: rgba(85, 77, 66, 0.82);
      }

      header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 1.5rem;

        h3 {
          font-size: 1.8rem;
          margin-right: 1rem;
          width: 80%;
        }

        p {
          font-size: 1.6rem;
          opacity: 0.8;
        }

        .live-link {
          color: #d6c1c1;
        }

        .live-link:hover {
          color: rgb(126, 201, 34);
          text-decoration: underline;
        }
      }

      .timestamp {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 1rem;
        font-size: 1.6rem;

        p {
          color: #00bfff;
          font-weight: bold;
        }

        div {
          margin-left: 1rem;
          font-size: 1.8rem;
        }
      }

      ul {
        margin-top: 1rem;
        padding-left: 1.5rem;
        font-size: 1.6rem;
        line-height: 1.6;
        color: #ddd;

        li {
          margin-bottom: 0.8rem;
        }
      }
    }
  }
`;

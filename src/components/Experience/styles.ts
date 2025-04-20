import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  .experience-list {
    display: flex;
    flex-direction: column;
    gap: 3rem;

      .experience-item {
        padding: 2rem;
        background-color: #2b2b2b;
        border-radius: 1.2rem;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        color: #fff;
        transition: 0.3s;
        position: relative;
        &:hover{
          transform: translateY(-5px);
          background-color:rgba(85, 77, 66, 0.82);
        }

        a {
          color: #fff;
          color: var(--green);
          padding: 0.2rem 0.5rem;
          border-radius: 0.2rem;
          text-decoration: none;
          transition: background-color 0.3s;
          cursor: pointer;
        }

        header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 1.5rem;

          h3 {
            font-size: 2.2rem;
            margin-right: 1rem;
          }

          p {
            font-size: 2rem;
            opacity: 0.8;
          }
        }

        p {
          font-size: 2rem;
          opacity: 0.8;
          margin-bottom: 1rem;
        }

        ul {
          list-style: none;
          // padding-left: 2rem;

          li {
            font-size: 2rem;
            margin-bottom: 0.5rem;
            position: relative;
            // padding-left: 1.5rem;

            &::before {
              content: "";
              position: absolute;
              left: 0;
              top: 0.8rem;
              width: 0.6rem;
              height: 0.6rem;
              background-color: var(--green);
              border-radius: 50%;
              transform: translateX(-100%);
              opacity: 0;
              transition: 0.3s;
            }
          }

          li:hover::before {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .timestamp {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 1rem;
          font-size: 1.6rem;
        }
    
        .timestamp p {
          color: #00BFFF;
          font-weight: bold;
        }
    
        .timestamp div {
          margin-left: 1rem;
          font-size: 2.2rem;
        }

        .project-links {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 2rem;

          a > img {
            width: 5.0rem;
          }
        }
      }
    }
`;

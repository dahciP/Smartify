/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0;
  margin: auto;
  padding-top: 70px;
  padding-bottom: 50px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 15px;
  }

  & > .app-link {
    display: flex;

    & > img {
      width: 150px;
      margin: 20px;
      cursor: pointer;
    }

    & > img:last-child {
      height: 100px;
      width: 70px;
    }
  }

  & > div > h3 {
    font-size: 22px;
    margin-bottom: 10px;
  }

  & > div > p {
    font-size: 14px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Cont = styled.div`
  background-color: #f5f5f5;
`;

const Footer = () => {
  return (
    <Cont>
      <Grid>
        <div>
          <h3>Top Online Courses</h3>
          <p>React</p>
          <p>Web Development</p>
          <p>App Development</p>
        </div>
        <div>
          <h3>Top Online Courses</h3>
          <p>React</p>
          <p>Web Development</p>
          <p>App Development</p>
        </div>
        <div>
          <h3>Top Online Courses</h3>
          <p>React</p>
          <p>Web Development</p>
          <p>App Development</p>
        </div>
        <div>
          <h3>Top Online Courses</h3>
          <p>React</p>
          <p>Web Development</p>
          <p>App Development</p>
        </div>

        <div>
          <h3>Top Online Courses</h3>
          <p>React</p>
          <p>Web Development</p>
          <p>App Development</p>
        </div>
        <div>
          <h3>Top Online Courses</h3>
          <p>React</p>
          <p>Web Development</p>
          <p>App Development</p>
        </div>
        <div>
          <h3>Build By</h3>
          <p>@Chinmay Pichad</p>
          <p>@Roshan Sawant</p>
        </div>
        <div>
          <h3>Top Online Courses</h3>
          <p>React</p>
          <p>Web Development</p>
          <p>App Development</p>
        </div>
        <div>
          <h4> Build by - @Chinmay Pichad @Roshan Sawant</h4>
        </div>
      </Grid>

    </Cont>
  );
};

export default Footer;

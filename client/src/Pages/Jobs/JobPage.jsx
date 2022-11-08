/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */

import React from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import styles from './categoryjobs.module.css';
import 'pure-react-carousel/dist/react-carousel.es.css';
import useWindowDimensions from '../../CustomHooks/useWindowDimensions';
import Jobs from './Jobs';
import Footer from '../../Shared-Components/Footer/Footer';
import { getJobs } from '../../CustomHooks/JobsApi';
import Navbar from '../../Shared-Components/Navbar';
import useDocumentTitle from '../../CustomHooks/useDocumentTitle';

const Banner = styled.div`
  width: 100%;
  background-image: url('https://i.pinimg.com/originals/2f/3b/68/2f3b68716f952953f8222c4df316b709.jpg');
  height: 200px;
  > h1 {
    width: 80%;
    color: #fff;
    text-transform: capitalize;
    margin: auto;
    padding: 5%;
  }
  .link {
    cursor: pointer;
    color: white;
    font-weight: 'bold';
    text-transform: capitalize;
  }
`;

const CategoryJobsPage = () => {
  const [jobs, setjobs] = React.useState([]);
  const { category } = useParams();
  const history = useHistory();

  useDocumentTitle(`Smartify | Browse`);

  console.log(jobs);
  React.useEffect(() => {
    getJobs(category).then((res) => {
      setjobs(res);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Banner>
        <h1>{category} </h1>
      </Banner>
      {jobs.length > 0 ? (
        <div>
          <div className={styles.empty}>
            <h2>Most Popular {category} Jobs</h2>
          </div>
          <section className={styles.main}>
            {jobs.length > 0 &&
              jobs.map((job) => {
                return (
                  <Link
                    to={`/browse/${job.category}/${job.job_name}`}
                    key={job._id}
                    className={styles.card}
                  >
                    <Jobs job={job} />
                    <div className={styles.cardInfo}>
                      <h4>{job.author}</h4>
                    </div>
                  </Link>
                );
              })}
          </section>
        </div>
      ) : (
        <div className={styles.empty}>
          <h2>No Jobs Found For This Category</h2>
          <Link style={{ fontSize: 20 }} to="/">
            Go to Home Page
          </Link>
        </div>
      )}

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CategoryJobsPage;

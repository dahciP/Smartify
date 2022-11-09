/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import JobAbout from '../../Shared-Components/JobAbout/JobAbout';
import JobBanner from '../../Shared-Components/JobBanner/JobBanner';
import JobNav from '../../Shared-Components/JobBanner/JobNav';
import Navbar from '../../Shared-Components/Navbar';
import { fetchCourse } from '../../Redux/courseDetails/actions';
import useDocumentTitle from '../../CustomHooks/useDocumentTitle';
import Spinner from '../../Shared-Components/Spinner';

const JobDetailsPage = () => {
  const { category, courseName: jobName } = useParams();

  const dispatch = useDispatch();
  const job = useSelector((state) => state.jobDetails.job);
  const isLoading = useSelector((state) => state.jobDetails.isLoading);

  useDocumentTitle(`Smartify | ${job.course_name}`);

  React.useEffect(() => {
    dispatch(fetchCourse(category, jobName));
  }, [category, jobName]);

  if (isLoading) {
    return <Spinner />;
  }

  // eslint-disable-next-line no-unreachable
  return (
    <div>
      <Navbar />
      <JobBanner job={job} />
      <JobNav />
      <JobAbout jobDetails={job.course_details} />
      <hr />
    </div>
  );
};

export default JobDetailsPage;

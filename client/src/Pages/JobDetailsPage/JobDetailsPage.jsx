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
  const { category, courseName } = useParams();

  const dispatch = useDispatch();
  const course = useSelector((state) => state.courseDetails.course);
  const isLoading = useSelector((state) => state.courseDetails.isLoading);

  useDocumentTitle(`Smartify | ${course.course_name}`);

  React.useEffect(() => {
    dispatch(fetchCourse(category, courseName));
  }, [category, courseName]);

  if (isLoading) {
    return <Spinner />;
  }

  // eslint-disable-next-line no-unreachable
  return (
    <div>
      <Navbar />
      <JobBanner course={course} />
      <JobNav />
      <JobAbout courseDetails={course.course_details} />
      <hr />
    </div>
  );
};

export default JobDetailsPage;

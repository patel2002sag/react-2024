// const jobs = require('../jobs.json');
import { useState, useEffect } from 'react';
import JobListing from '../Components/JobListing';
import Spinner from '../Components/Spinner';

const JobsListing = ({ isHome = false }) => {
  const [jobsArray, setJobsArray] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const jobs = async () => {
      try {
        const response = await fetch('/api/jobs');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json().then((data) => {
          setJobsArray(data);
        });
      } catch (error) {
        console.error('Error fetching JSON:', error);
        return [];
      } finally {
        setLoading(false);
      }
    };
    jobs();
  }, []);

  // only select recent jobs
  const recentJobs = isHome ? jobsArray.slice(0, 3) : jobsArray;

  return (
    <>
      {/* <!-- Browse Jobs --> */}
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? 'Recent Jobs' : 'Browse Jobs'}
          </h2>

          {/* <!-- Job Listings --> */}
          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentJobs.map((job) => {
                return <JobListing key={job.id} job={job} />;
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default JobsListing;

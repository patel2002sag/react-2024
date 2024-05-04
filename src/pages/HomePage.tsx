import Hero from '../Components/Hero';
import HomeCards from '../Components/HomeCards';
import JobsListings from '../Components/JobsListings';
import ViewAllJobs from '../Components/ViewAllJobs';

const HomePage = () => {
  return (
    <>
      <Hero title="Become a react dev" subtitle="Find your dream job!" />
      <HomeCards />
      <JobsListings isHome={true} />'
      <ViewAllJobs />
    </>
  );
};

export default HomePage;

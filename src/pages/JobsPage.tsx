import JobsListings from '../Components/JobsListings';

const JobsPage = () => {
  return (
    <>
      <section className="bg-blue-50 px-4 py-6">
        <JobsListings isHome={false} />
      </section>
    </>
  );
};

export default JobsPage;

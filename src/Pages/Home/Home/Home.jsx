
import Banner from './Banner';
import BlogSection from './BlogSection';
import CurrentJob from './CurrentJob';
import RecentJob from './RecentJob';


const Home = () => {
  return (
    <div>
      <Banner />
      <CurrentJob />
      <RecentJob />
      <BlogSection />

    </div>
  );
};

export default Home;
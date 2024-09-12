import React from 'react';
import TopNav from './TopNav';
import TopSection from './TopSection';
import Footer from './Footer';
import SpaceAdCard from './SpaceAdCard';

const Home = (): React.ReactElement => {
  return (
    <>
      <TopNav />
      <TopSection />
      <div style={{ padding: 100 }}>
        <SpaceAdCard />
      </div>

      <Footer />
    </>
  );
};

export default Home;
import React from 'react';
import TopNav from './TopNav';
import TopSection from './TopSection';
import Footer from './Footer';
import SpaceAdCard from './SpaceAdCard';
import SpecialityItem from './SpecialityItem';

const Home = (): React.ReactElement => {
  return (
    <>
      <TopNav />
      <TopSection />
      <div style={{ padding: 100 }}>
        {/* <SpaceAdCard /> */}

      </div>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <SpecialityItem displayText='Community Events' />
          </div>
          <div style={{ flex: 1 }}>
            <SpecialityItem displayText='Gym Facilities' displayImage='Dumbell' />
          </div>
          <div style={{ flex: 1 }}>
            <SpecialityItem displayText='High-Speed WiFi' displayImage='Wifi' />
          </div>
          <div style={{ flex: 1 }}>
            <SpecialityItem displayText='Cafe & Tea Bar' />
          </div>

        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <SpecialityItem displayText='Affordable' />
          </div>
          <div style={{ flex: 1 }}>
            <SpecialityItem displayText='Comfort Lounges' />
          </div>
          <div style={{ flex: 1 }}>
            <SpecialityItem displayText='Quick Booking' />
          </div>
          <div style={{ flex: 1 }}>
            <SpecialityItem displayText='Sports Area' />
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
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
      <section style={{ maxWidth: 1200, margin: '0 auto' }}>
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
      </section>
      <section style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className='display_section_text'>Our Space Overview</div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '45px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <div style={{ flex: '0 0 370px' }}>
            <SpaceAdCard />
          </div>
          <div style={{ flex: '0 0 370px' }}>
            <SpaceAdCard />
          </div>
          <div style={{ flex: '0 0 370px' }}>
            <SpaceAdCard />
          </div>
          <div style={{ flex: '0 0 370px' }}>
            <SpaceAdCard />
          </div>
          <div style={{ flex: '0 0 370px' }}>
            <SpaceAdCard />
          </div>
          <div style={{ flex: '0 0 370px' }}>
            <SpaceAdCard />
          </div>
        </div>
      </section>

      <footer style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Footer />
      </footer>
      <div className='copyright_container'>
        © Copyright 2023. Bhive Private Limited
      </div>
    </>
  );
};

export default Home;
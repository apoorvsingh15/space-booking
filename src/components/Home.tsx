import React, { useContext } from 'react';
import TopNav from './TopNav';
import TopSection from './TopSection';
import Footer from './Footer';
import SpaceAdCard from './SpaceAdCard';
import SpecialityItem from './SpecialityItem';
import { DataContext } from '../context/dataContext';


interface IItemProps {
  name: string,
  day_pass_price: number,
  day_pass_discounts_percentage: { value: number }[];
}

const Home = (): React.ReactElement => {
  const { dataRes } = useContext(DataContext);
  console.log(dataRes);
  return (
    <>
      <TopNav />
      <TopSection />
      <section style={{ maxWidth: 1200, margin: '0 auto', marginBottom: 120 }}>
        <div className='display_section_text'>Why Choose Us?</div>
        <div style={{
          display: 'flex', alignItems: 'center', flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <div style={{ flex: '0 0 300px' }}>
            <SpecialityItem displayText='Community Events' />
          </div>
          <div style={{ flex: '0 0 300px' }}>
            <SpecialityItem displayText='Gym Facilities' displayImage='Dumbell' />
          </div>
          <div style={{ flex: '0 0 300px' }}>
            <SpecialityItem displayText='High-Speed WiFi' displayImage='Wifi' />
          </div>
          <div style={{ flex: '0 0 300px' }}>
            <SpecialityItem displayText='Cafe & Tea Bar' />
          </div>



          <div style={{ flex: '0 0 300px' }}>
            <SpecialityItem displayText='Affordable' />
          </div>
          <div style={{ flex: '0 0 300px' }}>
            <SpecialityItem displayText='Comfort Lounges' />
          </div>
          <div style={{ flex: '0 0 300px' }}>
            <SpecialityItem displayText='Quick Booking' />
          </div>
          <div style={{ flex: '0 0 300px' }}>
            <SpecialityItem displayText='Sports Area' />
          </div>
        </div>

      </section>
      <section style={{ maxWidth: 1200, margin: '0 auto', marginBottom: 110 }}>
        <div className='display_section_text'>Our Space Overview</div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '45px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {dataRes.length > 0 && dataRes?.map((item: IItemProps, index: number) =>
          (<div key={`${item.name}-${index}`} style={{ flex: '0 0 370px' }}>
            <SpaceAdCard
              title={item.name}
              dayPassPrice={item.day_pass_price}
              discountPercentage={item.day_pass_discounts_percentage[10].value}
            />
          </div>))}
          {/* <div style={{ flex: '0 0 370px' }}>
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
          </div> */}
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
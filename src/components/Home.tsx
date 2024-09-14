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
  images: string[]
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
          <div className='speciality_item_flex' >
            <SpecialityItem displayText='Community Events' displayImage='Events' />
          </div>
          <div className='speciality_item_flex'>
            <SpecialityItem displayText='Gym Facilities' displayImage='Dumbell' />
          </div>
          <div className='speciality_item_flex'>
            <SpecialityItem displayText='High-Speed WiFi' displayImage='Wifi' />
          </div>
          <div className='speciality_item_flex'>
            <SpecialityItem displayText='Cafe & Tea Bar' displayImage='Cafe' />
          </div>



          <div className='speciality_item_flex'>
            <SpecialityItem displayText='Affordable' displayImage='Affordable' />
          </div>
          <div className='speciality_item_flex'>
            <SpecialityItem displayText='Comfort Lounges' displayImage='Comfort' />
          </div>
          <div className='speciality_item_flex'>
            <SpecialityItem displayText='Quick Booking' displayImage='Quick' />
          </div>
          <div className='speciality_item_flex'>
            <SpecialityItem displayText='Sports Area' displayImage='Sports' />
          </div>
        </div>

      </section>
      <section style={{ maxWidth: 1200, margin: '0 auto', marginBottom: 110 }}>
        <div className='display_section_text'>Our Space Overview</div>
        <div className='space_ad_car_wrap'>
          {dataRes.length > 0 && dataRes?.map((item: IItemProps, index: number) =>
          (<div key={`${item.name}-${index}`} style={{ flex: '0 0 370px' }}>
            <SpaceAdCard
              title={item.name}
              dayPassPrice={item.day_pass_price}
              discountPercentage={item.day_pass_discounts_percentage[10].value}
              cardImage={item.images[0]}
            />
          </div>))}
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
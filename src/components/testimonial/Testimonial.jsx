import React from 'react'
import './Testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
     
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>

        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="avatar1" />
          </div>           
            <h5 className='client__name'>Ernest Achiever</h5>
              <small className='client__review'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Minima explicabo optio, itaque consequatur error quae autem 
                amet repellendus ab doloremque esse architecto sequi ratione possimus? 
                Perferendis architecto vel quod iure?
              </small>              
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR2} alt="avatar2" />
          </div>           
            <h5 className='client__name'>Marques Brown</h5>
              <small className='client__review'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Minima explicabo optio, itaque consequatur error quae autem 
                amet repellendus ab doloremque esse architecto sequi ratione possimus? 
                Perferendis architecto vel quod iure?
              </small>              
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR3} alt="avatar3" />
          </div>           
            <h5 className='client__name'>Felix Johnson</h5>
              <small className='client__review'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Minima explicabo optio, itaque consequatur error quae autem 
                amet repellendus ab doloremque esse architecto sequi ratione possimus? 
                Perferendis architecto vel quod iure?
              </small>              
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR4} alt="avatar4" />
          </div>           
            <h5 className='client__name'>Jeannette Kidd</h5>
              <small className='client__review'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Minima explicabo optio, itaque consequatur error quae autem 
                amet repellendus ab doloremque esse architecto sequi ratione possimus? 
                Perferendis architecto vel quod iure?
              </small>              
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonial
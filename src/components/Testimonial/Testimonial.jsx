
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import {HiStar} from 'react-icons/hi';

import patientAvatar from '../../assets/images/patient-avatar.png';


const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
        <Swiper
            pagination={{
                type: 'progressbar',
            }}
            navigation={true} 
            modules={[Pagination, Navigation]}
            className="mySwiper"
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
                640:{
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                768:{
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                1024:{
                    slidesPerView: 3,
                    spaceBetween: 30
                },
            }}
        >
            <SwiperSlide>
                <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img
                            src={patientAvatar}
                            alt="patientAvatar" 
                        />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Robin</h4>
                            <div className='flex items-center gap-[2px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                            </div>
                        </div>
                    </div>

                    <p className='text-[16px] lending-7 mt-4 text-textColor font-[400]'>
                        I have taken medical services from them. They treat so well and they are providing the best medical services
                    </p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img
                            src={patientAvatar}
                            alt="patientAvatar" 
                        />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Robin</h4>
                            <div className='flex items-center gap-[2px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                            </div>
                        </div>
                    </div>

                    <p className='text-[16px] lending-7 mt-4 text-textColor font-[400]'>
                        I have taken medical services from them. They treat so well and they are providing the best medical services
                    </p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img
                            src={patientAvatar}
                            alt="patientAvatar" 
                        />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Robin</h4>
                            <div className='flex items-center gap-[2px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                            </div>
                        </div>
                    </div>

                    <p className='text-[16px] lending-7 mt-4 text-textColor font-[400]'>
                        I have taken medical services from them. They treat so well and they are providing the best medical services
                    </p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img
                            src={patientAvatar}
                            alt="patientAvatar" 
                        />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Robin</h4>
                            <div className='flex items-center gap-[2px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                            </div>
                        </div>
                    </div>

                    <p className='text-[16px] lending-7 mt-4 text-textColor font-[400]'>
                        I have taken medical services from them. They treat so well and they are providing the best medical services
                    </p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img
                            src={patientAvatar}
                            alt="patientAvatar" 
                        />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Robin</h4>
                            <div className='flex items-center gap-[2px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                            </div>
                        </div>
                    </div>

                    <p className='text-[16px] lending-7 mt-4 text-textColor font-[400]'>
                        I have taken medical services from them. They treat so well and they are providing the best medical services
                    </p>
                </div>
            </SwiperSlide>


        </Swiper>
    </div>
  )
};

export default Testimonial;
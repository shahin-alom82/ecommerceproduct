
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

const Category = () => {
      const [product, setProduct] = useState([])
      useEffect(() => {
            fetch("https://shoppingapi.vercel.app/shahin")
                  .then(res => res.json())
                  .then(data => setProduct(data))
                  .catch((error) => {
                        console.error(error);
                  });
      }, [])
      return (
            <Container className={"hidden lg:block"}>
                  <section className=''>
                        <h1 className='uppercase lg:text-2xl text-xl text-gray-600 py-10'>Product By Category</h1>
                        <Swiper
                              slidesPerView={6}
                              spaceBetween={15}
                              centeredSlides={true}
                              modules={[Pagination]}
                              className="mySwiper px-6 cursor-pointer"
                        >
                              {
                                    product.map((item) => (
                                          <SwiperSlide className='border-b-2 border-t border-l border-r border-gray-300'>
                                                <Link to={`/details/${item?._id}`}>
                                                      <div key={item._id}>
                                                            <img className='hidden lg:block lg:h-[250px] lg:w-60 p-2 ' src={item?.image} alt="" />
                                                      </div>
                                                </Link>
                                          </SwiperSlide>
                                    ))
                              }
                        </Swiper>
                  </section>
            </Container>
      );
};

export default Category;
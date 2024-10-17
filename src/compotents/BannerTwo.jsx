import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Container from './Container';
import { banner3, banner4, bannerone, bannertwo, sidebannerone, sidebannertwo } from '../assets';

const BannerTwo = () => {
      return (
            <div className='py-4'>
                  <Container className={"flex flex-col lg:flex-row lg:gap-6 gap-2"}>
                        <div className="w-full lg:w-5/6">
                              <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={false}>
                                    <div>
                                          <img className='lg:h-[375px] rounded' src={bannerone} alt="Slide" />
                                    </div>
                                    <div>
                                          <img className='lg:h-[375px] rounded' src={bannertwo} alt="Slide" />
                                    </div>
                                    <div>
                                          <img className='lg:h-[375px] rounded' src={banner3} alt="Slide" />
                                    </div>
                                    <div>
                                          <img className='lg:h-[375px] rounded' src={banner4} alt="Slide" />
                                    </div>
                              </Carousel>
                        </div>
                        <div className="lg:flex gap-6 lg:flex-col hidden lg:block">
                              <img className='h-44' src={sidebannerone} alt="Slide" />
                              <img className='h-44' src={sidebannertwo} alt="Slide" />
                        </div>
                  </Container>
            </div>
      );
};

export default BannerTwo;

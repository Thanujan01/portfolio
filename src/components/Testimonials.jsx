import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useState } from "react";

const Testimonials = () => {
  const { Testimonials } = content;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-14">
      <div className="md:container px-3">
        <h2 className="title" data-aos="fade-down">
          {Testimonials.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Testimonials.subtitle}
        </h4>
        <br />
        
        {/* Desktop-optimized vertical swiper */}
        <div className="hidden md:block">
          <Swiper
            direction="vertical"
            pagination={{ clickable: true, dynamicBullets: true }}
            data-aos="fade-up"
            loop={false}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={false}
            onSlideChange={(e) => setActiveIndex(e.realIndex)}
            modules={[Pagination]}
            className="h-[40rem] max-w-3xl mx-auto"
          >
            {Testimonials.testimonials_content.map((item, i) => (
              <SwiperSlide key={i}>
                <div
                  className="bg-white border-2 p-6 rounded-xl flex flex-col gap-6 border-slate-200 w-full"
                >
                  {/* Reformatted gallery: large hero then three thumbnails */}
                  <div className="flex flex-col gap-5 items-center">
                    <img
                      src={item.images[0]}
                      alt="Workshop hero"
                      className="w-full h-60 object-cover rounded-xl border"
                    />
                    <div className="grid grid-cols-3 gap-3 w-full">
                      {item.images.slice(1).map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`Workshop thumb ${idx}`}
                          className="w-full h-28 object-cover rounded-lg border"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-base leading-relaxed">{item.description}</p>
                  <div className="flex justify-end">
                    <button
                      onClick={() => window.open(item.readMoreLink, "_blank")}
                      className="btn bg-dark_primary text-white"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile-optimized horizontal swiper */}
        <div className="md:hidden">
          <Swiper
            direction="horizontal"
            pagination={{ clickable: true, dynamicBullets: true }}
            data-aos="fade-up"
            loop={false}
            spaceBetween={16}
            slidesPerView={1}
            centeredSlides={false}
            onSlideChange={(e) => setActiveIndex(e.realIndex)}
            modules={[Pagination]}
            className="h-[34rem]"
          >
            {Testimonials.testimonials_content.map((item, i) => (
              <SwiperSlide key={i} className="px-2">
                <div
                  className="bg-white border-2 p-4 h-full rounded-xl flex flex-col gap-4 border-slate-200"
                >
                  {/* Reformatted gallery: large hero then three thumbnails */}
                  <div className="flex flex-col gap-2 items-center">
                    <img
                      src={item.images[0]}
                      alt="Workshop hero"
                      className="w-full h-36 object-cover rounded-lg border"
                    />
                    <div className="flex gap-2 justify-center">
                      {item.images.slice(1).map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`Workshop thumb ${idx}`}
                          className="w-24 h-16 object-cover rounded-md border"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm">{item.description}</p>
                  <button
                    onClick={() => window.open(item.readMoreLink, "_blank")}
                    className="btn bg-dark_primary text-white self-end text-sm py-1 px-3"
                  >
                    Read More
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 lg:min-h-screen flex flex-col lg:justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <img
            src={Projects.image}
            alt="Projects Banner"
            data-aos="fade-right"
            className="hidden lg:block max-w-[40vw] min-w-[22rem]"
          />
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
          >
            {Projects.project_content.map((project, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-3 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img src={project.image} alt={project.title} />
                <div className="flex flex-col gap-2 mt-2">
                  <h5 className="font-bold font-Poppins">{project.title}</h5>
                  <p className="text-sm text-gray-600">{project.desc}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#838383' }}
                    className="font-bold self-end"
                  >
                    READ MORE
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { content } from "../Content";

const Services = () => {
  const { services } = content;
  return (
    <section id="services">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {services.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {services.subtitle}
        </h4>
        <br />
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 place-items-stretch" data-aos="fade-up">
          {services.service_content.map((content, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 200}
              className="duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 hover:shadow-lg hover:-translate-y-1"
            >
              <img src={content.logo} alt={content.title} className="mx-auto h-16 w-16 object-contain" />
              <h6 className="my-4 text-lg font-semibold">{content.title}</h6>
              <p className="leading-7 text-sm text-gray-600">{content.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

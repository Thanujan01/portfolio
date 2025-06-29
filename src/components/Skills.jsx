// import content
import { createElement, useState } from "react";
import { content } from "../Content";
// import modal package
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};
Modal.setAppElement("#root");

const Skills = () => {
  const { skills } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className="min-h-fit bg-bg_light_primary" id="skills">
      {/* modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex items-center gap-2">
          <img className="h-10" src={selectSkill?.logo} alt={selectSkill?.name} />
          <h6 className="text-xl font-bold">{selectSkill?.name}</h6>
        </div>
        <p className="mt-2 text-sm text-gray-600">{selectSkill?.para}</p>
        <br />
        {selectSkill?.details && (
          <ul className="list-disc px-4 font-Poppins sm:text-sm text-xs !leading-7">
            {selectSkill.details.map((detail, index) => (
              <li key={index} className="mb-2">{detail}</li>
            ))}
          </ul>
        )}
        <br />
        <div className="flex justify-end">
          <button 
            onClick={closeModal} 
            className="btn bg-blue-500 hover:bg-blue-600 text-white"
          >
            Close
          </button>
        </div>
      </Modal>

      {/* content */}
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {skills.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {skills.subtitle}
        </h4>
        <br />
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 place-items-center">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 400}
              className="duration-300 cursor-pointer border-2 border-slate-200 rounded-md text-center bg-white p-5 w-full max-w-xs hover:shadow-lg hover:border-blue-400"
              onClick={() => {
                setSelectSkill(skill);
                openModal();
              }}
            >
              <div className="flex flex-col items-center gap-3">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-12 h-12 object-contain group-hover:scale-110 duration-200"
                />
                <h6 className="font-bold mt-1">{skill.name}</h6>
                <p className="italic text-sm text-gray-600">{skill.para}</p>
                <div className="text-xl text-blue-500 mt-2">
                  {createElement(skills.icon)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
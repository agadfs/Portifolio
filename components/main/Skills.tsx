import {

  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-10 py-20"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText />
      <div className="text-white text-2xl">Languages</div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-2 items-center">
      {/* F = FRONT END , B = BACK END, L = LINGUAGEM */}
        {Skill_data.filter(image => image.Tipo === 'L' ).map((image, index) => (

          <div className="border px-2 py-2 h-40 w-24  " key={index} >
            <div className=' text-center text-white' >Level: {image.Level}
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}

              />
              <div className='text-center text-white ' >{image.skill_name} </div>
            </div>

          </div>
        ))}
      </div>
      <div className="text-white text-2xl">Front-End</div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-2 items-center">
      {/* F = FRONT END , B = BACK END, L = LINGUAGEM */}
        {Skill_data.filter(image => image.Tipo === 'F' ).map((image, index) => (

          <div className="border px-2 py-2 h-40 w-24  " key={index} >
            <div className=' text-center text-white' >Level: {image.Level}
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}

              />
              <div className='text-center text-white ' >{image.skill_name} </div>
            </div>

          </div>
        ))}
      </div>
      <div className="text-white text-2xl">Back-End</div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-2 items-center">
      {/* F = FRONT END , B = BACK END, L = LINGUAGEM */}
        {Skill_data.filter(image => image.Tipo === 'B' ).map((image, index) => (

          <div className="border px-2 py-2 h-40 w-24  " key={index} >
            <div className=' text-center text-white' >Level: {image.Level}
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}

              />
              <div className='text-center text-white ' >{image.skill_name} </div>
            </div>

          </div>
        ))}
      </div>
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
         {/*  <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
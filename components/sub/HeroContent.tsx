"use client";

import React, { use, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

import Image from "next/image";






const morphTextData = [
  {
    text: "WELCOME",
    id: 0,
  },
  {
    text: "TO",
    id: 1,
  },
  {
    text: "MY",
    id: 2,
  },
  {
    text: "PORTIFOLIO",
    id: 3,
  },

]


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";




const HeroContent = () => {


  const [morphText, setMorphText] = useState(morphTextData);

  let [morphTextShowId, setMorphTextShowId] = useState(0);




  useEffect(() => {
    const interval = setInterval(() => {


      if (morphTextShowId < 3) {
        setMorphTextShowId(morphTextShowId += 1);

      }
      else {
        setMorphTextShowId(morphTextShowId -= 3);

      }



    }, 1000);

    return () => clearInterval(interval);

  }, []);

  useEffect(() => {
    let documentId = document.getElementById(`EffectText${morphTextShowId}`);
    let iterations = 0;

    const interval = setInterval(() => {
      const newDocumentId = documentId?.innerText.split("").map(letter =>

        letters[Math.floor(Math.random() * documentId!.innerText.length)]).join("");

      if (iterations >= 10) {

        clearInterval(interval);
        iterations = 0;
        documentId!.innerText = morphText[morphTextShowId].text;
      } else {

        iterations += 1;
        documentId!.innerText = newDocumentId!;
      }

    }, 30);


  }, [morphTextShowId])




  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center w-full z-[20] toMobileColumnHero "
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start max-[600px]:text-center min-[600px]:ml-20">
        
        <motion.div
          variants={slideInFromLeft(2.5)}
          className="flex flex-col gap-6 text-6xl font-bold  text-white max-w-full w-full h-auto "
        >
          <div className="tmorph">
            <div className={`tmorphTextShow${morphTextShowId}`} >
              {morphText.map((item, index) => (


                <div key={index} id={`EffectText${item.id}`} className="textAnimation" >
                  {item.text}

                </div>


              ))}
            </div>
          </div>

        </motion.div>

        <motion.p
          variants={slideInFromRight(3)}
          className="text-lg text-gray-400  my-5 max-[600px]:text-center max-[600px]:mx-4 "
        >
          I was a Physics student who discovered a passion for programming and some time ago,
          decided to enroll in computer science. I have had exposure to languages such as C++ and
          Python during my undergraduate studies, explored C# as a hobby in the Unity Engine,
          and now I am immersed in languages like TypeScript, JavaScript, among others.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(3.5)}



          href="#learn-more"
          className="py-2 button-primary text-center text-white cursor-pointer max-[600px]:self-center max-[600px]:px-10   rounded-lg max-w-[200px]"
        >
          Learn More!

        </motion.a>





      </div>

      <motion.div
        variants={slideInFromRight(4)}
        className="w-full h-full flex justify-center items-center min-[600px]:mt-32  min-[600px]:-mb-20 "
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
          
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;

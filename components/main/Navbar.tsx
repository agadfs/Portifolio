import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full   h-[85px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 ">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px] max-[600px]:px-[0px] ">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/logo_sem_fundo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
            
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Henrique De Freitas Serra
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between 
          w-full h-auto border border-[#7042f861] bg-[#0300145e] 
           max-[600px]:text-base px-[8px] py-[8px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            <a href="#contact-me" className="cursor-pointer">
              Contact me
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5 hidden md:flex ">
          {Socials.map((social, index) => (
            <Link href={social.url} key={index}>
              {social.color == 'black' ?
                <Image
                  src={social.src}
                  alt={social.name}
                  width={24}
                  height={24}
                  style={{ filter: 'invert(1)', width:'24px', height:'24px' }}
                />
                :

                <Image

                  src={social.src}
                  alt={social.name}
                  style={{ width:'24px', height:'24px' }}
                  width={24}
                  height={24}
                />

              }

            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

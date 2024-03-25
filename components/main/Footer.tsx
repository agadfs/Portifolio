import React from "react";

import { Socials } from "@/constants";
import Link from "next/link";
import Image from "next/image";


const date = new Date().getFullYear();

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">


                    <div id="contact-me" className="min-w-[200px] z-30 h-auto flex flex-col max-[600px]:my-10 max-[600px]:top-[-350px] items-center justify-start">
                        <div className="font-bold text-[26px] mb-5">Contact Me</div>
                        <div style={{ marginBottom: '25px' }} >My CV : <a style={{ textDecoration: 'underline' }}
                            href='./curriculo.pdf' target="_blank"
                            rel="noopener noreferrer" download> Download</a>
                        </div>
                        <div className="flex flex-row gap-5   ">
                            {Socials.map((social, index) => (
                                <Link href={social.url} key={index}>
                                    {social.color == 'black' ?
                                        <Image
                                            src={social.src}
                                            alt={social.name}
                                            width={34}
                                            height={34}
                                            style={{ filter: 'invert(1)', width: 'auto', height: 'auto' }}
                                        />
                                        :

                                        <Image

                                            src={social.src}
                                            alt={social.name}

                                            width={34}
                                            height={34}
                                        />

                                    }

                                </Link>
                            ))}
                        </div>
                    </div>

                    <div id="projects" className=" z-30 min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Completed Projects Links or (Current)</div>
                        <Link href="https://appoint-me-site.vercel.app/" className="border py-2 px-2 flex flex-row items-center my-[15px] cursor-pointer">

                            (CURRENT) Appoint Me (Global, PT-BR/EN-US) (WebSite, Front/Back End) (MongoDB, NextJS, GraphQl, Vercel, auth0, ServelessCMS)
                        </Link>
                        <Link href="https://criptoproject.vercel.app" className="border py-2 px-2 flex flex-row items-center my-[15px] cursor-pointer">

                           DigiCoins, WebSite integration with MetaMask CryptoCoins Wallet, Web3, and CoinsGecko (Global, PT-BR/EN-US) (React, MetaMask SDK, CoinsGeckoSDK, Redux)
                        </Link>
                        <Link href="https://ecommercevercelv1.vercel.app/home" className="border py-2 px-2 flex flex-row items-center my-[15px] cursor-pointer">

                            My first Ecommerce with suport for non-devs usage with DatoCMS (Brazil , PT-BR) (WebSite, Front/Back-End) (NextJS, ServelessCMS, MongoDB, Vercel)

                        </Link>
                        <Link href="https://legarden-site.vercel.app/" className="border py-2 px-2 flex flex-row items-center my-[15px] cursor-pointer">

                            Le Garden Pousada Boutique (Brazil , PT-BR) (WebSite, Front/Back-End) (NextJS, ServelessCMS, XataIO, auth0, Vercel)
                        </Link>
                        <Link href="https://henriqueportifolio.vercel.app/" className="border py-2 px-2 flex flex-row items-center my-[15px] cursor-pointer">

                            My old portifolio website (Brazil , EN-US) (WebSite, Front-End) (React, Xataio)
                        </Link>

                        


                    </div>
                </div>

                <div className="mb-[20px] text-[15px] text-center">
                    &copy; HenriqueS Dev {date} Inc. All rights reserved
                </div>
            </div>
        </div>
    )
}

export default Footer
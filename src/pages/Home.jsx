import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Form from "../components/common/form";
import Button from '../components/common/button'
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import m1 from "../assets/m1.png";
import date2 from "../assets/date2.png";
import bg from "../assets/bg.png";
import c1 from "../assets/c-1.png";
import c2 from "../assets/c-2.png";
import video from "../assets/video.png";
export default function Home() {

    const [playVideo, setPlayVideo] = useState(false);
    return (

        <section>

            <div
                className=" bg-center bg-no-repeat bg-cover w-full min-h-screen relative"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.57), rgba(0,0,0,0.57)), url(${bg})`,
                }}
            >

                <div className="max-w-[1320px] mx-auto px-3">
                    <Navbar />
                </div>
                <div className="max-w-[1320px] mx-auto px-3 mt-[173px] max-lg:mt-[70px]">
                    <h2 className='text-white text-[42px] md:text-[64px] leading-[150%] font-bold max-w-[1044px] w-full'>Sed tortor in <span className="relative inline-block">
                        quisque morbi
                        <svg className="absolute -bottom-2 left-0 w-full h-auto" width="472" height="8" viewBox="0 0 472 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2.49805" width="469.503" height="8" fill="#01C8FF" />
                            <rect width="414.561" height="8" fill="#2C49FE" />
                        </svg>

                    </span> scelerisque etiam eu.
                    </h2>
                    <p className="max-w-[765px] font-Yantramanav font-normal text-[20px] leading-[100%] pt-[18px] text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu.
                    </p>

                    <div className="flex items-center gap-6   pt-[33px]">

                        <Button text=" Get Started" className="duration-500    transition-transform  cursor-pointer   active:scale-75 w-[172px] h-[52px] rounded-[28px] px-7 bg-[#2C49FE] hover:bg-[#162fd1]  font-Poppins font-semibold text-[20px] text-white" />

                        <span
                            onClick={() =>
                                window.scrollTo({
                                    top: document.body.scrollHeight,
                                    behavior: "smooth",
                                })
                            }
                            className="font-Poppins cursor-pointer font-normal text-[20px] text-white"
                        >
                            Learn more
                        </span>
                    </div>




                    <div className="relative my-5 flex  max-sm:justify-center">
                        <div
                            className="mt-[145px] mb-[104px] bg-[#2C49FEBD] rounded-[150px]   max-w-[962px] p-[19px] grid  max-[400px]:grid-cols-1 grid-cols-2 md:grid-cols-4 gap-6 max-md:rounded-[40px] max-md:p-5"
                        >


                            <div className="flex items-center gap-[18px] justify-center lg:justify-start">
                                <svg width="31" height="31" fill="none">
                                    <path d="M15.5 16.7917C17.64 16.7917 19.375 15.0569 19.375 12.9167C19.375 10.7766 17.64 9.04175 15.5 9.04175C13.3599 9.04175 11.625 10.7766 11.625 12.9167C11.625 15.0569 13.3599 16.7917 15.5 16.7917Z"
                                        stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.4993 2.58337C12.7588 2.58337 10.1305 3.67206 8.19258 5.60994C6.2547 7.54781 5.16602 10.1761 5.16602 12.9167C5.16602 15.3605 5.68527 16.9596 7.10352 18.7292L15.4993 28.4167L23.8952 18.7292C25.3134 16.9596 25.8327 15.3605 25.8327 12.9167C25.8327 10.1761 24.744 7.54781 22.8061 5.60994C20.8682 3.67206 18.2399 2.58337 15.4993 2.58337Z"
                                        stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div>
                                    <h4 className="text-[20px] text-white font-medium">Location</h4>
                                    <p className="text-[14px] text-white">Search by city</p>
                                </div>
                                <div className="w-[3px] h-20 bg-white max-md:hidden"></div>
                            </div>




                            <div className="flex items-center gap-[18px] justify-center lg:justify-start">
                                <img src={date2} alt="date" />
                                <div>
                                    <h4 className="text-[20px] text-white font-medium">Date</h4>
                                    <p className="text-[14px] text-white">09/23/2021</p>
                                </div>


                                <div className="w-[3px] h-20 bg-white max-md:hidden"></div>
                            </div>


                            <div className="flex items-center gap-[18px] justify-center lg:justify-start">
                                <svg width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.197 23.19L19.397 16.785C19.2836 15.8778 18.8427 15.0432 18.1572 14.4383C17.4716 13.8333 16.5887 13.4996 15.6745 13.5H12.9195C12.0056 13.5003 11.1233 13.8342 10.4383 14.4391C9.75331 15.044 9.31277 15.8782 9.19945 16.785L8.3982 23.19C8.35423 23.5419 8.38562 23.8991 8.4903 24.2379C8.59498 24.5768 8.77054 24.8894 9.00533 25.1552C9.24013 25.421 9.52878 25.6338 9.85211 25.7794C10.1754 25.9251 10.5261 26.0003 10.8807 26H17.7157C18.0702 26.0001 18.4207 25.9248 18.7439 25.779C19.0671 25.6333 19.3556 25.4205 19.5902 25.1547C19.8249 24.889 20.0003 24.5764 20.1049 24.2376C20.2095 23.8989 20.2409 23.5418 20.197 23.19V23.19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14.2988 8.5C16.3699 8.5 18.0488 6.82107 18.0488 4.75C18.0488 2.67893 16.3699 1 14.2988 1C12.2278 1 10.5488 2.67893 10.5488 4.75C10.5488 6.82107 12.2278 8.5 14.2988 8.5Z" stroke="white" strokeWidth="2" />
                                    <path d="M4.29883 12.25C5.67954 12.25 6.79883 11.1307 6.79883 9.75C6.79883 8.36929 5.67954 7.25 4.29883 7.25C2.91812 7.25 1.79883 8.36929 1.79883 9.75C1.79883 11.1307 2.91812 12.25 4.29883 12.25Z" stroke="white" strokeWidth="2" />
                                    <path d="M24.2988 12.25C25.6795 12.25 26.7988 11.1307 26.7988 9.75C26.7988 8.36929 25.6795 7.25 24.2988 7.25C22.9181 7.25 21.7988 8.36929 21.7988 9.75C21.7988 11.1307 22.9181 12.25 24.2988 12.25Z" stroke="white" strokeWidth="2" />
                                    <path d="M4.29906 16H3.91656C3.32476 15.9999 2.75212 16.2098 2.30053 16.5923C1.84893 16.9747 1.54766 17.505 1.45031 18.0887L1.03406 20.5887C0.974323 20.9469 0.993334 21.3138 1.08977 21.6639C1.1862 22.014 1.35775 22.3389 1.59247 22.616C1.82719 22.893 2.11945 23.1156 2.44892 23.2683C2.7784 23.421 3.13718 23.5 3.50031 23.5H8.04906" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M24.2988 16H24.6813C25.2731 15.9999 25.8458 16.2098 26.2974 16.5923C26.749 16.9747 27.0502 17.505 27.1476 18.0887L27.5638 20.5887C27.6236 20.9469 27.6046 21.3138 27.5081 21.6639C27.4117 22.014 27.2401 22.3389 27.0054 22.616C26.7707 22.893 26.4784 23.1156 26.149 23.2683C25.8195 23.421 25.4607 23.5 25.0976 23.5H20.5488" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <div>
                                    <h4 className="text-[20px] text-white font-medium">Capacity</h4>
                                    <p className="text-[14px] text-white">Search by city</p>
                                </div>


                                <div className="w-[3px] h-20 bg-white max-md:hidden"></div>
                            </div>
                            <div className="flex justify-center lg:justify-end items-center ">
                                <Button
                                    text="GO CHECK"
                                    className="
                                        w-[185px] h-[70px]
    bg-white text-[#2C49FE]
    rounded-[150px]
    font-bold text-[20px]
    max-md:h-[60px] max-md:mt-3
    cursor-pointer
    transition-all duration-300
    hover:bg-[#d6d6d6]
    active:scale-75
  "

                                />

                            </div>
                        </div>
                    </div>

                </div>
            </div>



            <div className="max-w-[1320px] mx-auto px-3">
                <div className="flex flex-row max-md:flex-col flex-nowrap   ">
                    <div className="w-1/2 max-md:w-full ">
                        <div className="pt-[199.2px]  max-[767.98px]:pt-[50px] max-lg:pt-20   w-full relative cursor-pointer">
                            {!playVideo ? (
                                <>
                                    <img src={video} alt="video thumbnail" className="w-full" onClick={() => setPlayVideo(true)} />


                                </>
                            ) : (
                                <div className="w-[560px] max-[1168px]:w-[500px] max-[1049px]:w-[440px] max-[920px]:w-[350px] max-md:w-full relative pt-[56.25%] max-md:pt-[56.25%]">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full border-0 rounded-[40px]"
                                        src="https://www.youtube.com/embed/qjzqgiIVM5k?autoplay=1"
                                        title="YouTube video"
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            )}
                        </div>
                    </div>



                    <div className="w-1/2 max-md:w-full ">

                        <div className="pt-[173px] max-lg:pt-20 max-[767.98px]:pt-20 max-[767.98px]:flex max-[767.98px]:justify-center max-[767.98px]:items-center">
                            <svg width="189" height="8" viewBox="0 0 189 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" width="188" height="8" fill="#01C8FF" />
                                <rect width="166" height="8" fill="#2C49FE" />
                            </svg>


                        </div>
                        <div className="max-lg:flex max-lg:flex-col max-md:items-center max-md:text-center max-lg:pb-5">

                            <h1 className="max-w-[583px] font-Poppins font-bold text-[48px] max-lg:text-[32px] leading-[100%] text-black pt-[21px] pb-4">
                                What make us special ?
                            </h1>

                            <p className="max-w-[633px] font-Poppins font-normal text-[16px] leading-[150%] text-black/ ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in
                                dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec
                                arcu. Nunc elit elit, malesuada id suscipit cursus,
                            </p>

                        </div>

                        <div className="flex flex-row flex-wrap gap-[30px] justify-center">
                            <div className="box group w-[260px] h-[198px] opacity-100 rounded-[5px] bg-white  hover:bg-[rgba(44,73,254,1)] border-[1.5px] border-[#2C49FE] mt-[45px] cursor-pointer">
                                <div className="border-2 border-[#2C49FE] w-[79px] h-[79px] opacity-100 rounded-[79px] bg-white flex items-center justify-center relative -top-[39.5px] left-[90px]">
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7.19922 13.2C7.19922 11.6087 7.83136 10.0826 8.95658 8.95737C10.0818 7.83215 11.6079 7.20001 13.1992 7.20001H25.1992C26.7905 7.20001 28.3166 7.83215 29.4419 8.95737C30.5671 10.0826 31.1992 11.6087 31.1992 13.2C31.1992 13.5183 31.0728 13.8235 30.8477 14.0485C30.6227 14.2736 30.3175 14.4 29.9992 14.4C29.681 14.4 29.3757 14.2736 29.1507 14.0485C28.9256 13.8235 28.7992 13.5183 28.7992 13.2C28.7992 12.2452 28.4199 11.3296 27.7448 10.6544C27.0697 9.9793 26.154 9.60001 25.1992 9.60001H13.1992C12.2444 9.60001 11.3288 9.9793 10.6536 10.6544C9.9785 11.3296 9.59922 12.2452 9.59922 13.2V25.2C9.59922 26.1548 9.9785 27.0705 10.6536 27.7456C11.3288 28.4207 12.2444 28.8 13.1992 28.8H24.0328C24.1812 27.4814 24.8099 26.2636 25.7989 25.379C26.788 24.4943 28.0681 24.0048 29.395 24.0039C30.722 24.0029 32.0028 24.4906 32.9931 25.3737C33.9834 26.2569 34.6139 27.4738 34.7642 28.7922C34.9145 30.1106 34.5741 31.4382 33.808 32.5216C33.0419 33.6051 31.9036 34.3685 30.6105 34.6662C29.3174 34.9639 27.96 34.7751 26.7972 34.1358C25.6344 33.4965 24.7478 32.4514 24.3064 31.2H13.1992C11.6079 31.2 10.0818 30.5679 8.95658 29.4427C7.83136 28.3174 7.19922 26.7913 7.19922 25.2V13.2ZM17.9992 33.6C17.681 33.6 17.3757 33.7264 17.1507 33.9515C16.9256 34.1765 16.7992 34.4818 16.7992 34.8C16.7992 36.3913 17.4314 37.9174 18.5566 39.0427C19.6818 40.1679 21.2079 40.8 22.7992 40.8H34.7992C36.3905 40.8 37.9166 40.1679 39.0419 39.0427C40.1671 37.9174 40.7992 36.3913 40.7992 34.8V22.8C40.7992 21.2087 40.1671 19.6826 39.0419 18.5574C37.9166 17.4322 36.3905 16.8 34.7992 16.8H23.692C23.2507 15.5486 22.364 14.5036 21.2012 13.8642C20.0385 13.2249 18.681 13.0361 17.3879 13.3338C16.0948 13.6316 14.9566 14.395 14.1905 15.4784C13.4243 16.5618 13.0839 17.8894 13.2342 19.2078C13.3845 20.5262 14.015 21.7431 15.0053 22.6263C15.9956 23.5095 17.2765 23.9971 18.6034 23.9962C19.9303 23.9952 21.2105 23.5057 22.1995 22.6211C23.1885 21.7364 23.8172 20.5186 23.9656 19.2H34.7992C35.754 19.2 36.6697 19.5793 37.3448 20.2544C38.0199 20.9296 38.3992 21.8452 38.3992 22.8V34.8C38.3992 35.7548 38.0199 36.6705 37.3448 37.3456C36.6697 38.0207 35.754 38.4 34.7992 38.4H22.7992C21.8444 38.4 20.9288 38.0207 20.2536 37.3456C19.5785 36.6705 19.1992 35.7548 19.1992 34.8C19.1992 34.4818 19.0728 34.1765 18.8477 33.9515C18.6227 33.7264 18.3175 33.6 17.9992 33.6Z"
                                            fill="#2C49FE" />
                                    </svg>
                                </div>
                                <h3 className=" font-poppins font-medium text-[25px] leading-[100%] tracking-[0] text-[#2C49FE] text-center relative -top-5 group-hover:text-white ">
                                    Sharing
                                </h3>

                                <p className=" font-poppins font-normal text-[16px] leading-[150%] tracking-[0] text-center text-[#2D3CAE] group-hover:text-white ">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                                    efficitur urna in
                                </p>

                            </div>


                            <div className="box group w-[260px] h-[198px] opacity-100 rounded-[5px] bg-white  hover:bg-[rgba(44,73,254,1)] border-[1.5px] border-[#2C49FE] mt-[45px] cursor-pointer">
                                <div className="border-2 border-[#2C49FE] w-[79px] h-[79px] opacity-100 rounded-[79px] bg-white flex items-center justify-center relative -top-[39.5px] left-[90px]">
                                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.75 5.15625C24.75 3.78873 24.2068 2.47722 23.2398 1.51023C22.2728 0.543246 20.9613 0 19.5938 0H5.15625C3.78873 0 2.47722 0.543246 1.51023 1.51023C0.543246 2.47722 0 3.78873 0 5.15625V19.5938C0 20.9613 0.543246 22.2728 1.51023 23.2398C2.47722 24.2068 3.78873 24.75 5.15625 24.75H8.78006C8.25481 24.1138 7.80044 23.4222 7.425 22.6875H5.15625C4.33574 22.6875 3.54883 22.3616 2.96864 21.7814C2.38845 21.2012 2.0625 20.4143 2.0625 19.5938V8.25H11.0076C12.8535 6.95062 15.1037 6.1875 17.5312 6.1875C20.2744 6.1875 22.7906 7.161 24.75 8.78006V5.15625ZM17.5312 6.1875H2.0625V5.15625C2.0625 4.33574 2.38845 3.54883 2.96864 2.96864C3.54883 2.38845 4.33574 2.0625 5.15625 2.0625H19.5938C20.4143 2.0625 21.2012 2.38845 21.7814 2.96864C22.3616 3.54883 22.6875 4.33574 22.6875 5.15625V6.1875H17.5312ZM16.2422 13.4062C16.2422 13.0644 16.378 12.7365 16.6197 12.4947C16.8615 12.253 17.1894 12.1172 17.5312 12.1172C17.8731 12.1172 18.201 12.253 18.4428 12.4947C18.6845 12.7365 18.8203 13.0644 18.8203 13.4062C18.8203 13.7481 18.6845 14.076 18.4428 14.3178C18.201 14.5595 17.8731 14.6953 17.5312 14.6953C17.1894 14.6953 16.8615 14.5595 16.6197 14.3178C16.378 14.076 16.2422 13.7481 16.2422 13.4062ZM18.5625 21.6562C18.5625 21.9298 18.4539 22.1921 18.2605 22.3855C18.0671 22.5789 17.8048 22.6875 17.5312 22.6875C17.2577 22.6875 16.9954 22.5789 16.802 22.3855C16.6086 22.1921 16.5 21.9298 16.5 21.6562V17.5312C16.5 17.2577 16.6086 16.9954 16.802 16.802C16.9954 16.6086 17.2577 16.5 17.5312 16.5C17.8048 16.5 18.0671 16.6086 18.2605 16.802C18.4539 16.9954 18.5625 17.2577 18.5625 17.5312V21.6562ZM8.25 17.5312C8.25 16.3124 8.49007 15.1055 8.95649 13.9795C9.42292 12.8534 10.1066 11.8303 10.9684 10.9684C11.8303 10.1066 12.8534 9.42292 13.9795 8.95649C15.1055 8.49007 16.3124 8.25 17.5312 8.25C18.7501 8.25 19.957 8.49007 21.083 8.95649C22.2091 9.42292 23.2322 10.1066 24.0941 10.9684C24.9559 11.8303 25.6396 12.8534 26.106 13.9795C26.5724 15.1055 26.8125 16.3124 26.8125 17.5312C26.8125 19.9928 25.8347 22.3535 24.0941 24.0941C22.3535 25.8347 19.9928 26.8125 17.5312 26.8125C15.0697 26.8125 12.709 25.8347 10.9684 24.0941C9.22784 22.3535 8.25 19.9928 8.25 17.5312ZM10.3125 17.5312C10.3125 19.4458 11.073 21.2819 12.4268 22.6357C13.7806 23.9895 15.6167 24.75 17.5312 24.75C19.4458 24.75 21.2819 23.9895 22.6357 22.6357C23.9895 21.2819 24.75 19.4458 24.75 17.5312C24.75 15.6167 23.9895 13.7806 22.6357 12.4268C21.2819 11.073 19.4458 10.3125 17.5312 10.3125C15.6167 10.3125 13.7806 11.073 12.4268 12.4268C11.073 13.7806 10.3125 15.6167 10.3125 17.5312Z" fill="#2C49FE" />
                                    </svg>

                                </div>
                                <h3 className=" font-poppins font-medium text-[25px] leading-[100%] tracking-[0] text-[#2C49FE] text-center relative -top-5 group-hover:text-white ">
                                    Info
                                </h3>

                                <p className=" font-poppins font-normal text-[16px] leading-[150%] tracking-[0] text-center text-[#2D3CAE] group-hover:text-white ">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                                    efficitur urna in
                                </p>

                            </div>


                            <div className="mb-[73px] box group w-[260px] h-[198px] opacity-100 rounded-[5px] bg-white  hover:bg-[rgba(44,73,254,1)] border-[1.5px] border-[#2C49FE] mt-[45px] cursor-pointer">
                                <div className="border-2 border-[#2C49FE] w-[79px] h-[79px] opacity-100 rounded-[79px] bg-white flex items-center justify-center relative -top-[39.5px] left-[90px]">
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_34717_6864)">
                                            <path d="M29.8125 11.0416H23.1875C22.3092 11.0425 21.4672 11.3918 20.8462 12.0128C20.2252 12.6338 19.8759 13.4759 19.875 14.3541V20.9791C19.8756 21.5646 20.1084 22.126 20.5225 22.54C20.9365 22.954 21.4978 23.1869 22.0833 23.1875V30.9166C22.0839 31.5021 22.3168 32.0635 22.7308 32.4775C23.1448 32.8915 23.7062 33.1244 24.2917 33.125H28.7083C29.2938 33.1244 29.8552 32.8915 30.2692 32.4775C30.6832 32.0635 30.9161 31.5021 30.9167 30.9166V23.1875C31.5022 23.1869 32.0635 22.954 32.4775 22.54C32.8916 22.126 33.1244 21.5646 33.125 20.9791V14.3541C33.1241 13.4759 32.7748 12.6338 32.1538 12.0128C31.5328 11.3918 30.6908 11.0425 29.8125 11.0416ZM30.9167 20.9791H28.7083V30.9166H24.2917V20.9791H22.0833V14.3541C22.0833 14.0613 22.1997 13.7804 22.4067 13.5734C22.6138 13.3663 22.8947 13.25 23.1875 13.25H29.8125C30.1053 13.25 30.3862 13.3663 30.5933 13.5734C30.8003 13.7804 30.9167 14.0613 30.9167 14.3541V20.9791Z" fill="#2C49FE" />
                                            <path d="M22.084 5.52079C22.084 4.64726 22.343 3.79334 22.8283 3.06703C23.3136 2.34071 24.0034 1.77461 24.8105 1.44033C25.6175 1.10604 26.5056 1.01857 27.3623 1.18899C28.219 1.35941 29.006 1.78006 29.6237 2.39774C30.2414 3.01542 30.662 3.8024 30.8325 4.65915C31.0029 5.5159 30.9154 6.40394 30.5811 7.21098C30.2468 8.01802 29.6807 8.70781 28.9544 9.19312C28.2281 9.67843 27.3742 9.93746 26.5007 9.93746C25.3296 9.93629 24.2069 9.47059 23.3789 8.64256C22.5509 7.81453 22.0852 6.69181 22.084 5.52079ZM24.2923 5.52079C24.2923 5.95756 24.4218 6.38452 24.6645 6.74768C24.9071 7.11084 25.252 7.39389 25.6556 7.56103C26.0591 7.72817 26.5031 7.77191 26.9315 7.6867C27.3599 7.60149 27.7533 7.39116 28.0622 7.08232C28.371 6.77348 28.5813 6.37999 28.6666 5.95162C28.7518 5.52324 28.708 5.07922 28.5409 4.6757C28.3737 4.27218 28.0907 3.92729 27.7275 3.68463C27.3644 3.44198 26.9374 3.31246 26.5007 3.31246C25.9151 3.31305 25.3538 3.5459 24.9398 3.95991C24.5258 4.37393 24.2929 4.93529 24.2923 5.52079Z" fill="#2C49FE" />
                                            <path d="M15.4583 17.6666V14.3541C15.4575 13.4759 15.1082 12.6338 14.4872 12.0128C13.8661 11.3918 13.0241 11.0425 12.1458 11.0416H5.52083C4.64257 11.0425 3.80053 11.3918 3.17951 12.0128C2.55849 12.6338 2.20921 13.4759 2.20833 14.3541V17.6666H0V19.875H17.6667V17.6666H15.4583ZM4.41667 14.3541C4.41667 14.0613 4.533 13.7804 4.74007 13.5734C4.94714 13.3663 5.22799 13.25 5.52083 13.25H12.1458C12.4387 13.25 12.7195 13.3663 12.9266 13.5734C13.1337 13.7804 13.25 14.0613 13.25 14.3541V17.6666H4.41667V14.3541Z" fill="#2C49FE" />
                                            <path d="M4.41602 5.52079C4.41602 4.64726 4.67505 3.79334 5.16036 3.06703C5.64567 2.34071 6.33546 1.77461 7.1425 1.44033C7.94954 1.10604 8.83758 1.01857 9.69433 1.18899C10.5511 1.35941 11.3381 1.78006 11.9557 2.39774C12.5734 3.01542 12.9941 3.8024 13.1645 4.65915C13.3349 5.5159 13.2474 6.40394 12.9132 7.21098C12.5789 8.01802 12.0128 8.70781 11.2865 9.19312C10.5601 9.67843 9.70622 9.93746 8.83268 9.93746C7.66167 9.93629 6.53895 9.47059 5.71092 8.64256C4.88289 7.81453 4.41718 6.69181 4.41602 5.52079ZM6.62435 5.52079C6.62435 5.95756 6.75387 6.38452 6.99652 6.74768C7.23918 7.11084 7.58407 7.39389 7.98759 7.56103C8.39111 7.72817 8.83513 7.77191 9.26351 7.6867C9.69188 7.60149 10.0854 7.39116 10.3942 7.08232C10.7031 6.77348 10.9134 6.37999 10.9986 5.95162C11.0838 5.52324 11.0401 5.07922 10.8729 4.6757C10.7058 4.27218 10.4227 3.92729 10.0596 3.68463C9.69641 3.44198 9.26945 3.31246 8.83268 3.31246C8.24718 3.31305 7.68582 3.5459 7.2718 3.95991C6.85778 4.37393 6.62493 4.93529 6.62435 5.52079Z" fill="#2C49FE" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_34717_6864">
                                                <rect width="35.3333" height="35.3333" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>
                                <h3 className=" font-poppins font-medium text-[25px] leading-[100%] tracking-[0] text-[#2C49FE] text-center relative -top-5 group-hover:text-white ">
                                    Help
                                </h3>

                                <p className=" font-poppins font-normal text-[16px] leading-[150%] tracking-[0] text-center text-[#2D3CAE] group-hover:text-white ">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                                    efficitur urna in
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-full h-full flex flex-col items-center justify-center relative">

                <div className="absolute inset-0 bg-[url('./assets/bg-image-2.png')] bg-center bg-cover bg-no-repeat">
                    <div className="absolute inset-0 bg-[rgba(44,73,254,0.8)]"></div>
                </div>


                <div className="relative z-10 max-w-[1320px] px-4 text-center flex flex-col justify-center    py-16">
                    <h1 className="max-w-[708px]  items-center font-Poppins font-bold text-[48px] leading-[130%]   text-center text-white mb-4">
                        Lorem ipsum dolor sit amet, consectetur
                    </h1>
                    <p className="mb-[50px] font-normal text-[16px] leading-[100%]   text-center text-white max-w-[765px] h-12">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec
                    </p>

                    <div className="grid  grid-cols-2 md:grid-cols-4 gap- 30 ">

                        <div className="flex flex-col items-center  p-6 rounded-lg">
                            <svg className="mb-4" width="35" height="28" viewBox="0 0 35 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.375 27H33.5V23.75C33.4999 22.7369 33.1842 21.7489 32.5967 20.9235C32.0092 20.0981 31.1792 19.4762 30.222 19.1443C29.2647 18.8125 28.2279 18.7871 27.2555 19.0717C26.2832 19.3563 25.4237 19.9367 24.7965 20.7324L25.375 27ZM25.375 27H9.125H25.375ZM25.375 27V23.75C25.375 22.684 25.1702 21.6651 24.7965 20.7324L25.375 27ZM9.125 27H1V23.75C1.00007 22.7369 1.3158 21.7489 1.90327 20.9235C2.49075 20.0981 3.3208 19.4762 4.27803 19.1443C5.23526 18.8125 6.27211 18.7871 7.24445 19.0717C8.21679 19.3563 9.0763 19.9367 9.7035 20.7324L9.125 27ZM9.125 27V23.75C9.125 22.684 9.32975 21.6651 9.7035 20.7324L9.125 27ZM9.7035 20.7324C10.307 19.2243 11.3484 17.9316 12.6935 17.0211C14.0386 16.1105 15.6257 15.6239 17.25 15.6239C18.8743 15.6239 20.4614 16.1105 21.8065 17.0211C23.1516 17.9316 24.193 19.2243 24.7965 20.7324H9.7035ZM22.125 5.875C22.125 7.16793 21.6114 8.40791 20.6971 9.32215C19.7829 10.2364 18.5429 10.75 17.25 10.75C15.9571 10.75 14.7171 10.2364 13.8029 9.32215C12.8886 8.40791 12.375 7.16793 12.375 5.875C12.375 4.58207 12.8886 3.34209 13.8029 2.42785C14.7171 1.51361 15.9571 1 17.25 1C18.5429 1 19.7829 1.51361 20.6971 2.42785C21.6114 3.34209 22.125 4.58207 22.125 5.875V5.875ZM31.875 10.75C31.875 11.612 31.5326 12.4386 30.9231 13.0481C30.3136 13.6576 29.487 14 28.625 14C27.763 14 26.9364 13.6576 26.3269 13.0481C25.7174 12.4386 25.375 11.612 25.375 10.75C25.375 9.88805 25.7174 9.0614 26.3269 8.4519C26.9364 7.84241 27.763 7.5 28.625 7.5C29.487 7.5 30.3136 7.84241 30.9231 8.4519C31.5326 9.0614 31.875 9.88805 31.875 10.75ZM9.125 10.75C9.125 11.612 8.78259 12.4386 8.1731 13.0481C7.5636 13.6576 6.73695 14 5.875 14C5.01305 14 4.1864 13.6576 3.5769 13.0481C2.96741 12.4386 2.625 11.612 2.625 10.75C2.625 9.88805 2.96741 9.0614 3.5769 8.4519C4.1864 7.84241 5.01305 7.5 5.875 7.5C6.73695 7.5 7.5636 7.84241 8.1731 8.4519C8.78259 9.0614 9.125 9.88805 9.125 10.75Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <h1 className="text-2xl font-bold text-white">8800</h1>
                            <p className="text-white">PARTICIPANTS</p>
                        </div>


                        <div className="flex flex-col items-center  p-6 rounded-lg">
                            <svg className="mb-4" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M34 10H20.6667L17.3333 6.66667H7.33333C5.5 6.66667 4.01667 8.16667 4.01667 10L4 30C4 31.8333 5.5 33.3333 7.33333 33.3333H35.2833C36.4167 33.3333 37.3333 32.4 37.3333 31.2833V13.3333C37.3333 11.5 35.8333 10 34 10ZM34 30H7.33333V10H15.95L19.2833 13.3333H34V30ZM30.6667 20H10.6667V16.6667H30.6667V20ZM24 26.6667H10.6667V23.3333H24V26.6667Z" fill="white" />
                            </svg>
                            <h1 className="text-2xl font-bold text-white">300</h1>
                            <p className="text-white">TOPICS</p>
                        </div>


                        <div className="flex flex-col items-center  p-6 rounded-lg">
                            <svg className="mb-4" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.6875 19V17.8125C29.6875 14.978 28.5615 12.2596 26.5572 10.2553C24.5529 8.251 21.8345 7.125 19 7.125C16.1655 7.125 13.4471 8.251 11.4428 10.2553C9.4385 12.2596 8.3125 14.978 8.3125 17.8125V19C6.73778 19 5.22755 19.6256 4.11405 20.7391C3.00056 21.8526 2.375 23.3628 2.375 24.9375C2.375 26.5122 3.00056 28.0224 4.11405 29.1359C5.22755 30.2494 6.73778 30.875 8.3125 30.875H10.6875V17.8125C10.6875 15.6079 11.5633 13.4936 13.1222 11.9347C14.6811 10.3758 16.7954 9.5 19 9.5C21.2046 9.5 23.3189 10.3758 24.8778 11.9347C26.4367 13.4936 27.3125 15.6079 27.3125 17.8125V30.875H29.6875C31.2622 30.875 32.7724 30.2494 33.8859 29.1359C34.9994 28.0224 35.625 26.5122 35.625 24.9375C35.625 23.3628 34.9994 21.8526 33.8859 20.7391C32.7724 19.6256 31.2622 19 29.6875 19ZM4.75 24.9375C4.75 23.9927 5.12533 23.0865 5.79343 22.4184C6.46153 21.7503 7.36767 21.375 8.3125 21.375V28.5C7.36767 28.5 6.46153 28.1247 5.79343 27.4566C5.12533 26.7885 4.75 25.8823 4.75 24.9375ZM29.6875 28.5V21.375C30.6323 21.375 31.5385 21.7503 32.2066 22.4184C32.8747 23.0865 33.25 23.9927 33.25 24.9375C33.25 25.8823 32.8747 26.7885 32.2066 27.4566C31.5385 28.1247 30.6323 28.5 29.6875 28.5Z" fill="white" />
                            </svg>
                            <h1 className="text-2xl font-bold text-white">50</h1>
                            <p className="text-white">SPEAKERS</p>
                        </div>

                        <div className="flex flex-col items-center   p-6 rounded-lg">
                            <svg className="mb-4" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.5 6.125C10.5 5.89294 10.5922 5.67038 10.7563 5.50628C10.9204 5.34219 11.1429 5.25 11.375 5.25H30.625C30.8571 5.25 31.0796 5.34219 31.2437 5.50628C31.4078 5.67038 31.5 5.89294 31.5 6.125V7H35.875C36.1071 7 36.3296 7.09219 36.4937 7.25628C36.6578 7.42038 36.75 7.64294 36.75 7.875V13.125C36.75 14.2853 36.2891 15.3981 35.4686 16.2186C34.6481 17.0391 33.5353 17.5 32.375 17.5H30.9024C29.554 21.315 26.0636 24.1185 21.875 24.4641V29.75H28C28.2321 29.75 28.4546 29.8422 28.6187 30.0063C28.7828 30.1704 28.875 30.3929 28.875 30.625V35.875C28.875 36.1071 28.7828 36.3296 28.6187 36.4937C28.4546 36.6578 28.2321 36.75 28 36.75H14C13.7679 36.75 13.5454 36.6578 13.3813 36.4937C13.2172 36.3296 13.125 36.1071 13.125 35.875V30.625C13.125 30.3929 13.2172 30.1704 13.3813 30.0063C13.5454 29.8422 13.7679 29.75 14 29.75H20.125V24.4641C15.9373 24.1185 12.446 21.315 11.0976 17.5H9.625C8.46468 17.5 7.35188 17.0391 6.53141 16.2186C5.71094 15.3981 5.25 14.2853 5.25 13.125V7.875C5.25 7.64294 5.34219 7.42038 5.50628 7.25628C5.67038 7.09219 5.89294 7 6.125 7H10.5V6.125ZM29.75 14V7H12.25V14C12.25 18.8326 16.1674 22.75 21 22.75C25.8326 22.75 29.75 18.8326 29.75 14ZM31.5 8.75V15.75H32.375C33.0712 15.75 33.7389 15.4734 34.2312 14.9812C34.7234 14.4889 35 13.8212 35 13.125V8.75H31.5ZM7 8.75H10.5V15.75H9.625C8.92881 15.75 8.26113 15.4734 7.76884 14.9812C7.27656 14.4889 7 13.8212 7 13.125V8.75ZM14.875 31.5V35H27.125V31.5H14.875Z" fill="white" />
                            </svg>
                            <h1 className="text-2xl font-bold text-white">30</h1>
                            <p className="text-white">AWARDS</p>
                        </div>
                    </div>


                </div>
            </div>



            <div className="container max-w-[1320px] mx-auto px-4">

                <div className="flex flex-wrap justify-center   ">



                    <div className="w-full md:w-1/2 flex flex-col   gap-4">
                        <div className="max-[767.98px]:flex max-[767.98px]:flex-col max-[767.98px]:items-center max-[767.98px]:text-center">

                            <div className="w-[189px] h-2 pt-[158px] max-lg:pt-[75px] pb-2.5">
                                <svg width="189" height="8" viewBox="0 0 189 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" width="188" height="8" fill="#01C8FF" />
                                    <rect width="166" height="8" fill="#2C49FE" />
                                </svg>
                            </div>

                            <h2 className="font-poppins font-bold text-[48px] leading-[137%] max-w-[338px] text-black">
                                Explore our latest events
                            </h2>

                            <p className="font-poppins font-normal text-[16px] leading-[150%] text-[#000000B2] max-w-[543px] pt-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit.
                                Suspendisse maximus ipsum sem.
                            </p>

                            <span
                                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                className="font-poppins font-bold text-[16px] pt-[15px] cursor-pointer"
                            >
                                LEARN MORE
                            </span>

                        </div>

                        <div className="w-full pt-[265px] max-md:pt-[100px] pr-5 max-[999.98px]:flex    max-[999.98px]:justify-center mt-4">
                            <img src={m1} alt="logo-image" />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col pt-[158px] max-lg:pt-[75px] gap-6">


                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <NavLink to="/Events" className="cursor-pointer flex flex-col gap-1.5 p-3 hover:bg-white hover:shadow-[2px_9px_32px_0px_rgba(0,0,0,0.16)] shadow-[2px_9px_32px_0px_rgba(0,0,0,0.06)]">
                                <img src={c1} alt="logo-image" />
                                <p className="text-sm text-gray-500 mt-2 px-2">09/23/2021</p>
                                <h4 className="font-semibold text-lg px-2">Lorem ipsum</h4>
                                <p className="text-gray-600 text-sm px-2 pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in</p>
                            </NavLink>
                            <NavLink to="/Events" className="cursor-pointer flex flex-col gap-1.5 p-3 hover:bg-white hover:shadow-[2px_9px_32px_0px_rgba(0,0,0,0.16)] shadow-[2px_9px_32px_0px_rgba(0,0,0,0.06)]">
                                <img src={c2} alt="logo-image" className="w-full" />
                                <p className="text-sm text-gray-500 mt-2 px-2">09/23/2021</p>
                                <h4 className="font-semibold text-lg px-2">Lorem ipsum</h4>
                                <p className="text-gray-600 text-sm px-2 pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in</p>
                            </NavLink>
                        </div>

                        <div className="max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center">

                            <div className="w-[189px] pt-[163px] max-[767.98px]:pt-20 h-2 mt-4">
                                <svg width="189" height="8" viewBox="0 0 189 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" width="188" height="8" fill="#01C8FF" />
                                    <rect width="166" height="8" fill="#2C49FE" />
                                </svg>
                            </div>

                            <h2 className="font-Poppins font-bold text-[48px] leading-[150%] text-black">
                                Join Us !
                            </h2>

                            <p className="font-Poppins font-normal text-[16px] leading-[150%] text-[#000000B2] max-w-[543px]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit.
                                Suspendisse maximus ipsum sem. Donec ut justo et leo congue
                            </p>

                        </div>


                        <h3 className=" font-Poppins font-bold text-[30px] leading-[150%] tracking-[0px]  text-black  flex text-center max-lg:justify-center">Sign Up</h3>
                        <Form />
                    </div>

                </div>
            </div>
            <Footer />
        </section >
    );
}
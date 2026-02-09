import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import user from "../assets/user-1.png"
import grid1 from "../assets/grid-1.png"
import grid2 from "../assets/grid-2.png"
import grid3 from "../assets/grid-3.png"
import grid4 from "../assets/grid-4.png"
import grid5 from "../assets/grid-5.png"
import grid6 from "../assets/grid-6.png"
import girl from "../assets/girl.png"
import girl3 from "../assets/girl3.png"
import girl4 from "../assets/girl4.png"
import girl2 from "../assets/girl2.png"
import dp1 from "../assets/dp-1.png"
import dp2 from "../assets/dp-2.png"
import dp3 from "../assets/dp-3.png"
import dp4 from "../assets/dp-4.png"
import Button from "../components/common/button";

export default function User() {

    const [commentText, setCommentText] = useState("");
    const [comments, setComments] = useState([
        {
            id: 1,
            user: "Username",
            text: "Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.",
            avatar: girl2,

        },
        {
            id: 2,
            user: "Username",
            text: "Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla.",
            avatar: girl3,
        },
        {
            id: 3,
            user: "Username",
            text: "Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.",
            avatar: girl4,
        },
    ]);
    const handleRemoveComment = (id) => {
        setComments((prev) => prev.filter((item) => item.id !== id));
    };
    const handleAddComment = () => {
        if (commentText.trim() === "") return;

        const avatars = [girl2, girl3, girl4, dp1, dp2, dp3, dp4];

        const newComment = {
            id: Date.now(),
            user: "Username",
            text: commentText,
            avatar: avatars[Math.floor(Math.random() * avatars.length)],
        };

        setComments([...comments, newComment]);
        setCommentText("");
    };

    const navLinkClass = ({ isActive }) =>
        `font-poppins font-semibold text-[16px] transition-all duration-200 hover:text-white
   ${isActive ? " text-black" : "text-black/70"}`

    return (



        <section>

            <div className="max-w-[1320px] mx-auto px-3">
                <Navbar />
            </div>

            <div className='max-w-[1320px]  mx-auto px-3'>
                <div className='flex items-center justify-center flex-row px-3 flex-wrap -mx-3 mt-[67px] '>
                    <div className='flex flex-row max-[991.98px]:flex-col gap-[62px] '>
                        <div className="w-5/12 max-[991.98px]:w-full ">
                            <div className=' max-[991.98px]:px-[100px]  max-[767.98px]:px-[30px]  max-sm:px-2.5'>
                                <img src={user} alt="image" className='w-full h-full' />
                            </div>
                        </div>
                        <div className='flex flex-col  '>

                            <span className="  text-black/60 font-Poppins font-normal text-[16px] leading-[150%] tracking-[0] max-[991.98px]:justify-center flex">{`Home  >  Username`}</span>
                            <div className="flex flex-row justify-between max-[776.98px]:flex-col max-[991.98px]:flex-row  max-[1161.98px]:flex-col items-center">
                                <h1 className='max-w-[258px] text-black font-Poppins font-semibold text-[48px] leading-[150%] tracking-[0] pt-3 pb-4'>
                                    Jhone Doe
                                </h1>
                                <div className="flex flex-row max-[527.98px]:flex-col gap-[13px] pb-5">
                                    <Button text="Unshow Journey of Feed" className="font-Poppins font-semibold text-[16px] justify-center leading-[150%] tracking-normal max-w-[254px] h-[46px] rounded-[23px] px-7 py-[11px] flex items-center gap-2.5  hover:text-black text-white bg-[rgba(44,73,254,1)]  hover:bg-[rgba(44,73,254,0.1)]" />
                                    <Button text="Show Journey of Feed" className="font-Poppins font-semibold text-[16px] justify-center leading-[150%] tracking-normal w-[254px] h-[46px] rounded-[23px] px-7 py-[11px] flex items-center gap-2.5  hover:text-black text-white bg-[rgba(44,73,254,1)]  hover:bg-[rgba(44,73,254,0.1)]" />
                                </div>
                            </div>
                            <p className="font-poppins font-normal text-black/60  text-[16px] leading-[150%] tracking-normal max-w-[857px]">Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.</p>
                            <div className=' gap-[35px] pt-[38px] flex flex-row flex-wrap '>


                                <div className='flex '>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.6">
                                            <path d="M7 11H9V13H7V11ZM7 15H9V17H7V15ZM11 11H13V13H11V11ZM11 15H13V17H11V15ZM15 11H17V13H15V11ZM15 15H17V17H15V15Z" fill="black" />
                                            <path d="M5 22H19C20.103 22 21 21.103 21 20V6C21 4.897 20.103 4 19 4H17V2H15V4H9V2H7V4H5C3.897 4 3 4.897 3 6V20C3 21.103 3.897 22 5 22ZM19 8L19.001 20H5V8H19Z" fill="black" />
                                        </g>
                                    </svg>
                                    <h1 className='font-Poppins font-normal text-[16px] leading-[150%] tracking-normal pl-2  text-[rgba(0,0,0,0.6)]'>10/02/2022</h1>
                                </div>
                                <div className='flex'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_107912_174)">
                                            <path d="M19.1998 8.15996C19.1998 14.6899 11.9998 23.04 11.9998 23.04C11.9998 23.04 4.7998 14.8454 4.7998 8.15996C4.7998 4.18316 8.023 0.959961 11.9998 0.959961C15.9761 0.959961 19.1998 4.18316 19.1998 8.15996Z" stroke="#666666" strokeWidth="1.7647" strokeMiterlimit="10" strokeLinejoin="round" />
                                            <path d="M12.0001 11.52C13.5907 11.52 14.8801 10.2306 14.8801 8.64001C14.8801 7.04943 13.5907 5.76001 12.0001 5.76001C10.4095 5.76001 9.12012 7.04943 9.12012 8.64001C9.12012 10.2306 10.4095 11.52 12.0001 11.52Z" stroke="#666666" strokeWidth="1.7647" strokeMiterlimit="10" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_107912_174">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <h1 className='font-Poppins font-normal text-[16px] leading-[150%] tracking-normal pl-2 text-[rgba(0,0,0,0.6)]'>Mumbai</h1>

                                </div>
                                <div className='flex'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_107912_155)">
                                            <path d="M12 16.5C11.11 16.5 10.24 16.2361 9.49994 15.7416C8.75991 15.2471 8.18314 14.5443 7.84254 13.7221C7.50195 12.8998 7.41283 11.995 7.58647 11.1221C7.7601 10.2492 8.18869 9.44736 8.81802 8.81802C9.44736 8.18869 10.2492 7.7601 11.1221 7.58647C11.995 7.41283 12.8998 7.50195 13.7221 7.84254C14.5443 8.18314 15.2471 8.75991 15.7416 9.49994C16.2361 10.24 16.5 11.11 16.5 12C16.5 13.1935 16.0259 14.3381 15.182 15.182C14.3381 16.0259 13.1935 16.5 12 16.5ZM12 9C11.4067 9 10.8266 9.17595 10.3333 9.50559C9.83994 9.83524 9.45543 10.3038 9.22836 10.852C9.0013 11.4001 8.94189 12.0033 9.05765 12.5853C9.1734 13.1672 9.45912 13.7018 9.87868 14.1213C10.2982 14.5409 10.8328 14.8266 11.4147 14.9424C11.9967 15.0581 12.5999 14.9987 13.1481 14.7716C13.6962 14.5446 14.1648 14.1601 14.4944 13.6667C14.8241 13.1734 15 12.5933 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7957 9 12 9Z" fill="#666666" />
                                            <path d="M15.75 23.25H8.25C7.45435 23.25 6.69129 22.934 6.12868 22.3713C5.56607 21.8087 5.25 21.0457 5.25 20.25V18.3375C5.25135 18.1886 5.29701 18.0434 5.38115 17.9206C5.4653 17.7977 5.58413 17.7026 5.7225 17.6475L8.4525 16.5525C8.54504 16.5115 8.64492 16.4896 8.74614 16.4882C8.84736 16.4868 8.94781 16.5059 9.04144 16.5444C9.13508 16.5829 9.21996 16.6399 9.29097 16.712C9.36198 16.7842 9.41765 16.8699 9.45464 16.9642C9.49162 17.0584 9.50914 17.1591 9.50615 17.2603C9.50317 17.3615 9.47973 17.461 9.43725 17.5529C9.39477 17.6448 9.33413 17.7271 9.25898 17.7949C9.18384 17.8627 9.09574 17.9147 9 17.9475L6.75 18.8475V20.25C6.75 20.6478 6.90804 21.0294 7.18934 21.3107C7.47064 21.592 7.85218 21.75 8.25 21.75H15.75C16.1478 21.75 16.5294 21.592 16.8107 21.3107C17.092 21.0294 17.25 20.6478 17.25 20.25V18.8475L15 17.9475C14.815 17.8739 14.6668 17.7299 14.5881 17.547C14.5093 17.3642 14.5064 17.1575 14.58 16.9725C14.6536 16.7875 14.7977 16.6394 14.9805 16.5606C15.1634 16.4818 15.37 16.4789 15.555 16.5525L18.285 17.6475C18.4234 17.7026 18.5422 17.7977 18.6263 17.9206C18.7105 18.0434 18.7562 18.1886 18.7575 18.3375V20.25C18.7575 20.6446 18.6797 21.0353 18.5284 21.3998C18.3772 21.7643 18.1555 22.0953 17.8762 22.374C17.5968 22.6527 17.2652 22.8735 16.9004 23.0238C16.5355 23.1741 16.1446 23.251 15.75 23.25Z" fill="#666666" />
                                            <path d="M6.75 8.25C6.00832 8.25 5.2833 8.03007 4.66661 7.61801C4.04993 7.20596 3.56928 6.62029 3.28545 5.93507C3.00162 5.24984 2.92736 4.49584 3.07206 3.76841C3.21675 3.04098 3.5739 2.3728 4.09835 1.84835C4.6228 1.3239 5.29098 0.966752 6.01841 0.822057C6.74584 0.677362 7.49984 0.751625 8.18506 1.03545C8.87029 1.31928 9.45596 1.79993 9.86801 2.41661C10.2801 3.0333 10.5 3.75832 10.5 4.5C10.5 4.99246 10.403 5.48009 10.2146 5.93507C10.0261 6.39004 9.74987 6.80343 9.40165 7.15165C9.05343 7.49987 8.64004 7.7761 8.18506 7.96455C7.73009 8.15301 7.24246 8.25 6.75 8.25ZM6.75 2.25C6.30499 2.25 5.86998 2.38196 5.49997 2.6292C5.12996 2.87643 4.84157 3.22783 4.67127 3.63896C4.50098 4.0501 4.45642 4.5025 4.54324 4.93896C4.63005 5.37541 4.84434 5.77632 5.15901 6.09099C5.47368 6.40566 5.87459 6.61995 6.31105 6.70677C6.74751 6.79359 7.19991 6.74903 7.61104 6.57873C8.02217 6.40843 8.37358 6.12005 8.62081 5.75004C8.86804 5.38002 9 4.94501 9 4.5C9 3.90327 8.76295 3.33097 8.34099 2.90901C7.91904 2.48705 7.34674 2.25 6.75 2.25Z" fill="#666666" />
                                            <path d="M6 14.5425H3.75C2.95435 14.5425 2.19129 14.2265 1.62868 13.6638C1.06607 13.1012 0.75 12.3382 0.75 11.5425V10.23C0.749855 10.0798 0.794816 9.93303 0.879061 9.80867C0.963306 9.6843 1.08295 9.58811 1.2225 9.53253L3.615 8.59503C3.79721 8.5227 4.00049 8.52459 4.18132 8.60028C4.36215 8.67598 4.50615 8.81947 4.5825 9.00003C4.61903 9.09162 4.63715 9.18951 4.63581 9.2881C4.63447 9.3867 4.6137 9.48406 4.57469 9.57462C4.53568 9.66518 4.47919 9.74716 4.40846 9.81587C4.33774 9.88457 4.25415 9.93866 4.1625 9.97503L2.25 10.74V11.5425C2.25 11.9404 2.40804 12.3219 2.68934 12.6032C2.97064 12.8845 3.35218 13.0425 3.75 13.0425H6C6.19891 13.0425 6.38968 13.1215 6.53033 13.2622C6.67098 13.4029 6.75 13.5936 6.75 13.7925C6.75 13.9914 6.67098 14.1822 6.53033 14.3229C6.38968 14.4635 6.19891 14.5425 6 14.5425Z" fill="#666666" />
                                            <path d="M17.25 8.25C16.5083 8.25 15.7833 8.03007 15.1666 7.61801C14.5499 7.20596 14.0693 6.62029 13.7855 5.93507C13.5016 5.24984 13.4274 4.49584 13.5721 3.76841C13.7168 3.04098 14.0739 2.3728 14.5984 1.84835C15.1228 1.3239 15.791 0.966752 16.5184 0.822057C17.2458 0.677362 17.9998 0.751625 18.6851 1.03545C19.3703 1.31928 19.956 1.79993 20.368 2.41661C20.7801 3.0333 21 3.75832 21 4.5C21 5.49456 20.6049 6.44839 19.9017 7.15165C19.1984 7.85491 18.2446 8.25 17.25 8.25ZM17.25 2.25C16.805 2.25 16.37 2.38196 16 2.6292C15.63 2.87643 15.3416 3.22783 15.1713 3.63896C15.001 4.0501 14.9564 4.5025 15.0432 4.93896C15.1301 5.37541 15.3443 5.77632 15.659 6.09099C15.9737 6.40566 16.3746 6.61995 16.811 6.70677C17.2475 6.79359 17.6999 6.74903 18.111 6.57873C18.5222 6.40843 18.8736 6.12005 19.1208 5.75004C19.368 5.38002 19.5 4.94501 19.5 4.5C19.5 3.90327 19.2629 3.33097 18.841 2.90901C18.419 2.48705 17.8467 2.25 17.25 2.25Z" fill="#666666" />
                                            <path d="M20.25 14.5426H18C17.8011 14.5426 17.6103 14.4635 17.4697 14.3229C17.329 14.1822 17.25 13.9915 17.25 13.7926C17.25 13.5936 17.329 13.4029 17.4697 13.2622C17.6103 13.1216 17.8011 13.0426 18 13.0426H20.25C20.6478 13.0426 21.0294 12.8845 21.3107 12.6032C21.592 12.3219 21.75 11.9404 21.75 11.5426V10.7401L19.8375 9.99005C19.7458 9.95368 19.6623 9.8996 19.5915 9.83089C19.5208 9.76219 19.4643 9.68021 19.4253 9.58965C19.3863 9.49909 19.3655 9.40172 19.3642 9.30313C19.3629 9.20453 19.381 9.10664 19.4175 9.01505C19.4896 8.83042 19.6318 8.68181 19.8131 8.60171C19.9943 8.5216 20.2 8.51651 20.385 8.58755L22.7775 9.52505C22.917 9.58063 23.0367 9.67683 23.1209 9.80119C23.2052 9.92555 23.2501 10.0723 23.25 10.2226V11.5351C23.251 11.9296 23.1741 12.3206 23.0238 12.6854C22.8735 13.0502 22.6526 13.3819 22.374 13.6612C22.0953 13.9406 21.7643 14.1622 21.3998 14.3135C21.0353 14.4647 20.6446 14.5426 20.25 14.5426Z" fill="#666666" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_107912_155">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <h1 className='font-Poppins font-normal text-[16px] leading-[150%] tracking-normal pl-2 text-[rgba(0,0,0,0.6)]'>1,080</h1>
                                </div>
                                <div className="flex">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.7094 4.70994C22.6164 4.80367 22.5058 4.87806 22.384 4.92883C22.2621 4.9796 22.1314 5.00574 21.9994 5.00574C21.8674 5.00574 21.7367 4.9796 21.6148 4.92883C21.493 4.87806 21.3824 4.80367 21.2894 4.70994L20.9994 4.40994L14.8994 10.5199L11.9994 21.2599C11.9408 21.4781 11.8101 21.67 11.6285 21.8044C11.4469 21.9387 11.2252 22.0077 10.9994 21.9999C10.7898 22.0005 10.5853 21.9351 10.4148 21.8131C10.2443 21.6911 10.1165 21.5186 10.0494 21.3199L8.20941 15.7899L2.67941 13.9999C2.47243 13.9304 2.29391 13.7949 2.17112 13.6144C2.04833 13.4338 1.98802 13.218 1.99941 12.9999C1.99167 12.7742 2.06061 12.5524 2.19498 12.3709C2.32935 12.1893 2.52124 12.0585 2.73941 11.9999L13.4794 9.09994L19.5894 2.99994L19.2894 2.70994C19.1011 2.52164 18.9953 2.26624 18.9953 1.99994C18.9953 1.73364 19.1011 1.47824 19.2894 1.28994C19.4777 1.10164 19.7331 0.99585 19.9994 0.99585C20.2657 0.99585 20.5211 1.10164 20.7094 1.28994L22.7094 3.28994C22.8031 3.3829 22.8775 3.49351 22.9283 3.61536C22.9791 3.73722 23.0052 3.86793 23.0052 3.99994C23.0052 4.13195 22.9791 4.26266 22.9283 4.38452C22.8775 4.50638 22.8031 4.61698 22.7094 4.70994Z" fill="#666666" />
                                    </svg>
                                    <p className='font-Poppins font-normal text-[16px] leading-[150%] tracking-normal pl-2 text-[rgba(0,0,0,0.6)]'>1,080</p>
                                </div>
                                <div className="flex">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.0625 6.90002H3.9375C3 6.90002 2.25 7.65002 2.25 8.58752V15.45C2.25 16.3875 3 17.1375 3.9375 17.1375H20.0625C21 17.1375 21.75 16.3875 21.75 15.45V13.725C21.75 13.5375 21.6 13.35 21.4125 13.35C20.7 13.275 20.2125 12.7125 20.2125 12.0375C20.2125 11.3625 20.7375 10.8 21.4125 10.725C21.6 10.725 21.75 10.5375 21.75 10.35V8.62502C21.75 7.65002 21 6.90002 20.0625 6.90002ZM21 10.0125C20.1 10.2375 19.425 11.0625 19.425 12C19.425 12.9375 20.0625 13.7625 21 13.9875V15.4125C21 15.9375 20.5875 16.35 20.0625 16.35H16.95V15.4125C16.95 15.1875 16.8 15.0375 16.575 15.0375C16.35 15.0375 16.2 15.1875 16.2 15.4125V16.35H3.9375C3.4125 16.35 3 15.9375 3 15.4125V8.58752C3 8.06252 3.4125 7.65002 3.9375 7.65002H16.2V8.58752C16.2 8.81252 16.35 8.96252 16.575 8.96252C16.8 8.96252 16.95 8.81252 16.95 8.58752V7.65002H20.0625C20.5875 7.65002 21 8.06252 21 8.58752V10.0125Z" fill="#666666" />
                                        <path d="M16.5742 10.5C16.3492 10.5 16.1992 10.65 16.1992 10.875V13.125C16.1992 13.35 16.3492 13.5 16.5742 13.5C16.7992 13.5 16.9492 13.35 16.9492 13.125V10.875C16.9492 10.65 16.7617 10.5 16.5742 10.5Z" fill="#666666" />
                                    </svg>

                                    <p className='font-Poppins font-normal text-[16px] leading-[150%] tracking-normal pl-2 text-[rgba(0,0,0,0.6)]'>1,080</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-[1320px]  mx-auto px-3 pt-[155px] max-[991.98px]:pt-[100px]'>
                <div className="flex flex-row max-[991.98px]:flex-col  justify-between">
                    <div className="w-5/12 max-[991.98px]:w-full ">
                        <div className="flex flex-col">
                            <svg width="118" height="98" viewBox="0 0 118 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M50.9833 6.10352e-05C30.0734 1.46936 0.0165176 4.80778 0 45.7589V97.2826H46.6596V42.156H31.1663C30.1849 27.4361 42.3059 23.6353 55.4869 20.7176L50.9833 6.10352e-05ZM113.496 6.10352e-05C92.5861 1.46936 62.5293 4.80798 62.5129 45.7589V97.2826H109.173V42.156H93.6793C92.6978 27.436 104.819 23.6352 118 20.7175L113.496 6.10352e-05Z" fill="#2C49FE" />
                            </svg>
                            <p className="text-black/70 font-Poppins font-normal text-[16px] leading-[180%] tracking-normal">Semper faucibus suscipit ultricies eleifend semper sit tellus gravida pretium. Cras cursus ut semper eleifend tortor lectus tristique turpis. Laoreet amet ultrices est lectus accumsan nibh cursus nunc. Faucibus orci, neque, pretium, massa volutpat convallis nisl pellentesque. Gravida in ultrices vitae tortor. Dignissim viverra volutpat neque gravida aliquet urna faucibus viverra vulputate. nibh cursus nunc. Faucibus orci, neque, pretium, massa volutpat convallis nisl pellentesque. Gravida in ultrices vitae tortor. Dignissim viverra volutpat neque gravida aliquet urna faucibus viverra vulputate.</p>

                        </div>
                    </div>
                    <div className="7/12 max-[991.98px]:w-full max-[991.98px]:pt-5 ">
                        <div>
                            <iframe width="619" height="415" className="rounded-[30px] max-[991.98px]:w-full min-[991.98px]:ml-5 " src="https://www.youtube.com/embed/3LRZRSIh_KE?si=RQsDo1Y4l-7EkDZV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-[1320px]  mx-auto px-3 pt-[55px]  '>
                <div className="flex flex-col justify-center items-center">
                    <svg width="115" height="8" viewBox="0 0 115 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.609375" width="114.392" height="8" fill="#01C8FF" />
                        <rect width="101.005" height="8" fill="#2C49FE" />
                    </svg>
                    <h1 className="font-poppins font-semibold text-[48px] leading-[150%] tracking-normal  text-black">Gallery</h1>
                </div>

                <div class="bg-white flex items-center justify-center min-h-screen p-3">
                    <div>
                        <div class="grid grid-cols-3 grid-rows-3 gap-4 max-[556.98px]:flex max-[556.98px]:flex-col max-[556.98px]:h-full max-w-[1320px] h-[1002px] w-full">
                            <div class="rounded-2xl overflow-hidden"><img src={grid1} alt="image"
                                class="w-full h-full object-cover" /></div>
                            <div class="rounded-2xl overflow-hidden"><img src={grid2} alt="image"
                                class="w-full h-full object-cover" /></div>
                            <div class="row-span-2 rounded-2xl overflow-hidden"><img src={grid3}
                                alt="image" class="w-full h-full object-cover" /></div>
                            <div class="col-span-2 rounded-2xl overflow-hidden"><img src={grid4}
                                alt="image" class="w-full h-full object-cover" /></div>
                            <div class="rounded-2xl overflow-hidden"><img src={grid5} alt="image"
                                class="w-full h-full object-cover" /></div>
                            <div class="col-span-2 rounded-2xl overflow-hidden"><img src={grid6}
                                alt="image" class="w-full h-full object-cover" /></div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='max-w-[1320px]  mx-auto px-3 pt-[67px]'>
                <div className="flex flex-col justify-center items-center">
                    <svg width="115" height="8" viewBox="0 0 115 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.609375" width="114.392" height="8" fill="#01C8FF" />
                        <rect width="101.005" height="8" fill="#2C49FE" />
                    </svg>
                    <h1 className="font-poppins font-semibold text-[48px] leading-[150%] tracking-normal  text-black">Tell Us!</h1>
                    <p className="font-Poppins font-normal text-base leading-[150%] tracking-[0px] text-center text-black/70 max-w-[719px] pb-[47px] pt-[17px]">Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.</p>
                </div>
                <div className="flex items-center gap-3 rounded-[80px] border border-[rgba(0,0,0,0.2)] py-2 px-3 min-[991.98px]:ml-6">

                    <img className="max-w-[55px]" src={girl} alt="girl" />

                    <input
                        type="text"
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleAddComment();
                            }
                        }}
                        placeholder="Add a new comment"
                        className="flex-1 max-[556.98px]:w-[100px] outline-none min-[556.98px]:pl-[21px] font-Poppins font-normal text-[20px] max-[556.98px]:text-[11px] leading-[150%] tracking-normal"
                    />

                    <button
                        type="submit"
                        onClick={handleAddComment}

                        className=" duration-500    transition-transform     active:scale-80 post-comment font-Poppins font-semibold cursor-pointer max-[556.98px]:text-[12px] max-text-[20px] leading-[150%] max-w-full h-14 rounded-[36px] px-7 max-[556.98px]:px-4 max-[556.98px]:py-[5px] py-[11px] bg-[#2C49FE] text-white flex items-center justify-center gap-2.5"
                    >
                        Post Comment
                    </button>

                </div>


                {comments.map((item) => (

                    <div key={item.id} className="flex  flex-col pb-10">
                        <div className="flex pt-[34px] gap-4 pl-6">
                            <img src={item.avatar} className="w-14 h-14" alt="girl" />
                            <div className="w-full flex-col bg-[#F1F2F5] flex gap-2.5 pt-3.5 pr-5 pb-5 pl-5 rounded-br-[20px] rounded-bl-[20px] rounded-tr-[20px]">
                                <h1 className="font-Poppins font-medium text-[16px] leading-[150%] tracking-[0%] text-black">{item.user}</h1>
                                <p className="font-Poppins font-normal text-[16px] leading-[150%] tracking-[0%] text-black">{item.text}</p>
                            </div>
                        </div>

                        <button
                            onClick={() => handleRemoveComment(item.id)}
                            className=" remove cursor-pointer flex flex-row pl-24 pt-2 ">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.6">
                                    <path d="M21.5 6C21.5 6.24493 21.41 6.48134 21.2473 6.66437C21.0845 6.84741 20.8603 6.96434 20.617 6.993L20.5 7H19.655L18.424 19.52C18.357 20.1994 18.0397 20.8295 17.5338 21.2879C17.0279 21.7462 16.3697 22.0001 15.687 22H8.313C7.63035 22.0001 6.97207 21.7462 6.4662 21.2879C5.96033 20.8295 5.64302 20.1994 5.576 19.52L4.345 7H3.5C3.23478 7 2.98043 6.89464 2.79289 6.70711C2.60536 6.51957 2.5 6.26522 2.5 6C2.5 5.73478 2.60536 5.48043 2.79289 5.29289C2.98043 5.10536 3.23478 5 3.5 5H8.5C8.5 4.54037 8.59053 4.08525 8.76642 3.66061C8.94231 3.23597 9.20012 2.85013 9.52513 2.52513C9.85013 2.20012 10.236 1.94231 10.6606 1.76642C11.0852 1.59053 11.5404 1.5 12 1.5C12.4596 1.5 12.9148 1.59053 13.3394 1.76642C13.764 1.94231 14.1499 2.20012 14.4749 2.52513C14.7999 2.85013 15.0577 3.23597 15.2336 3.66061C15.4095 4.08525 15.5 4.54037 15.5 5H20.5C20.7652 5 21.0196 5.10536 21.2071 5.29289C21.3946 5.48043 21.5 5.73478 21.5 6ZM14.25 9.25C14.0688 9.25001 13.8937 9.31564 13.7571 9.43477C13.6205 9.55389 13.5316 9.71845 13.507 9.898L13.5 10V17L13.507 17.102C13.5317 17.2815 13.6206 17.446 13.7571 17.5651C13.8937 17.6842 14.0688 17.7498 14.25 17.7498C14.4312 17.7498 14.6063 17.6842 14.7429 17.5651C14.8794 17.446 14.9683 17.2815 14.993 17.102L15 17V10L14.993 9.898C14.9684 9.71845 14.8795 9.55389 14.7429 9.43477C14.6063 9.31564 14.4312 9.25001 14.25 9.25ZM9.75 9.25C9.56876 9.25001 9.39366 9.31564 9.25707 9.43477C9.12048 9.55389 9.03165 9.71845 9.007 9.898L9 10V17L9.007 17.102C9.0317 17.2815 9.12055 17.446 9.25714 17.5651C9.39372 17.6842 9.5688 17.7498 9.75 17.7498C9.9312 17.7498 10.1063 17.6842 10.2429 17.5651C10.3794 17.446 10.4683 17.2815 10.493 17.102L10.5 17V10L10.493 9.898C10.4684 9.71845 10.3795 9.55389 10.2429 9.43477C10.1063 9.31564 9.93124 9.25001 9.75 9.25ZM12 3.5C11.6022 3.5 11.2206 3.65804 10.9393 3.93934C10.658 4.22064 10.5 4.60218 10.5 5H13.5C13.5 4.60218 13.342 4.22064 13.0607 3.93934C12.7794 3.65804 12.3978 3.5 12 3.5Z" fill="black" />
                                </g>
                            </svg>
                            <h1 className=" text-black/70 font-poppins font-normal text-[16px] leading-[150%] tracking-[0%]">Remove Comment</h1>
                        </button>
                    </div>
                ))}

                <div>


                </div>
            </div>
            <div className="pt-[104px]">
                <Footer />
            </div>




        </section>

    );
}












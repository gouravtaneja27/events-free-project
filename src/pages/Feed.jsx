import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import man from "../assets/man.png"
import small from "../assets/small-card.png"
import small2 from "../assets/small-card2.png"
import girl from "../assets/girl.png"
import girl3 from "../assets/girl3.png"
import girl4 from "../assets/girl4.png"
import girl2 from "../assets/girl2.png"
import party1 from "../assets/party-1.png"
import party2 from "../assets/party-2.png"
import party3 from "../assets/party-3.png"
import party4 from "../assets/party-4.png"
import dp1 from "../assets/dp-1.png"
import dp2 from "../assets/dp-2.png"
import dp3 from "../assets/dp-3.png"
import dp4 from "../assets/dp-4.png"

export default function Feed() {
    const cards = Array(5).fill(0);

    const [commentText, setCommentText] = useState({});

    const [postComments, setPostComments] = useState({
        0: [
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
        ],
    });


    const [showComments, setShowComments] = useState({});
    const handleRemoveComment = (postIndex, commentId) => {
        setPostComments(prev => ({
            ...prev,
            [postIndex]: prev[postIndex].filter(
                (item) => item.id !== commentId
            ),
        }));
    };

    const navLinkClass = ({ isActive }) =>
        `font-poppins font-semibold text-[16px] transition-all duration-200 hover:text-white
   ${isActive ? " text-black" : "text-black/70"}`

    const handleAddComment = (index) => {
        if (!commentText[index]?.trim()) return;

        const avatars = [girl2, girl3, girl4, dp1, dp2, dp3, dp4];

        const newComment = {
            id: Date.now(),
            user: "Username",
            text: commentText[index],
            avatar: avatars[Math.floor(Math.random() * avatars.length)],
        };

        setPostComments(prev => ({
            ...prev,
            [index]: [...(prev[index] || []), newComment],
        }));

        setCommentText(prev => ({
            ...prev,
            [index]: "",
        }));
    };

    const [likesData, setLikesData] = useState(
        cards.map(() => ({
            liked: false,
            count: 10,
        }))
    );

    const handleLike = (index) => {
        setLikesData(prev =>
            prev.map((item, i) =>
                i === index
                    ? {
                        liked: !item.liked,
                        count: item.liked ? item.count - 1 : item.count + 1,
                    }
                    : item
            )
        );
    };

    return (



        <section>

            <div className="max-w-[1320px] mx-auto px-3">
                <Navbar />
            </div>
            <div className='max-w-[1320px]  mx-auto px-3'>
                <div className='flex flex-row px-3 flex-wrap -mx-3 mt-[67px] '>
                    <div className='flex flex-row max-[1064.98px]:flex-col gap-[62px] '>
                        <div className=' max-[1064.98px]:px-[100px] max-[767.98px]:px-[30px]  max-sm:px-2.5'>
                            <img src={man} alt="image" className='w-full h-full' />
                        </div>
                        <div className='flex flex-col max-[1064.98px]:items-center '>
                            <span className="  text-black/60 font-Poppins font-normal text-[16px] leading-[150%] tracking-[0] ">{`Home > Feed`}</span>
                            <h3 className=' text-black font-Poppins font-semibold text-[48px] leading-[150%] tracking-[0] pt-3 pb-4'>
                                Jhone Doe
                            </h3>
                            <p className=' max-[1064.98px]:text-center  max-[1064.98px]:max-w-full max-w-[862px] text-black/60 font-Poppins font-normal text-[16px] leading-[150%] tracking-[0]'>Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.</p>
                            <small className='pt-[29px] pb-[17px] text-black/60 font-Poppins font-semibold text-[16px] leading-[150%] tracking-[0] '>Following Events :</small>
                            <div className='flex gap-5 max-[570px]:flex-col   max-[991.98px]:justify-center'>
                                <div className='flex flex-row max-[1065px]:flex-col max-[1064.98px]:flex-row max-[700px]:flex-col gap-5 max-[700px]:w-full'>
                                    <article className='card py-[13px] pl-[13px] pr-[19px] hover:shadow-[2px_9px_32px_0px_rgba(0,0,0,0.16)] shadow-[2px_9px_32px_0px_rgba(0,0,0,0.06)] rounded-[20px]'>
                                        <div className='flex flex-row items-center gap-[13px]'>
                                            <img src={small} alt="card" className='w-[114px] h-28' />
                                            <div className='flex flex-col gap-[5px]'>
                                                <h4 className='font-Poppins font-bold text-[16px] leading-[100%] tracking-[0] text-black'>Augue etiam</h4>
                                                <p className='max-[570px]:max-w-full max-w-[163px] font-Poppins font-normal text-[12px] leading-[100%] tracking-[0] text-[#666666]'>Quis et id urna sagittis. Enim lacus, felis, libero sed nisl vitae blandit sociis.</p>
                                            </div>
                                        </div>
                                    </article>
                                    <article className='card py-[13px] pl-[13px] pr-[19px] hover:shadow-[2px_9px_32px_0px_rgba(0,0,0,0.16)] shadow-[2px_9px_32px_0px_rgba(0,0,0,0.06)] rounded-[20px]' >
                                        <div className='flex flex-row items-center gap-[13px]'>
                                            <img src={small2} alt="card2" className='w-[114px] h-28' />
                                            <div className='flex flex-col gap-[5px]'>
                                                <h4 className='font-Poppins font-bold text-[16px] leading-[100%] tracking-[0] text-black'>Augue etiam</h4>
                                                <p className='max-[570px]:max-w-full max-w-[163px] font-Poppins font-normal text-[12px] leading-[100%] tracking-[0] text-[#666666]'>Quis et id urna sagittis. Enim lacus, felis, libero sed nisl vitae blandit sociis.</p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <button className='flex flex-col pl-[55px] pr-[55px] font-Poppins pt-[30px] pb-[30px]  hover:shadow-[2px_9px_32px_0px_rgba(0,0,0,0.16)] shadow-[2px_9px_32px_0px_rgba(0,0,0,0.06)] bg-[rgba(44,73,254,0.1)] rounded-[20px] items-center justify-center max-[700px]:w-full'><span className='text-black/60 font-[Poppins] font-semibold text-[36px] leading-[150%] tracking-[0]'>+15</span>
                                    <span className='text-black/60 font-Poppins font-normal text-[16px] leading-[150%] tracking-[0]'>more</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-[1320px] mx-auto px-3 pt-[79px]">
                <div className="max-[991.98px]:flex  max-[991.98px]:flex-col  max-[991.98px]:items-center">
                    <svg width="189" height="8" viewBox="0 0 189 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" width="188" height="8" fill="#01C8FF" />
                        <rect width="166" height="8" fill="#2C49FE" />
                    </svg>
                    <h1 className="font-poppins font-semibold text-[48px] leading-[150%] tracking-normal">New Posts</h1>
                </div>


                {cards.map((_, index) => (
                    <div className="mb-10  flex  flex-col pt-[41px] min-[991.98px]:pr-[34px] max-w-[1320px] rounded-[30px] hover:bg-white hover:shadow-[2px_9px_32px_0px_rgba(0,0,0,0.16)] shadow-[2px_9px_32px_0px_rgba(0,0,0,0.06)]">

                        <div className=" flex  flex-row max-[991.98px]:flex-col  max-[991.98px]:items-center ">
                            <div className="w-5/12 max-[991.98px]:w-full max-[991.98px]:items-center flex flex-col ">
                                <div className="flex flex-row pl-[34px] max-[991.98px]:items-center   ">
                                    <img src={girl} alt="gir" />
                                    <div className="pl-[34px]">
                                        <h1 className="text-black font-Poppins font-semibold text-[24px] leading-[150%] tracking-normal">Username</h1>
                                        <p className="font-Poppins font-normal text-[16px] leading-[150%] tracking-normal max-w-[344px] text-[#666666] ">Post event name</p>
                                    </div>
                                </div>
                                <div className="pl-[34px]">
                                    <h1 className=" [991.98px]:[561px] pt-[45px] text-black font-poppins font-semibold text-[24px] leading-[150%] tracking-normal    ">Fusce adipiscing nunc et tellus eu, tristique sodales sit aliquet.</h1>
                                    <div className='flex pt-2.5 '>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.6">
                                                <path d="M7 11H9V13H7V11ZM7 15H9V17H7V15ZM11 11H13V13H11V11ZM11 15H13V17H11V15ZM15 11H17V13H15V11ZM15 15H17V17H15V15Z" fill="black" />
                                                <path d="M5 22H19C20.103 22 21 21.103 21 20V6C21 4.897 20.103 4 19 4H17V2H15V4H9V2H7V4H5C3.897 4 3 4.897 3 6V20C3 21.103 3.897 22 5 22ZM19 8L19.001 20H5V8H19Z" fill="black" />
                                            </g>
                                        </svg>
                                        <h1 className='font-Poppins font-normal text-[16px] leading-[150%] tracking-normal pl-2  text-[rgba(0,0,0,0.6)]'>10/02/2022</h1>
                                    </div>
                                    <p className=" font-Poppins max-[991.98px]:items-center [553px] font-normal pt-5 text-[16px] leading-[150%] tracking-normal text-[#666666] ">Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.</p>
                                    <div className="flex gap-10 pt-[26px]">
                                        <div
                                            className="flex items-center cursor-pointer"
                                            onClick={() => handleLike(index)}
                                        >
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill={likesData[index].liked ? "red" : "none"}
                                                xmlns="http://www.w3.org/2000/svg"
                                                stroke={likesData[index].liked ? "red" : "black"}
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M7.5 4C4.4625 4 2 6.4625 2 9.5C2 15 8.5 20 12 21.163C15.5 20 22 15 22 9.5C22 6.4625 19.5375 4 16.5 4C14.64 4 12.995 4.9235 12 6.337Z" />
                                            </svg>

                                            <h1 className="text-[#666666] font-Poppins font-normal text-[16px] leading-[150%] tracking-normal ml-2">
                                                {likesData[index].count}
                                            </h1>
                                        </div>

                                        <div onClick={() =>
                                            setShowComments(prev => ({
                                                ...prev,
                                                [index]: !prev[index],
                                            }))
                                        }

                                            className="flex gap-3.5 cursor-pointer items-center justify-center massage   duration-500    transition-transform     active:scale-90">
                                            <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.75018 8.25C5.92049 8.25 5.25018 8.92031 5.25018 9.75C5.25018 10.5797 5.92049 11.25 6.75018 11.25C7.57987 11.25 8.25018 10.5797 8.25018 9.75C8.25018 8.92031 7.57987 8.25 6.75018 8.25ZM12.0002 8.25C11.1705 8.25 10.5002 8.92031 10.5002 9.75C10.5002 10.5797 11.1705 11.25 12.0002 11.25C12.8299 11.25 13.5002 10.5797 13.5002 9.75C13.5002 8.92031 12.8299 8.25 12.0002 8.25ZM17.2502 8.25C16.4205 8.25 15.7502 8.92031 15.7502 9.75C15.7502 10.5797 16.4205 11.25 17.2502 11.25C18.0799 11.25 18.7502 10.5797 18.7502 9.75C18.7502 8.92031 18.0799 8.25 17.2502 8.25ZM12.0002 0C5.37206 0 0.000181322 4.36406 0.000181322 9.75C0.000181322 11.9812 0.932994 14.025 2.47987 15.6703C1.78143 17.5172 0.328306 19.0828 0.304869 19.1016C-0.00450618 19.4297 -0.0888812 19.9078 0.0892438 20.3203C0.267369 20.7328 0.675181 21 1.12518 21C4.00799 21 6.28143 19.7953 7.64549 18.8297C9.00018 19.2563 10.4627 19.5 12.0002 19.5C18.6283 19.5 24.0002 15.1359 24.0002 9.75C24.0002 4.36406 18.6283 0 12.0002 0ZM12.0002 17.25C10.7486 17.25 9.51112 17.0578 8.32518 16.6828L7.26112 16.3453L6.34706 16.9922C5.67674 17.4656 4.75799 17.9953 3.65174 18.3516C3.99393 17.7844 4.32674 17.1469 4.58456 16.4672L5.08143 15.15L4.11581 14.1281C3.26737 13.2234 2.25018 11.7281 2.25018 9.75C2.25018 5.61563 6.62362 2.25 12.0002 2.25C17.3767 2.25 21.7502 5.61563 21.7502 9.75C21.7502 13.8844 17.3767 17.25 12.0002 17.25Z" fill="black" />
                                            </svg>

                                            <h1 className="text-[#666666] flex font-Poppins font-normal text-[16px] leading-[150%] tracking-normal">      {postComments[index]?.length || 0}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-7/12 min-[991.98px]:pl-[58px] max-[991.98px]:px-3 max-[991.98px]:pt-10 max-[991.98px]:w-full">
                                <div className="flex max-[991.98px]:gap-5 max-[668px]:gap-3 gap-7  ">
                                    <div className="w-1/2 ">
                                        <div className="flex flex-col w-full max-[991.98px]:gap-5 max-[668px]:gap-3 gap-[30px]">
                                            <img src={party1} alt="party" />
                                            <img src={party3} alt="party" />
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        <div className="flex flex-col w-full max-[668px]:gap-3 max-[991.98px]:gap-5 gap-[30px]">
                                            <img src={party2} alt="party" />

                                            <div className='relative max-[1024px]:w-full'>
                                                <img src={party4} alt="image-two" className='w-full' />
                                                <div className='absolute right-[9px] bottom-[11px] min-[370px]:right-[3px] min-[370px]:bottom-[5px]'>
                                                    <button className='flex flex-col px-5 py-[11px] bg-[#FFFFFF] rounded-[20px] items-center justify-center cursor-pointer'>
                                                        <span className='text-black/60 font-[Poppins] font-semibold min-[370px]:text-[36px]'>+15</span>
                                                        <span className='text-black/60 font-[Poppins] text-[16px]'>more</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-[1320px]   px-3 ">
                            <div className=" min-[999.98px]:pl-6 pt-[33px] pb-[26px] max-w-[1320px] mx-auto">
                                <div className="w-full h-px bg-black opacity-20"></div>
                            </div>

                            {showComments[index] && (

                                <>
                                    <div className="flex min-[999.98px]:ml-6 items-center gap-3 rounded-[80px] border border-[rgba(0,0,0,0.2)] max-[556.98px]:px-1  py-2 px-3 mb-10  ">

                                        <img src={girl2} alt="girl" />

                                        <input
                                            type="text"
                                            value={commentText[index] || ""}
                                            onChange={(e) =>
                                                setCommentText(prev => ({
                                                    ...prev,
                                                    [index]: e.target.value,
                                                }))
                                            }
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") {
                                                    handleAddComment(index);
                                                }
                                            }}
                                            placeholder="Add a new comment"
                                            className="flex-1 max-[556.98px]:w-[100px] outline-none min-[556.98px]:pl-[21px] font-Poppins font-normal text-[20px] max-[556.98px]:text-[11px] leading-[150%] tracking-normal"
                                        />

                                        <button
                                            type="submit"
                                            onClick={() => handleAddComment(index)}


                                            className=" post-comment font-Poppins cursor-pointer font-semibold max-[556.98px]:text-[12px] max-text-[20px] leading-[150%] max-w-full h-14 rounded-[36px] px-7 max-[556.98px]:px-4 max-[556.98px]:py-[5px] py-[11px] bg-[#2C49FE] text-white flex items-center justify-center gap-2.5   duration-500    transition-transform     active:scale-80"
                                        >
                                            Post Comment
                                        </button>

                                    </div>



                                    {postComments[index]?.map((item) => (

                                        <div key={item.id} className="flex  flex-col pb-10">
                                            <div className="flex pt-[34px] gap-4 pl-6">
                                                <img src={item.avatar} className="w-14 h-14" alt="girl" />
                                                <div className="w-full flex-col bg-[#F1F2F5] flex gap-2.5 pt-3.5 pr-5 pb-5 pl-5 rounded-br-[20px] rounded-bl-[20px] rounded-tr-[20px]">
                                                    <h1 className="font-Poppins font-medium text-[16px] leading-[150%] tracking-[0%] text-black">{item.user}</h1>
                                                    <p className="font-Poppins font-normal text-[16px] leading-[150%] tracking-[0%] text-black">{item.text}</p>
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => handleRemoveComment(index, item.id)}
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




                                </>
                            )}
                        </div>


                    </div>
                ))}



            </div>
            <div className="pt-[104px]">
                <Footer />
            </div>

        </section>

    );
}




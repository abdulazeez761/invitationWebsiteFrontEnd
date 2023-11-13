import React, { useState } from 'react';
import { useDispatch } from "react-redux"
import { login } from '../featurs/userSlice'
import { useSelector } from 'react-redux';
import { selectUser } from '../featurs/userSlice';



const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is zero-based, so add 1
const day = String(currentDate.getDate()).padStart(2, '0');

const formattedDateTime = `${year}-${month}-${day}`;
const QRCodeGenerator = () => {
    const user = useSelector(state => state.user);
   
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        company: '',
        JobTitle: '',
        phone: '',
        date: formattedDateTime,
    });
    const [submited, setSubmited] = useState(false)
    const [wating, setwating] = useState(false);
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        company: '',
        JobTitle: '',
        phone: '',
    });
    const dispatch = useDispatch();
    const generateQRCode = async () => {
        dispatch(login({
            name: userInfo.name,
            email: userInfo.email,
            loggedIn: true,
        }))
        // Validate form fields
        const validationErrors = {};
        let isValid = true;

        if (!userInfo.name.trim()) {
            validationErrors.name = 'Name is required';
            isValid = false;
        }

        if (!userInfo.email.trim()) {
            validationErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(userInfo.email)) {
            validationErrors.email = 'Invalid email format';
            isValid = false;
        }

        if (!userInfo.company.trim()) {
            validationErrors.company = 'Company is required';
            isValid = false;
        }

        if (!userInfo.JobTitle.trim()) {
            validationErrors.JobTitle = 'Job Title is required';
            isValid = false;
        }

        if (!userInfo.phone.trim()) {
            validationErrors.phone = 'Phone Number is required';
            isValid = false;
        }

        if (!isValid) {
            setErrors(validationErrors);
            return;
        }

        // If the form is valid, proceed with API call
        setwating(true);
        await fetch('https://inviterwebsitebackend-production.up.railway.app/generateQRCode', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo),
        })
            .then((response) => response.json())
            .then((data) => {
           
                setUserInfo({
                    name: '',
                    email: '',
                    company: '',
                    JobTitle: '',
                    phone: '',
                });
                setErrors({
                    name: '',
                    email: '',
                    company: '',
                    JobTitle: '',
                    phone: '',
                });
                setSubmited(true);
                setwating(false);
            })
            .catch((error) => {
                console.log(error);
                setwating(false);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    return (
        <>
            <section className="bg-hero-pattern bg-cover tablet:h-[60vh] md:h-[65vh]   lg:h-[100vh]  relative overflow-hidden rounded-lg  bg-no-repeat p-12 text-center">
                <div className="tablet:mt-[40px] lg:mt-[200px] max-w-screen-xl  py-16 flex flex-col   md:gap-0 md:py-0  text-start">
                    <h1 className="md:text-[23px]  lg:text-[30px] tablet:text-[20px] mb-2 lg:mt-20 md:mt-7 text-white">
                        We Vienna Advantage build business applications with minimum coding
                    </h1>
                    <p className="mb-8  lg:mt-20 md:mt-7 text-lg font-normal text-white md:text-[17px]  lg:text-[20px] mx-tablet:text-[15px]  ">
                        Here at Vienna Advantage Arabia, we focus on one unified business management suite supporting your transformation towards an intelligent enterprise.
                    </p>
                    <div className="lg:mt-20 md:mt-7  space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <a
                            href="#"
                            className="inline-flex justify-center items-center py-4 px-20 text-base 
                            font-bold
                            text-center
                          text-black  
                            rounded-lg bg-white hover:bg-gray-400 
                          focus:ring-blue-300 "
                        >
                            Get started
                            <svg
                                className="w-3.5 h-3.5 ml-2  text-blue-800"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="inline-flex justify-center items-center py-4 px-20 text-base 
                            font-bold
                            text-center
                          text-black  
                            rounded-lg bg-white hover:bg-gray-400 
                          focus:ring-blue-300 "
                        >
                            Learn more
                        </a>
                    </div>
                </div>
            </section >

            <div className='max-w-[1240px] mx-auto flex flex-col my-9 '>
                <div className='flex items-start justify-around flex-wrap '>

                    <div className='w-[59%]'>
                        <p className='text-[17px] text-gray-900 dark:text-black  '> Dears Guests, <br /> <br />
                            Welcome to VIENNA Advantage Launch Event hosted by Vienna Advantage Arabia! We are absolutely delighted to have you with us on<strng className="font-bold"> Sunday, November 26, 08:00 AM –03:15 PM. </strng>  Your presence adds immense value and significance to this occasion. <br /> <br />
                            As you step into our world, we hope you feel the warmth of our hospitality and the excitement that fills the air. This event hasbeen crafted with precision and passion, aiming to inspire, connect, and create lasting impressions. <br /> <br />
                            Your participation is not just a moment in our timeline; it's an essential part of our story. Your insights, experiences, andinteractions will color this event and make it truly memorable. <br /> <br />
                            We encourage you to explore, engage, and savor every moment. The agenda is designed to offer you an insightful and delightful experience, brimming with opportunities to network, learn, and enjoy. <br /> <br />
                            We encourage you to explore, engage, and savor every moment. The agenda is designed to offer you an insightful and delightful experience, brimming with opportunities to network, learn, and enjoy. <br /> <br />
                            Welcome to a day filled with innovation, camaraderie, and the spirit of <strng className="font-extrabold">Vienna Advantage Arabia. </strng> We hope you leave not only inspired but also connected to the vision we proudly uphold.</p>
                        <p className='text-base text-[#757575] font-bold my-5 '>Register today - space is limited!</p>
                    </div>

                    <div className='bg-blue-50	 flex flex-col  w-[400px]'>
                        <div className='w-[100%] h-[70px] bg-blue-700 text-center  font-thin leading-6'>
                            <p className='mt-1 px-3 py-2  text-3xl text-white  font-sans-serif' > save your spot </p>
                        </div>
                        {
                            (submited || user?.loggedIn) ? <p className='text-1xl my-9 p-4 text-gray-900 dark:text-black font-sans-serif'>
                                Thank you for Registration You will receive an email with a qr code.
                            </p> : <>
                                <div className='my-9 mx-9'>
                                    <label>Name:</label>
                                    <input className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' type="text" name="name" onChange={handleChange} value={userInfo.name} />
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                </div>
                                <div className='my-9 mx-9' >
                                    <label>Email:</label>
                                    <input type="text" name="email" className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:borplaceholderder-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' onChange={handleChange} value={userInfo.email} />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>
                                <div className='my-9 mx-9'>
                                    <label>Company:</label>
                                    <input type="text" name="company" className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' onChange={handleChange} value={userInfo.company} />
                                    {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                                </div>
                                <div className='my-9 mx-9'>
                                    <label>Job Title:</label>
                                    <input type="text" name="JobTitle" className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' onChange={handleChange} value={userInfo.JobTitle} />
                                    {errors.JobTitle && <p className="text-red-500 text-sm mt-1">{errors.JobTitle}</p>}
                                </div>
                                <div className='my-9 mx-9'>
                                    <label>Phone Number:</label>
                                    <input type="text" name="phone" className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' onChange={handleChange} value={userInfo.phone} />
                                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                </div>
                                <button class="inline-flex justify-center items-center py-3 my-9 mx-9  px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800  " onClick={generateQRCode}>{wating ? <div role="status">
                                    <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                    <span class="sr-only">Loading...</span>
                                </div> : <p>Register</p>} </button></>

                        }
                    </div>
                </div >
            </div >
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-300 " />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://www.viennaadvantage.com/" class="hover:underline">VIENNA Advantage</a>. All Rights Reserved.</span>
            </div>
        </>
    );
};

export default QRCodeGenerator;

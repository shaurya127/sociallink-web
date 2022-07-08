import React, { useEffect } from 'react';
import Mockup from '../assets/images/social-mockup.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGooglePlay } from 'react-icons/fa';
import { FaAppStoreIos } from 'react-icons/fa';

const Home = () => {
 
  return (
    <div className='h-screen'>
      <div className='bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 h-screen grid grid-row-2 md:grid-cols-2 gap-4 px-10 py-8 md:py-0'>
        <div className='flex items-center justify-center'>
          <div className='p-4'>
            
            <h1
              className='bg-gradient-to-r bg-clip-text text-transparent 
            from-teal-300  via-yellow-300 to-green-300 animate-text text-4xl md:text-8xl my-4 mx-2 font-semibold'
            >
              Social Link
            </h1>
            <p className='text-violet-100 text-md md:text-lg my-4 mx-2'>
              It’s a fresh take on anonymity. We believe anonymity should be a
              fun yet safe place to express your feelings and opinions without
              shame. Young people don’t have a space to share their feelings
              without judgement from friends or societal pressures. NGL provides
              this safe space for teens.
            </p>
            <div className='download-buttons w-full flex flex-row'>
              <a href='/app' target='_blank' className='ios-download-link'>
                <img
                  src='https://uploads-ssl.webflow.com/62a6e19b906fa55f541799d7/62a6e36e6a31c835ec16d16b_Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917%201.png'
                  alt='ios-store'
                  className='ios-download'
                />
              </a>
              <a href='/app' target='_blank' className='android-download-link'>
                <img
                  src='https://uploads-ssl.webflow.com/62a6e19b906fa55f541799d7/62a6e3de10ae34ace77a2fdb_en_badge_web_generic%201.png'
                  alt='android-store'
                  className='android-download'
                />
              </a>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center row-start-1 md:col-start-2'>
          <img
            src={Mockup}
            alt='mockup'
            className='h-96 mockup-img animate-wiggle'
          />
        </div>
      </div>
      <div className='bg-gradient-to-b from-pink-100 via-white to-purple-100 h-screen flex items-center justify-center'>
        <div className='w-3/5 h-full flex flex-col items-center justify-center'>
          <h1 className='text-black text-4xl md:text-8xl my-4 mx-2 font-semibold'>
            Hello World
          </h1>
          <p className='text-black text-md md:text-lg my-4 mx-2 text-center'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
            deleniti quo eaque repudiandae nihil velit id sequi assumenda,
            fugiat aliquid neque voluptates quis reiciendis laudantium
            distinctio quidem numquam repellendus nobis, libero accusamus. Quas
            aperiam ipsa velit dignissimos reprehenderit eveniet, sit itaque
            aspernatur temporibus sint unde nesciunt voluptas, beatae ducimus
            praesentium culpa incidunt est veritatis?
          </p>
        </div>
      </div>
      <div className='bg-gradient-to-b from-purple-100 via-white to-violet-100 h-screen flex items-center justify-center'>
        <div className='w-3/5 h-full flex flex-col items-center justify-center'>
          <h1 className='text-black text-4xl md:text-8xl my-4 mx-2 font-semibold'>
            Hii World
          </h1>
          <p className='text-black text-md md:text-lg my-4 mx-2 text-center'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
            deleniti quo eaque repudiandae nihil velit id sequi assumenda,
            fugiat aliquid neque voluptates quis reiciendis laudantium
            distinctio quidem numquam repellendus nobis, libero accusamus. Quas
            aperiam ipsa velit dignissimos reprehenderit eveniet, sit itaque
            aspernatur temporibus sint unde nesciunt voluptas, beatae ducimus
            praesentium culpa incidunt est veritatis?
          </p>
        </div>
      </div>
      <div className='bg-gradient-to-b from-violet-100 via-white to-indigo-100 h-screen flex items-center justify-center'>
        <div className='w-3/5 h-full flex flex-col items-center justify-center'>
          <h1 className='text-black text-4xl md:text-8xl my-4 mx-2 font-semibold'>
            Bye World
          </h1>
          <p className='text-black text-md md:text-lg my-4 mx-2 text-center'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
            deleniti quo eaque repudiandae nihil velit id sequi assumenda,
            fugiat aliquid neque voluptates quis reiciendis laudantium
            distinctio quidem numquam repellendus nobis, libero accusamus. Quas
            aperiam ipsa velit dignissimos reprehenderit eveniet, sit itaque
            aspernatur temporibus sint unde nesciunt voluptas, beatae ducimus
            praesentium culpa incidunt est veritatis?
          </p>
        </div>
      </div>
      <div className='w-full h-24 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 flex flex-col items-center justify-center'>
        <div className='social-icons flex flex-row items-center justify-around w-3/5'>
          <FaLinkedin
            size={40}
            color='white'
            className='bg-gradient-to-r hover:from-cyan-500 hover:to-blue-700'
          />
          <FaGithub
            size={40}
            color='white'
            className='bg-gradient-to-r hover:from-gray-500 hover:to-blue-900'
          />
          <FaInstagram
            size={40}
            color='white'
            className='bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500'
          />
          <FaAppStoreIos
            size={40}
            color='white'
            className='bg-gradient-to-r hover:from-cyan-500 hover:to-teal-500'
          />
          <FaGooglePlay
            size={40}
            color='white'
            className='bg-gradient-to-r hover:from-cyan-500 hover:via-green-500 hover:to-yellow-500'
          />
        </div>
        {/* <div className='social-icons flex flex-row items-center justify-around w-4/5 mt-20'>
          <a href='#' className='text-white'>
            Terms of Service
          </a>
          <a href='#' className='text-white'>
            Community Guidelines
          </a>
          <a href='#' className='text-white'>
            Privacy Policy
          </a>
          <a href='#' className='text-white'>
            Contact Us
          </a>
        </div> */}
      </div>
      <div className='w-full h-16 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 flex items-center justify-center'>
        <p className='text-center text-white text-lg'>
          © {new Date().getFullYear()} Copyright: Social Link
        </p>
      </div>
    </div>
  );
};

export default Home;

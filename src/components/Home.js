import React, { useEffect, useState } from 'react';
import Mockup from '../assets/images/social-mockup.png';
import ProductImg from '../assets/images/Product.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa';
import { HiOutlinePlusCircle } from 'react-icons/hi';
import { HiOutlineMinusCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const StoreButtons = () => {
  return (
    <>
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
    </>
  );
};

const NavBar = () => {
  return (
    <div className='w-full h-24 mb-4 flex flex-row items-center justify-between'>
      <span>
        <h1 className='text-4xl md:text-5xl font-semibold drop-shadow-md'>
          Logo
        </h1>
      </span>
      <div className='flex flex-row items-center justify-center w-1/2 md:w-2/6'>
        <StoreButtons />
      </div>
    </div>
  );
};

const Display = () => {
  return (
    <div className='w-full h-4/5 grid grid-row-2 md:grid-cols-2'>
      <div className='flex flex-col items-center justify-center md:justify-start md:items-start'>
        <h1 className='text-[#203152] text-5xl md:text-7xl font-bold pt-4 text-center md:text-left drop-shadow-md'>
          Get Anonymous
          <span className='grad-heading block pb-4'>Messages</span>
        </h1>
        <div className='w-6 h-2 bg-[#203152] rounded-xl md:ml-1 my-4 drop-shadow-md'></div>
        <div className='flex flex-row items-center justify-center w-5/6 md:w-4/6 py-4'>
          <StoreButtons />
        </div>
        <p className='text-xl text-[#203152] py-4'>
          Trusted by <span className='font-semibold'>12 million+</span> users
        </p>
      </div>
      <div className='flex items-center justify-center row-start-1 md:col-start-2'>
        <img
          src={Mockup}
          alt='mockup'
          className='h-5/6 mockup-img animate-wiggle'
        />
      </div>
    </div>
  );
};

const Product = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      {/* grid grid-cols-2 */}
      <div className='h-5/6 md:h-4/6 w-full md:w-4/6 shadow-lg rounded-2xl flex flex-col md:flex-row'>
        <div className='flex justify-center items-end w-full h-full overflow-hidden'>
          <img
            src={ProductImg}
            alt='product'
            className='h-full pt-10 product-img'
          />
        </div>
        <div className='flex justify-start items-center w-full h-full'>
          <h1 className='text-[#203152] text-6xl font-bold p-8 text-center md:text-left drop-shadow-md'>
            Experience simplicity, like never before.
          </h1>
        </div>
      </div>
    </div>
  );
};

const ProductDesc = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='h-5/6 md:h-4/6 w-full md:w-4/6 shadow-lg rounded-2xl flex flex-col md:flex-row'>
        <div className='flex flex-col justify-around items-center rounded-2xl w-full h-full product-desc-left'>
          <h2 className='text-white text-4xl p-4 font-semibold pt-4 text-center drop-shadow-md'>
            100% anonymous
          </h2>
          <h2 className='text-white text-4xl p-4 font-semibold pt-4 text-center drop-shadow-md'>
            Get anonymous Opinions
          </h2>
          <h2 className='text-white text-4xl p-4 font-semibold pt-4 text-center drop-shadow-md'>
            Get anonymous advice
          </h2>
        </div>
        <div className='flex justify-center items-center w-full h-full'>
          <div className='flex flex-col justify-center items-center w-3/4'>
            <h1 className='text-[#633DEA] text-4xl font-semibold pt-4 text-center md:text-left drop-shadow-md'>
              What is Name ?
            </h1>
            <p className='text-lg text-[#203152] py-4'>
              It’s a fresh take on anonymity. We believe anonymity should be a
              fun yet safe place to express your feelings and opinions without
              shame.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Quest = (quest) => {
  // console.log(quest?.quest?.id);

  const [show, setShow] = useState(false);
  console.log(show);
  useEffect(() => {}, [show]);

  return (
    <div className='bg-white w-full md:w-3/4 my-2'>
      <div className='bg-gray-100 p-4'>
        <div className='flex justify-start items-center'>
          {show ? (
            <HiOutlineMinusCircle
              size={24}
              color='gray'
              className='mx-4 cursor-pointer'
              onClick={(e) => {
                setShow(false);
              }}
            />
          ) : (
            <HiOutlinePlusCircle
              size={24}
              color='gray'
              className='mx-4 cursor-pointer'
              onClick={(e) => {
                setShow(true);
              }}
            />
          )}

          <h1 className='text-lg text-gray-700 font-semibold py-2'>
            {quest?.quest?.q}
          </h1>
        </div>
        {show && (
          <p className='text-md text-gray-700 font-normal px-12 mx-1'>
            {quest?.quest?.a}
          </p>
        )}
      </div>
    </div>
  );
};

const Faq = () => {
  // const [quest, setQuest] = useState();
  const quest = [
    {
      id: 1,
      q: 'Is there a free trial available?',
      a: 'Yes, you can try us for free for 30 days. If you want, we will provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    },
    {
      id: 2,
      q: 'Can I change my plan later?',
      a: 'Yes, you can try us for free for 30 days. If you want, we will provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    },
    {
      id: 3,
      q: 'What is your cancellation policy?',
      a: 'Yes, you can try us for free for 30 days. If you want, we will provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    },
    {
      id: 4,
      q: 'Can other info be added to an invoice?',
      a: 'Yes, you can try us for free for 30 days. If you want, we will provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    },
    {
      id: 5,
      q: 'How does billing work?',
      a: 'Yes, you can try us for free for 30 days. If you want, we will provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    },
    {
      id: 6,
      q: 'How do I change my account email?',
      a: 'Yes, you can try us for free for 30 days. If you want, we will provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    },
  ];

  return (
    <div className='flex flex-col items-center py-2'>
      <div className='my-4 mb-16'>
        <h1 className='text-3xl font-semibold text-center py-2'>
          Frequently asked questions
        </h1>
        <h2 className='text-gray-500 py-1 text-lg text-center'>
          Everything you need to know about the product and billing.
        </h2>
      </div>
      {quest && quest.map((f, i) => <Quest key={i} quest={f} />)}
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <hr className='mt-16'></hr>
      <div className='w-full h-full mt-2 bg-white flex flex-col items-center justify-center'>
        <div className='w-5/6 h-1/2 mb-4 flex flex-row items-center justify-between'>
          <span className='w-2/3 md:w-1/2'>
            <h1 className='text-4xl md:text-5xl font-semibold drop-shadow-md p-2'>
              Logo
            </h1>
            <p className='w-full md:w-1/2 p-2 text-gray-500'>
              Design amazing digital experiences that create more happy in the
              world.
            </p>
            <div className='flex flex-col md:flex-row justify-between w-full px-2 mt-4 text-gray-900 md:mt-4'>
              <Link to='/app'> Overview </Link>
              <Link to='/app'> Features </Link>
              <Link to='/app'> Pricing </Link>
              <Link to='/app'> Careers </Link>
              <Link to='/app'> Help </Link>
              <Link to='/app'> Privacy </Link>
            </div>
          </span>
          <div className='flex flex-col items-center justify-center h-full w-2/6 md:w-1/6 md:px-6'>
            <p className='text-[#6941C6] mb-2 font-semibold text-lg'>
              Get the app
            </p>
            <a href='/app' target='_blank' className='mb-2'>
              <img
                src='https://uploads-ssl.webflow.com/62a6e19b906fa55f541799d7/62a6e36e6a31c835ec16d16b_Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917%201.png'
                alt='ios-store'
                className=''
              />
            </a>
            <a href='/app' target='_blank' className='mt-2'>
              <img
                src='https://uploads-ssl.webflow.com/62a6e19b906fa55f541799d7/62a6e3de10ae34ace77a2fdb_en_badge_web_generic%201.png'
                alt='android-store'
                className=''
              />
            </a>
          </div>
        </div>

        <hr className='w-4/5'></hr>

        <div className='flex flex-col md:flex-row justify-between w-5/6'>
          <p className='pl-2 text-center py-4 md:text-left'>
            © {new Date().getFullYear()} . All rights reserved.
          </p>
          <div className='flex w-full md:w-1/4 justify-around md:justify-between items-center md:mr-6'>
            <FaTwitter size={20} color='gray' />
            <FaLinkedin size={20} color='gray' />
            <FaFacebook size={20} color='gray' />
            <FaGithub size={20} color='gray' />
            <FaAngellist size={20} color='gray' />
            <FaDribbble size={20} color='gray' />
          </div>
        </div>
        <div className='h-8 md:h-2'></div>
      </div>
    </>
  );
};

const Home = () => {
  return (
    <div>
      <div className='px-4 md:px-36'>
        <NavBar />
        <Display />
        <Product />
        <ProductDesc />
        <Faq />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
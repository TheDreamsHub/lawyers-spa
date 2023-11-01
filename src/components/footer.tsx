import footerLogo from '../assets/footer_logo.png';
import { FiTwitter } from '@react-icons/all-files/fi/FiTwitter';
import { AiOutlineMail } from '@react-icons/all-files/ai/AiOutlineMail';


export default function Footer(){
    return(
          <div className='w-full bg-[#321609] '>
          <div className='w-9/12 flex justify-between mx-auto pt-8 items-center'>
              <img src={footerLogo} alt='logo' />

              <div className='text-white'>
                <div className='flex gap-2 items-center'>
                  <FiTwitter/>
                  <span>920011307</span>
                </div>
                <div className='flex gap-2 items-center'>
                  <AiOutlineMail/>
                  <span>gh@gh-lawyers.me</span>
                </div>
               
               
                
              </div>
          </div>
          <div className='text-center text-white pb-8'>© Copyright 2023 All rights reserved</div>
      </div>
    );
}
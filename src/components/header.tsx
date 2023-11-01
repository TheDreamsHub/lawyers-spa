import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/Isolation_Mode.png';


export default function Header() {

    const navigate = useNavigate();
    let { pathname } = useLocation();

    console.log(pathname);

    return( <div className='bg-[#321609] flex w-full mx-auto items-center h-16 px-16'>
    <img src={logo} alt='logo' />


      <div className='flex gap-7 text-[#A47762] mx-7'>
        <div onClick={()=>{
            navigate('/');
        }} className={`h-9 cursor-pointer border-b-0  hover:border-b-2 transition-all duration-75 hover:text-[#B9A061] hover:border-b-[#B9A061]   ${pathname==="/"?"text-[#B9A061] border-b-2  border-b-[#B9A061]":"" }`}>
          <p className='text-center'>الرئيسية</p>
          <div className='w-0 transition-all duration-300 hover:w-[90px] bg-[#B9A061] h-2 mx-auto'></div>
        </div>
        <div onClick={()=>{
            navigate('/who-we-are');
        }} className={`h-9 cursor-pointer border-b-0  hover:border-b-2 transition-all duration-75 hover:text-[#B9A061] hover:border-b-[#B9A061]  ${pathname==="/who-we-are"? "text-[#B9A061] border-b-2 border-b-[#B9A061]":""}`}>
          <p className='text-center whitespace-nowrap'>من نحن</p>
          <div className='w-0 transition-all duration-300 hover:w-[90px] bg-[#B9A061] h-2 mx-auto'></div>
        </div>
        <div onClick={()=>{
            navigate('/contact-us');
        }} className={`h-9 cursor-pointer border-b-0  hover:border-b-2 transition-all duration-75 hover:text-[#B9A061] hover:border-b-[#B9A061]  ${pathname==="/contact-us"? "text-[#B9A061] border-b-2 border-b-[#B9A061]":""}`}>
          <p className='text-center whitespace-nowrap'>تواصل معنا</p>
          <div className='w-0 transition-all duration-300 hover:w-[90px] bg-[#B9A061] h-2 mx-auto'></div>
        </div>
      </div>
  </div>);

}
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

export  function  WayOfWork({title, point, isRight}: {title:string,point:string,isRight:boolean}) {

    useEffect(()=>{
        AOS.init();
      },[]);


      var isMobile = window.innerWidth <= 768;


      if(isMobile){
        return (
            <div  data-aos="fade-up" className="w-full text-center">
<div className="w-32 h-32 rounded-full shadow-xl text-center items-center flex mx-auto">
            <p className={ (isRight?"text-[#773415]":"text-[#A89258]") +" m-auto text-xl"}>{point}</p>
            </div>                
            <p className={ (!isRight?"text-[#A89258]":"")+" p-2 h-32 lg:text-2xl text-center mt-6 text-xl items-center"}>{title}</p>
            </div>

        );

      }
    


    return (
        <div data-aos="fade-up"  className=' md:grid md:grid-cols-3 justify-around mb-4 w-full'>
            {isRight ? <p className={ (isRight?"text-[#773415]":"") +" p-2 h-32  lg:text-2xl flex items-center"}>{title}</p> : <div></div>}
            <div className="w-32 h-32 rounded-full shadow-xl text-center items-center flex mx-auto">
            <p className={ (isRight?"text-[#773415]":"text-[#A89258]") +" m-auto text-xl"}>{point}</p>
            </div>
            {isRight ? <div></div> :<p className={ (!isRight?"text-[#A89258]":"")+" p-2 h-32 lg:text-2xl flex items-center"}>{title}</p>}

        </div>
    );

}


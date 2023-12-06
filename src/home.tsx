import React, { useEffect } from 'react';
import './App.css';
import { WayOfWork } from './components/way_of_work';
import Header from './components/header';
import Footer from './components/footer';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

export default  function Home():JSX.Element {

  const navigate = useNavigate();

   useEffect(()=>{
    AOS.init();
  },[]);


  var servicesVersion = [{title:"حوكمة الشركات",des:"لدى شركتنا فريق عمل محترف لحوكمة الشركات والمؤسسات التجارية ووضع هياكل إدارية لها، ومهام كل إدارة فيها ، وصياغة اللوائح الداخلية لها لتمكين الشركات والمؤسسات التجارية من ممارسة عملها بعيداً عن أي تضارب أو تعارض في أعمالها."},{title:"حوكمة الشركات",des:"لدى شركتنا فريق عمل محترف لحوكمة الشركات والمؤسسات التجارية ووضع هياكل إدارية لها، ومهام كل إدارة فيها ، وصياغة اللوائح الداخلية لها لتمكين الشركات والمؤسسات التجارية من ممارسة عملها بعيداً عن أي تضارب أو تعارض في أعمالها."},{title:"حوكمة الشركات",des:"لدى شركتنا فريق عمل محترف لحوكمة الشركات والمؤسسات التجارية ووضع هياكل إدارية لها، ومهام كل إدارة فيها ، وصياغة اللوائح الداخلية لها لتمكين الشركات والمؤسسات التجارية من ممارسة عملها بعيداً عن أي تضارب أو تعارض في أعمالها."},{title:"حوكمة الشركات",des:"لدى شركتنا فريق عمل محترف لحوكمة الشركات والمؤسسات التجارية ووضع هياكل إدارية لها، ومهام كل إدارة فيها ، وصياغة اللوائح الداخلية لها لتمكين الشركات والمؤسسات التجارية من ممارسة عملها بعيداً عن أي تضارب أو تعارض في أعمالها."},{title:"حوكمة الشركات",des:"لدى شركتنا فريق عمل محترف لحوكمة الشركات والمؤسسات التجارية ووضع هياكل إدارية لها، ومهام كل إدارة فيها ، وصياغة اللوائح الداخلية لها لتمكين الشركات والمؤسسات التجارية من ممارسة عملها بعيداً عن أي تضارب أو تعارض في أعمالها."},];
  var teamMember = [{img:"حوكمة الشركات",name:"عمر الغامدي",title:"محامي"},{img:"حوكمة الشركات",name:"عمر الغامدي",title:"محامي"},{img:"حوكمة الشركات",name:"عمر الغامدي",title:"محامي"},{img:"حوكمة الشركات",name:"عمر الغامدي",title:"محامي"}];
    return (
   
    <div>

      
     <div >
      <Header   />

      {/*  hero */}
      <div className='bg-hero w-full bg-cover bg-no-repeat h-[1100px] relative items-center md:mb-[90px] pt-6' >
            <div  className='bg-dots  bg-no-repeat absolute top-10 left-14 mx-auto lg:w-[350px] lg:h-[250px]' />
            <div  className='bg-logo  bg-no-repeat mx-auto mt-[50px] scale-75  w-[240px] md:w-0 h-[240px]' />
            <div data-aos="slide-left" data-aos-duration="800" className='m-auto w-8/12 text-right flex flex-col'>

                <div className='bg-logo  bg-no-repeat  lg:w-[420px] lg:h-[300px]' />
                <p className=' text-white text-xl text-center md:text-start'>تتشرف شركتنا بتقديم خدماتها لمجموعة من</p>
                <p className='text-[#D0BF95] text-lg text-center md:text-start mt-3  md:text-3xl'>أصحاب السمو الملكي الأمراء، وكبريات الشركات والمؤسسات المحلية والعالمية التي تعمل في مجال المقاولات وتقنية المعلومات والتأمين والتجارة العامة .</p>
                <button className="md:w-[140px] bg-[#B9A061] rounded-lg text-white p-2 float-left mt-16" onClick={()=>{
                  navigate('/contact-us');
                }}>
                تواصل معنا  
                </button>
            </div>
      </div>

      {/* services */}


      <div  className='w-11/12 m-auto mb-[90px] '>
          <div className='text-center'>
            <h2 className='mb-[90px] text-2xl'> الخدمات الحكومية</h2>
          </div>
            <div data-aos="fade-up" className='flex w-full gap-12 flex-wrap text-right m-auto justify-center '>
              {servicesVersion.map((service) =>{
                
                return <div className='shadow-lg my-4 md:shadow-none text-center md:text-start scale-1 hover:shadow-md p-2 transition-all duration-500 rounded-md lg:hover:scale-110 hover:text-[#773415] text-[#64748B]'>

                  <div className='max-w-[400px] p-2'>
                    <h3 className='text-2xl '>{service.title}</h3>
                    <p className='text-[16px]'>{service.des}</p>
                  </div>
                </div>})
                
               }
            </div>
        </div>


        {/* way of our work  */}
        <div className='lg:w-8/12 m-auto mb-[90px]'>
          <div className='text-center'>
            <h2 className='mb-[90px] text-2xl text-[#1E293B]'> أسلوبنا في العمل</h2>
          </div>
          
          <WayOfWork  point='الدراسة الأولية'  isRight title='ندرس بعمق ونتتبع أطراف الموضوع وامتداداته.'/>
          <WayOfWork point='الثغرات القانونية' isRight={false} title='نستنبط من الوقائع مواطن الضعف، ومكامن الثغرات، ونعمل على معالجتها وفق الأنظمة.'/>
          <WayOfWork point='خطة العمل' isRight={true} title='نبني خطة عمل واضحه ومرنة وقابلة للقياس.'/>
          <WayOfWork point='ورش العمل' isRight={false} title='نعقد ورش العمل واجتماعات العصف الذهني لاختيار الأسلوب الأمثل والإجراء الأفضل.'/>
          <WayOfWork point='العمل إلكترونيا' isRight={true} title='نؤرشف، ونجدول المواعيد، ونحدّث المستجدات، عبرتطبيقات حاسوبية تزيد من دقة العمل وسرعة التواصل مع العميل.'/>
          <WayOfWork point='الجودة' isRight={false} title='نراجع باستمرار الخطط والإجراءات للوصول للهدف بالدقة والسرعة المطلوبتين.'/>


        


          <div className='w-full h-32 bg-gray'>

          </div>
        </div>


      {/* divider */}
        <div className='w-full bg-gradient-to-r from-[#411D0C] to-[#54250F] h-[209px] flex items-center text-right relative mb-[90px]'>
          <div className='bg-vectors w-[200px] h-[200px] absolute left-0'></div>
          <p className='w-full md:w-7/12 m-auto p-4 text-white lg:text-[24px]'>تقوم شركتنا بتمثيلكم في حضور الاجتماعات والمفاوضات , إلى جانب تمثيلكم في جميع الدعاوى سواء مدعياً أو مدعاً عليه , أمام كافة المحاكم و اللجان شبه القضائية والإدارية .</p>
        </div>


        {/* our team */}
        <div className='w-9/12 m-auto mb-[90px]'>
          <div className='text-center'>
            <h2 className='mb-[90px] text-2xl text-[#1E293B]'> فريق العمل</h2>
          </div>
          <div className='text-center text-2xl text-[#1E293B]'>
            <h2 className=''>يضم الفريق نخبة من الكفاءات القانونية القادرة على تقديم الخدمات القانونية لعملاء شركتنا بحرفية عالية</h2>
          </div>
          <div className='text-center'>
            <h2 className='mb-[90px] text-2xl text-[#1E293B] font-bold'>بإشراف الدكتور / خميّس الغامدي</h2>
          </div>
          <div className='flex w-full gap-12 flex-wrap text-right m-auto justify-center'>
              {teamMember.map((member, index) =>{
                
                return <div  data-aos="fade-up">

                  <div className='w-[200px] h-[300px] p-2 flex flex-col items-center '>
                    <div className='bg-[#D5C0B6] h-[203px] w-full'/>
                    <h3>{member.name}</h3>
                    <p>{member.title}</p>
                  </div>
                </div>})
                
               }
            </div>
          </div>
        <Footer />
     </div>
    </div>
);
}


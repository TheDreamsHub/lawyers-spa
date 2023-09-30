import React from 'react';
import logo from './assets/Isolation_Mode.png';
import './App.css';
import { WayOfWork } from './components/way_of_work';

function App() {


  var servicesVersion = [{title:"حوكمة الشركات",des:"لدى شركتنا فريق عمل محترف لحوكمة الشركات والمؤسسات التجارية ووضع هياكل إدارية لها، ومهام كل إدارة فيها ، وصياغة اللوائح الداخلية لها لتمكين الشركات والمؤسسات التجارية من ممارسة عملها بعيداً عن أي تضارب أو تعارض في أعمالها."},{title:"حوكمة الشركات",des:"لدى شركتنا فريق عمل محترف لحوكمة الشركات والمؤسسات التجارية ووضع هياكل إدارية لها، ومهام كل إدارة فيها ، وصياغة اللوائح الداخلية لها لتمكين الشركات والمؤسسات التجارية من ممارسة عملها بعيداً عن أي تضارب أو تعارض في أعمالها."},{title:"حوكمة الشركات",des:"لدى شركتنا فريق عمل محترف لحوكمة الشركات والمؤسسات التجارية ووضع هياكل إدارية لها، ومهام كل إدارة فيها ، وصياغة اللوائح الداخلية لها لتمكين الشركات والمؤسسات التجارية من ممارسة عملها بعيداً عن أي تضارب أو تعارض في أعمالها."},{title:"حوكمة الشركات",des:"لدى شركتنا فريق عمل محترف لحوكمة الشركات والمؤسسات التجارية ووضع هياكل إدارية لها، ومهام كل إدارة فيها ، وصياغة اللوائح الداخلية لها لتمكين الشركات والمؤسسات التجارية من ممارسة عملها بعيداً عن أي تضارب أو تعارض في أعمالها."},{title:"حوكمة الشركات",des:"لدى شركتنا فريق عمل محترف لحوكمة الشركات والمؤسسات التجارية ووضع هياكل إدارية لها، ومهام كل إدارة فيها ، وصياغة اللوائح الداخلية لها لتمكين الشركات والمؤسسات التجارية من ممارسة عملها بعيداً عن أي تضارب أو تعارض في أعمالها."},];
  var teamMember = [{img:"حوكمة الشركات",name:"عمر الغامدي",title:"محامي"},{img:"حوكمة الشركات",name:"عمر الغامدي",title:"محامي"},{img:"حوكمة الشركات",name:"عمر الغامدي",title:"محامي"},{img:"حوكمة الشركات",name:"عمر الغامدي",title:"محامي"}];
    return (
   
    <div>

      
     <div >
      <div className='bg-[#321609] flex w-full mx-auto items-center h-16'>
        <img src={logo} alt='logo' />


          <div className='flex gap-7 text-[#A47762] mx-7'>
            <div className='h-9 '>
              <p className='text-center'>الرئيسية</p>
              <div className='w-0 transition-all duration-300 hover:w-[90px] bg-[#B9A061] h-2 mx-auto'></div>
            </div>
              <p className=''>الرئيسية</p>
              <p className=''>الرئيسية</p>
          </div>
      </div>

      {/*  hero */}
      <div className='bg-hero w-full bg-cover bg-no-repeat h-[1100px] relative flex items-center mb-[90px]' >
            <div  className='bg-dots  bg-no-repeat absolute top-6 left-6 w-[250px] h-[250px]' />
            <div className='m-auto w-7/12 text-right flex flex-col'>

                <div  className='bg-logo  bg-no-repeat  w-[420px] h-[300px] ' />
                <p className=' text-white'>تتشرف شركتنا بتقديم خدماتها لمجموعة من</p>
                <p className='text-[#D0BF95]'>أصحاب السمو الملكي الأمراء، وكبريات الشركات والمؤسسات المحلية والعالمية التي تعمل في مجال المقاولات وتقنية المعلومات والتأمين والتجارة العامة .</p>
            </div>
      </div>

      {/* services */}


      <div className='w-10/12 m-auto mb-[90px]'>
          <div className='text-center'>
            <h2 className='mb-[90px]'> الخدمات الحكومية</h2>
          </div>
            <div className='flex w-full gap-12 flex-wrap text-right m-auto justify-center '>
              {servicesVersion.map((service, index) =>{
                
                return <div className='shadow-none scale-1 hover:shadow-md p-2 transition-all duration-500 rounded-md hover:scale-110'>

                  <div className='w-[400px] h-[180px] p-2'>
                    <h3>{service.title}</h3>
                    <p>{service.des}</p>
                  </div>
                </div>})
                
               }
            </div>
        </div>


        {/* way of our work  */}
        <div className='w-8/12 m-auto mb-[90px]'>
          <div className='text-center'>
            <h2 className='mb-[90px] text-2xl'> طريقة عملنا</h2>
          </div>

          <WayOfWork isRight title='ندرس بعمق ونتتبع أطراف الموضوع وامتداداته.'/>
          <WayOfWork isRight={false} title='ندرس بعمق ونتتبع أطراف الموضوع وامتداداته.'/>
          <WayOfWork isRight={true} title='ندرس بعمق ونتتبع أطراف الموضوع وامتداداته.'/>
          <WayOfWork isRight={false} title='ندرس بعمق ونتتبع أطراف الموضوع وامتداداته.'/>
          <WayOfWork isRight={true} title='ندرس بعمق ونتتبع أطراف الموضوع وامتداداته.'/>
          <WayOfWork isRight={false} title='ندرس بعمق ونتتبع أطراف الموضوع وامتداداته.'/>
          <WayOfWork isRight={true} title='ندرس بعمق ونتتبع أطراف الموضوع وامتداداته.'/>
          <div className='w-full h-32 bg-gray'>

          </div>
        </div>


      {/* divider */}
        <div className='w-full bg-gradient-to-r from-[#411D0C] to-[#54250F] h-[209px] flex items-center text-right relative mb-[90px]'>
          <div className='bg-vectors w-[200px] h-[200px] absolute left-0'></div>
              <p className='w-7/12 m-auto text-white'>تقوم شركتنا بتمثيلكم في حضور الاجتماعات والمفاوضات , إلى جانب تمثيلكم في جميع الدعاوى سواء مدعياً أو مدعاً عليه , أمام كافة المحاكم و اللجان شبه القضائية والإدارية .</p>
        </div>


        {/* our team */}
        <div className='w-9/12 m-auto mb-[90px]'>
          <div className='text-center'>
            <h2 className='mb-[90px]'> فريق العمل</h2>
          </div>
          <div className='text-center'>
            <h2 className=''>يضم الفريق نخبة من الكفاءات القانونية القادرة على تقديم الخدمات القانونية لعملاء شركتنا بحرفية عالية</h2>
          </div>
          <div className='text-center'>
            <h2 className='mb-[90px]'>بإشراف الدكتور / خميّس الغامدي</h2>
          </div>
          <div className='flex w-full gap-12 flex-wrap text-right m-auto justify-center'>
              {teamMember.map((member, index) =>{
                
                return <div>

                  <div className='w-[200px] h-[300px] p-2 flex flex-col items-center '>
                    <div className='bg-[#D5C0B6] h-[203px] w-full'/>
                    <h3>{member.name}</h3>
                    <p>{member.title}</p>
                  </div>
                </div>})
                
               }
            </div>
          </div>


          {/* footer */}
          <div className='w-full bg-[#321609] h-[400px]'>

          </div>

     </div>
    </div>
);
}

export default App;

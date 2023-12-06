import Footer from "./components/footer";
import Header from "./components/header";
import { InputFieldV2 } from "./components/v2/InputFieldV2";
import { TextAreaV2 } from "./components/v2/TextAreaV2";

export default function ContactUs(): JSX.Element {


return(
    <div>

        <Header />


      

    <div className="max-w-[1200px] mx-auto bg-white shadow-lg h-fit my-[160px] p-16 relative rounded-lg">
    <div className='bg-dots  bg-no-repeat absolute -top-24 left-0 lg:-left-24 w-[250px] h-[250px] -z-10' />

        <p className="text-center">تواصل معنا </p>
        <p className="text-[#64748B] text-[18px]" >الاسم</p>
       <InputFieldV2  title="asas" />
       <p className="text-[#64748B] text-[18px]">البريد الإلكتروني</p>
       <InputFieldV2 />
       <p className="text-[#64748B] text-[18px]">العنوان</p>
       <InputFieldV2 />
       <p className="text-[#64748B] text-[18px]">الرسالة</p>
       <TextAreaV2 />

       <button className="md:w-[140px] bg-[#B9A061] rounded-lg text-white p-2 w-full mt-4 float-left">

       إرسال الرسالة
       </button>

 
 

        </div>

        <Footer />
    </div>
);
}
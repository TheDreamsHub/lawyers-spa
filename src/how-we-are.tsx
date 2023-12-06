import Footer from "./components/footer";
import Header from "./components/header";

export default function WhoWeAre(): JSX.Element {


    return (
        <div>
            <Header />
            <div className="max-w-[1200px] mx-auto ">

                <div className="border rounded mb-4 p-8  mt-[160px] relative bg-white">
                <div className='w-0 bg-dots  bg-no-repeat absolute -top-24 left-0 lg:-top-24 lg:-left-24 md:w-[250px] h-[250px] -z-10' />

                    <p className="text-2xl mb-3 text-[#773415]">رؤيتنا</p>
                    <p className="">نسعى إلى أن نكون المكتب المتميز على مستوى المملكة في تقديم الخدمات والاستشارات القانونية</p>
                </div>
                <div className="border rounded mb-4 p-8 bg-white">
                    <p className="text-2xl mb-3 text-[#773415]">رسالتنا</p>
                    <p> نحقق رؤيتنا من خلال جهد متواصل وخبرة واسعة ومهارة متميزة في تقديم الخدمات والاستشارات القانونية لعملائنا.</p>
                </div>
                <div className="border rounded mb-4 p-8">
                    <p className="text-2xl mb-3 text-[#773415]">أهدافنا</p>
                    <ul className="list-disc pr-5">
                        <li>كسب ثقة العملاء والحفاظ على الاحترافية المهنية .</li>
                        <li>الوقوف مع المظلوم ومناصرته لإحقاق الحق وإبطال الباطل .
                        </li>
                        <li>نشر الوعي القانوني والفكر العدلي لدى أفراد المجتمع .
                        </li>
                        <li>التمثيل الاحترافي للعملاء في الدعاوى القضائية .
                        </li>
                        <li>اكتساب الخبرات والمهارات القانونية التي تؤهلنا للوصول عالمياً .
                        </li>
                    </ul>



                </div>
                <div className="border rounded mb-4 p-8">
                    <p className="text-2xl mb-7 text-[#773415]">مايميزنا :</p>
                    <ul className="list-disc pr-5">
                        <li>فريق عمل قانوني متخصص ومتكامل.
                        </li>
                        <li>قدرة على الدراسة العميقة واستنباط مواطن الضعف والقوة في الوقائع.

                        </li>
                        <li>خبرة واسعه ومهارة متميزة.

                        </li>
                        <li>يسير العمل في كل قضية وفق خطة محددة وواضحة.

                        </li>
                        <li>نؤرشف ونتواصل الكترونيا لتحقيق دقة العمل وسرعة الانجاز.

                        </li>
                    </ul>



                </div>





            </div>
            <Footer />
        </div>

    );
}
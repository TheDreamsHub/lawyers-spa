export  function  WayOfWork({title,isRight}: {title:string,isRight:boolean}) {


    return (
        <div className='grid grid-cols-3 justify-around'>
            {isRight ? <p className="h-32  text-2xl flex items-center">{title}</p> : <div></div>}
            
            <div className="w-32 h-32 rounded-full shadow-xl text-center items-center flex mx-auto">
            <p className="m-auto text-xl">الدراسة الأولية</p>
            </div>
            {isRight ? <div></div> :<p className="h-32 text-2xl flex items-center">{title}</p>}

        </div>
    );

}


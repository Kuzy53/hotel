import React from 'react';
import Image from "../components/ui/Image";
import Animation from '../components/Animation';

function GridElsItem({img, title, text, index}) {
  return (
    <Animation className={"text-center"} delay={index * .2 + 's'}>
      <Image src={img} className={"w-full h-auto aspect-square"} alt=""/>
      <div className={"text-[24px] mt-[35px] mb-[15px] uppercase"}>{title}</div>
      <div className={"max-w-[268px] mx-auto"}>{text}</div>
    </Animation>
  )
}

function GridEls({title, arr}) {
  return (
    <div className={"bg-[#0E4840] pt-[150px] pb-[85px]"}>
      <div className="container">
        <Animation>
        <h2 className={"text-center mb-[40px] bigMob"} >{title}</h2>
        </Animation>
        <div className={"grid md:grid-cols-3 gap-[20px]"}>
          {arr.map(({img, title, text}, i) => (
            <GridElsItem key={i} img={img} title={title} text={text} index={i}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GridEls;
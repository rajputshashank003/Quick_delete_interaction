import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, type MouseEventHandler, type ReactNode } from "react"

gsap.registerPlugin(useGSAP);

const Menu = () => {
    const [ clicked , set_clicked ] = useState(false);
    const [ timer , set_timer ] = useState(6);

    const handleClick = () => {    

        if( clicked ) {
            const tl = gsap.timeline();
            tl.to(".name", {
                opacity: 0,
                duration : 0
            }, "d")
            .to('.options', {
                opacity: 0,
                duration : 0
            }, "d")
            .to('.hr_line', {
                opacity: 0,
                duration : 0
            }, "d")

            .to(".name", {
                display: 'none',
            }, "abc")
            .to('.options', {
                display: 'none',
            }, "abc")
            .to('.hr_line', {
                display: 'none',
            }, "abc")
            .to('.the_par', {
                height: 65,
                duration : 0.3,
                ease: "elastic.out(2, 5)",
            }, "abc")
            .to('.deleted', {
                position: 'relative',
            },'abc')
            .to('.left', {
                y : 0,
                opacity: 1,
                delay: 0.1,
                duration: 0.8,
                ease: "elastic.out(1.2, 0.3)",
            }, "abc")
            .to('.right', {
                y : 0,
                opacity: 1,
                delay: 0.1,
                duration: 0.8,
                ease: "elastic.out(1.2, 0.3)",
            }, "abc")
            return ;
        }
        set_clicked(true);
        
        const tl = gsap.timeline();
        tl.to(".value1", {
            x: -200,
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
            position: 'absolute'
        }, "abc")
        .to( '.value2', {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "elastic.out(1.2, 0.3)",
          },
          "abc",
        );

        const interval = setInterval(() => {
            set_timer(prev => prev - 1);
        }, 1000);

        setTimeout(() => {
            clearInterval(interval);
            gsap.to('.the_par', {
                opacity: 0,
                duration: 0.4
            })
        }, 6000);

    };
    return (
        <div className="h-fit the_par relative comic-relief-regular max-sm:w-[350px] w-[400px] text-zinc-200 rounded-3xl shadow-xl shadow-black/50 bg-zinc-800 ">
            <div className="deleted max-sm:px-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30px] p-5 z-[99] absolute grid grid-cols-6 ">
                <div className="left max-sm:col-span-3 -translate-y-[80px] text-red-400 flex flex-row items-center gap-3 opacity-0  col-span-4">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="38"  height="38"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-square-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M9 12l2 2l4 -4" /></svg>
                    Deleted
                </div>
                <div className="right flex max-sm:col-span-3 max-sm:justify-end flex-row items-center gap-3 translate-y-[80px] opacity-0 col-span-2">
                    <div className="h-[40px] rounded-full w-[40px] text-[25px] text-zinc-800 flex justify-center items-center bg-gray-300/80">
                        {timer}
                    </div>
                    <div className="cursor-pointer hover:bg-zinc-700 px-1 rounded-xl duration-200">
                        Undo
                    </div>
                </div>
            </div>
            <div className="name text-[32px] p-5 ">
                Merchant Options
            </div>
            <hr className="w-full hr_line" />
            <div className="options flex p-4 px-3 flex-col gap-3 text-[32px] ">
                <Option>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="36"  height="36"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-circle-dashed-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" /><path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" /><path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" /><path d="M8.56 20.31a9 9 0 0 0 3.44 .69" /><path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" /><path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" /><path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" /><path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" /><path d="M9 12h6" /><path d="M12 9v6" /></svg>
                    Add New
                </Option>
                <Option>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="38"  height="38"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-edit"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>
                    Manage
                </Option>
                <Option>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="38"  height="38"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-archive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" /><path d="M10 12l4 0" /></svg>
                    Archive
                </Option>
                <Option onClick={handleClick} className='text-red-400' >
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="38"  height="38"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon z-[99] icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                    <div className="value1">
                        Delete
                    </div>
                    <div className="value2 translate-x-[70px] opacity-0">
                        Confirm?
                    </div>
                </Option>
            </div>
        </div>
    )
}

const Option = (props: { children: ReactNode, onClick?: MouseEventHandler, className?: string }) => {
    return (
        <div onClick={props.onClick} className={` ${props.className} flex relative overflow-hidden h-fit w-full px-4 py-2 cursor-pointer duration-200 rounded-[26px] hover:bg-zinc-600 flex-row gap-2 justify- items-center`}>
            {props.children}
        </div>
    )
}

export default Menu
import React from 'react';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Testimonial = ({ item }) => {
    const { id, name, title, headline, testimonialText, img } = item;

    useGSAP(() => {
        gsap.to('#name', {
            y: 0,
            ease: "power1.inOut",
            opacity: 1
        })

        gsap.fromTo('.para', {
            y: 20,
            opacity: 0
        }, {
            opacity: 1,
            y: 0,
            delay: 0.5,
            stagger: 0.1
        })
    }, []);

    const styleMap = {
        1: {
            card: "bg-Moderate-violet xl:col-start-1 xl:col-end-3 xl:row-start-1 xl:row-end-2",
            imgRing: "ring-White",
            name: "text-White",
            title: "text-white",
            headline: "text-White",
            testimonialText: "text-White"
        },
        2: {
            card: "bg-Very-dark-grayish-blue",
            imgRing: "ring-White",
            name: "text-White",
            title: "text-white",
            headline: "text-White",
            testimonialText: "text-White"
        },
        3: {
            card: "bg-White",
            imgRing: "ring-White",
            name: "text-black",
            title: "text-black",
            headline: "text-black",
            testimonialText: "text-black"
        },
        4: {
            card: "bg-Very-dark-blackish-blue xl:col-start-2 xl:col-end-4",
            imgRing: "ring-Moderate-violet",
            name: "text-White",
            title: "text-White",
            headline: "text-White",
            testimonialText: "text-White"
        },
        5: {
            card: "bg-White xl:col-start-4 xl:col-end-5 xl:row-start-1 xl:row-end-3",
            imgRing: "ring-White",
            name: "text-black",
            title: "text-black",
            headline: "text-black",
            testimonialText: "text-black"
        },
    }

    const styleClass = styleMap[id];

    return (
        <div className={`${id === 1 ? 'bg-no-repeat bg-right-top-offset xl:bg-right-top-offset-xl bg-patternQuote' : ''} ${styleClass.card} rounded-xl px-10 py-6 text-[13px] text-White font-Barlow font-normal xl:px-8 xl:py-4`}>
            <div id='name' className='flex items-center gap-4 mb-4 opacity-0 translate-y-10'>
                <img src={img} alt={name + "img"} className={`rounded-full w-8 h-8 ring-[3px] ring-opacity-50 ${styleClass.imgRing}`} />
                <div >
                    <p className={`${styleClass.name}`}>{name}</p>
                    <p className={`${styleClass.title} opacity-50`}>{title}</p>
                </div>
            </div >
            <div className='flex flex-col gap-4'>
                <h1 className={`text-[19.1px] font-semibold leading-5 ${styleClass.headline} para`}>{headline}</h1>
                <p className={`font-normal opacity-70 ${styleClass.testimonialText} para`}>{testimonialText}</p>
            </div>
        </div>
    )
}

export default Testimonial
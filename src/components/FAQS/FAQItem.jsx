import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";

export default function FAQItem({
    faq,
    active,
    onClick,
}) {

    const content = useRef();

    useEffect(() => {

        if (active) {

            gsap.to(content.current, {
                height: "auto",
                duration: .6,
                ease: "power4.out"
            });

        } else {

            gsap.to(content.current, {
                height: 0,
                duration: .5,
                ease: "power4.inOut"
            });

        }

    }, [active]);

    return (

        <div className="rounded-2xl border border-zinc-700 overflow-hidden bg-[#1b1b1b]">

            <button
                onClick={onClick}
                className="
            w-full
            flex
            justify-between
            items-center
            px-8
            py-7
            text-left
            group
            ">

                <h3
                    className={`
                text-lg
                md:text-xl
                font-medium
                transition-colors
                duration-300

                ${active
                            ? "text-[#B06C48]"
                            : "text-zinc-300 group-hover:text-white"}
                `}
                >
                    {faq.question}
                </h3>

                <ChevronDown
                    className={`
                duration-500
                ${active ? "rotate-180 text-[#B06C48]" : "text-zinc-500"}
                `}
                />
            </button>

            <div
                ref={content}
                className="h-0 overflow-hidden">

                <div className="px-8 pb-8 text-zinc-400 leading-8 text-lg">

                    {faq.answer}

                </div>

            </div>

        </div>

    );

}
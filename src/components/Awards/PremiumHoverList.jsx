import { useState } from "react";

const awards = [
    {
        title: "13th Annual A+ Awards-Winner",
        year: "2025",
        org: "Architizer",
    },
    {
        title: "NOT A HOTEL– BEST 30",
        year: "2024",
        org: "NOT A HOTEL",
    },
    {
        title: "INSPIRELI AWARDS WINNER",
        year: "2023",
        org: "INSPIRELI AWARDS",
    },
    {
        title: "INSPIRELI AWARDS WINNER",
        year: "2023",
        org: "INSPIRELI AWARDS",
    },
    {
        title: "INSPIRELI AWARDS WINNER",
        year: "2023",
        org: "INSPIRELI AWARDS",
    },
    {
        title: "INSPIRELI AWARDS WINNER",
        year: "2023",
        org: "INSPIRELI AWARDS",
    },
    {
        title: "INSPIRELI AWARDS WINNER",
        year: "2023",
        org: "INSPIRELI AWARDS",
    },
    {
        title: "INSPIRELI AWARDS WINNER",
        year: "2023",
        org: "INSPIRELI AWARDS",
    },
    {
        title: "INSPIRELI AWARDS WINNER",
        year: "2023",
        org: "INSPIRELI AWARDS",
    },
    {
        title: "INSPIRELI AWARDS WINNER",
        year: "2023",
        org: "INSPIRELI AWARDS",
    },
    {
        title: "INSPIRELI AWARDS WINNER",
        year: "2023",
        org: "INSPIRELI AWARDS",
    }
];

const ease = "cubic-bezier(0.16,1,0.3,1)";

export default function AwardsList() {
    const [active, setActive] = useState(null);

    return (
        <section className="bg-[#000000] text-white py-20">

            <div className="border-y border-zinc-800">

                {awards.map((award, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setActive(index)}
                        onMouseLeave={() => setActive(null)}
                        className="relative overflow-hidden border-b border-zinc-800 last:border-b-0"
                    >
                        {/* Default Row */}

                        <div className="grid grid-cols-12 items-center h-[92px] px-10 relative z-10">

                            <div className="col-span-6 text-[20px] font-medium">
                                {award.title}
                            </div>

                            <div className="col-span-2 text-center text-[18px] font-medium">
                                {award.year}
                            </div>

                            <div className="col-span-4 text-right text-[18px]">
                                {award.org}
                            </div>

                        </div>

                        {/* Hover Overlay */}

                        <div
                            className="absolute inset-0 z-20 bg-white"
                            style={{
                                transform:
                                    active === index
                                        ? "translateY(0%)"
                                        : "translateY(100%)",
                                transition: `transform 380ms ${ease}`,
                            }}
                        >
                            <div className="grid grid-cols-12 items-center h-full px-10">

                                <div
                                    className="col-span-6 text-[20px] font-medium text-black"
                                    style={{
                                        transform:
                                            active === index
                                                ? "translateY(0)"
                                                : "translateY(16px)",
                                        transition: `transform 450ms ${ease}`,
                                    }}
                                >
                                    {award.title}
                                </div>

                                <div
                                    className="col-span-2 text-center text-[18px] font-medium text-black"
                                    style={{
                                        transform:
                                            active === index
                                                ? "translateY(0)"
                                                : "translateY(16px)",
                                        transition: `transform 450ms ${ease}`,
                                    }}
                                >
                                    {award.year}
                                </div>

                                <div
                                    className="col-span-4 text-right text-[18px] text-black"
                                    style={{
                                        transform:
                                            active === index
                                                ? "translateY(0)"
                                                : "translateY(16px)",
                                        transition: `transform 450ms ${ease}`,
                                    }}
                                >
                                    {award.org}
                                </div>

                            </div>
                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
}
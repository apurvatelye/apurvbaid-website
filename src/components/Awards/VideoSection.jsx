import video from "../../assets/Videos/AwardsVideo.mp4";



export default function VideoSection() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            <video
                className="absolute inset-0 h-[3xl] w-[2xl] m-auto object-cover"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src={video} type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center justify-center">
                <h1 className="text-7xl font-bold text-white">
                    Interior Design Studio
                </h1>
            </div>
        </section>
    );
}
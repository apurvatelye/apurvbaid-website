import { useEffect, useState } from "react";
import {
    FaTelegramPlane,
    FaMapMarkerAlt,
    FaPhoneAlt,
} from "react-icons/fa";

import api from "../services/api";

export default function ContactInfo() {

    const [contact, setContact] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchContactDetails = async () => {

            try {

                setLoading(true);

                const response = await api.get("/contact");

                if (response.data) {
                    setContact(response.data);
                }

            } catch (error) {

                console.error(
                    "Failed to load contact details:",
                    error
                );

                setContact(null);

            } finally {

                setLoading(false);

            }
        };

        fetchContactDetails();

    }, []);

    // =========================
    // LOADING
    // =========================

    if (loading) {

        return (
            <section className="bg-black py-12 sm:py-16">

                <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

                    <div className="grid grid-cols-1 gap-12 sm:gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">

                        {/* Email Skeleton */}
                        <div className="flex flex-col items-center text-center animate-pulse">

                            <div className="mb-5 h-8 w-8 rounded-full bg-zinc-800" />

                            <div className="h-6 w-52 rounded bg-zinc-800" />

                            <div className="mt-3 h-4 w-16 rounded bg-zinc-800" />

                        </div>

                        {/* Address Skeleton */}
                        <div className="flex flex-col items-center text-center animate-pulse">

                            <div className="mb-5 h-8 w-8 rounded-full bg-zinc-800" />

                            <div className="h-6 w-72 rounded bg-zinc-800" />

                            <div className="mt-3 h-4 w-20 rounded bg-zinc-800" />

                        </div>

                        {/* Phone Skeleton */}
                        <div className="flex flex-col items-center text-center animate-pulse">

                            <div className="mb-5 h-8 w-8 rounded-full bg-zinc-800" />

                            <div className="h-6 w-40 rounded bg-zinc-800" />

                            <div className="mt-3 h-4 w-16 rounded bg-zinc-800" />

                        </div>

                    </div>

                </div>

            </section>
        );
    }

    // =========================
    // NO DATA
    // =========================

    if (!contact) {
        return null;
    }

    return (

        <section className="bg-black py-12 sm:py-16">

            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

                <div className="grid grid-cols-1 gap-12 sm:gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">

                    {/* =========================
                        EMAIL
                    ========================= */}

                    <div className="flex flex-col items-center text-center">

                        <FaTelegramPlane
                            className="mb-5 text-2xl text-white sm:text-3xl"
                        />

                        <h3 className="max-w-full break-all text-base font-semibold text-white sm:text-lg lg:text-xl">
                            {contact.email}
                        </h3>

                        <p className="mt-2 text-sm text-gray-400 sm:text-base lg:text-lg">
                            Email
                        </p>

                    </div>


                    {/* =========================
                        ADDRESS
                    ========================= */}

                    <div className="flex flex-col items-center text-center">

                        <FaMapMarkerAlt
                            className="mb-5 text-2xl text-white sm:text-3xl"
                        />

                        <h3 className="max-w-xs text-base font-semibold leading-relaxed text-white sm:max-w-sm sm:text-lg lg:max-w-md lg:text-xl">
                            {contact.address}
                        </h3>

                        <p className="mt-2 text-sm text-gray-400 sm:text-base lg:text-lg">
                            Address
                        </p>

                    </div>


                    {/* =========================
                        PHONE
                    ========================= */}

                    <div className="flex flex-col items-center text-center">

                        <FaPhoneAlt
                            className="mb-5 text-2xl text-white sm:text-3xl"
                        />

                        <h3 className="text-base font-semibold text-white sm:text-lg lg:text-xl">
                            {contact.phone}
                        </h3>

                        <p className="mt-2 text-sm text-gray-400 sm:text-base lg:text-lg">
                            Phone
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}
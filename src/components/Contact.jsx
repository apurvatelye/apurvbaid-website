import { useEffect, useState } from "react";

import api from "../services/api";

const Contact = () => {

    const [contact, setContact] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchContact = async () => {

            try {

                const response = await api.get("/contact");

                if (response.data) {
                    setContact(response.data);
                }

            } catch (error) {

                console.error(
                    "Failed to load contact details:",
                    error
                );

            } finally {

                setLoading(false);

            }
        };

        fetchContact();

    }, []);

    if (loading) {
        return (
            <section className="grid lg:grid-cols-3 border-t border-white/10">

                {[1, 2, 3].map((item) => (
                    <div
                        key={item}
                        className="py-16 px-5 text-center animate-pulse"
                    >
                        <div className="mx-auto h-5 w-40 rounded bg-white/10" />

                        <div className="mx-auto mt-3 h-4 w-16 rounded bg-white/10" />
                    </div>
                ))}

            </section>
        );
    }

    if (!contact) {
        return null;
    }

    const contactData = [
        [contact.email, "Email"],
        [contact.address, "Address"],
        [contact.phone, "Phone"],
    ];

    return (
        <section className="grid lg:grid-cols-3 border-t border-white/10">

            {contactData.map(([title, label]) => (

                <div
                    key={label}
                    className="py-16 px-5 text-center border-r border-white/10 hover:bg-white/5 transition"
                >

                    <h6 className="text-white break-all">
                        {title}
                    </h6>

                    <p className="mt-2 text-white/50">
                        {label}
                    </p>

                </div>

            ))}

        </section>
    );
};

export default Contact;
import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import api from "../../services/api";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        location: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        setSuccess("");
        setError("");

        // Basic validation
        if (!formData.name.trim()) {
            setError("Please enter your name.");
            return;
        }

        if (!formData.email.trim()) {
            setError("Please enter your email.");
            return;
        }

        if (!formData.message.trim()) {
            setError("Please tell us about your project.");
            return;
        }

        setLoading(true);

        try {
            await api.post("/contact-enquiries", {
                name: formData.name.trim(),
                email: formData.email.trim(),
                location: formData.location.trim(),
                message: formData.message.trim(),
            });

            // Success message
            setSuccess(
                "Thank you! Your message has been sent successfully."
            );

            // Clear form
            setFormData({
                name: "",
                email: "",
                location: "",
                message: "",
            });
        } catch (err) {
            console.error("Contact form submission error:", err);

            setError(
                err.response?.data?.message ||
                "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-[#000000] text-white py-6 px-6 lg:px-10">
            <div className="max-w-3xl mx-auto">

                <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >

                    {/* First Row */}
                    <div className="grid md:grid-cols-2 gap-10">

                        {/* Name */}
                        <div>
                            <label className="block text-[20px] font-medium mb-4">
                                What's Your Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-zinc-700 pb-4 text-lg outline-none focus:border-white transition"
                                disabled={loading}
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-[20px] font-medium mb-4">
                                Your E-mail
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-zinc-700 pb-4 text-lg outline-none focus:border-white transition"
                                disabled={loading}
                                required
                            />
                        </div>

                    </div>

                    {/* Location */}
                    <div>
                        <label className="block text-[20px] font-medium mb-4">
                            Your Location
                        </label>

                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-zinc-700 pb-4 text-lg outline-none focus:border-white transition"
                            disabled={loading}
                        />
                    </div>

                    {/* Project */}
                    <div>
                        <label className="block text-[20px] font-medium">
                            Tell Us About Your Project
                        </label>

                        <textarea
                            rows="4"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full resize-none bg-transparent border-b border-zinc-700 pb-0 text-lg outline-none focus:border-white transition"
                            disabled={loading}
                            required
                        ></textarea>
                    </div>

                    {/* Success Message */}
                    {success && (
                        <div className="text-center pt-2">
                            <p className="text-green-400 text-sm">
                                {success}
                            </p>
                        </div>
                    )}

                    {/* Error Message */}
                    {error && (
                        <div className="text-center pt-2">
                            <p className="text-red-400 text-sm">
                                {error}
                            </p>
                        </div>
                    )}

                    {/* Button */}
                    <div className="flex justify-center pt-2">

                        <button
                            type="submit"
                            disabled={loading}
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-full
                                border
                                border-white
                                px-12
                                py-5
                                text-xl
                                font-medium
                                transition-all
                                duration-500
                                hover:text-black
                                disabled:opacity-50
                                disabled:cursor-not-allowed
                            "
                        >

                            {/* Hover Background */}
                            <span
                                className="
                                    absolute
                                    inset-0
                                    scale-y-0
                                    origin-bottom
                                    bg-white
                                    transition-transform
                                    duration-500
                                    group-hover:scale-y-100
                                "
                            />

                            {/* Button Content */}
                            <span className="relative flex items-center gap-1">

                                {loading ? (
                                    <>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <ArrowUpRight size={20} />
                                    </>
                                )}

                            </span>

                        </button>

                    </div>

                </form>
            </div>
        </section>
    );
};

export default ContactForm;
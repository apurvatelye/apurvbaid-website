import { ArrowRight, Upload } from "lucide-react";
import { useState } from "react";
import api from "../../services/api";

export default function CareerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleResumeChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      setError("Please upload a PDF, DOC or DOCX file.");
      setResume(null);

      return;
    }

    setError("");
    setResume(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.position ||
      !formData.message
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    if (formData.position === "Select Position") {
      setError("Please select a position.");
      return;
    }

    try {
      setLoading(true);

      const data = new FormData();

      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("position", formData.position);
      data.append("message", formData.message);

      if (resume) {
        data.append("resume", resume);
      }

      const response = await api.post("/career-applications", data);

      console.log("Career application submitted:", response.data);

      setSuccess("Your application has been submitted successfully.");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        message: "",
      });

      setResume(null);

      // Reset file input
      const fileInput = document.getElementById("resume-upload");

      if (fileInput) {
        fileInput.value = "";
      }
    } catch (err) {
      console.error("Career application error:", err);

      setError(
        err.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-black text-white py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}

        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          <div>
            <p className="uppercase tracking-[0.35em] text-xs text-neutral-500 mb-5">
              Careers
            </p>

            <h2 className="text-5xl md:text-7xl font-light leading-[1.05] tracking-tight">
              Build Spaces.
              <br />
              Build Your
              <span className="italic font-normal"> Future.</span>
            </h2>
          </div>

          <div className="flex items-end">
            <p className="text-neutral-600 text-lg leading-8 max-w-lg">
              We believe exceptional design begins with exceptional people. If
              you're passionate about architecture, interiors, visualization, or
              project execution, we'd love to hear from you.
            </p>
          </div>
        </div>

        {/* Success Message */}

        {success && (
          <div className="mb-10 border border-green-500/40 bg-green-500/10 text-green-400 px-6 py-4">
            {success}
          </div>
        )}

        {/* Error Message */}

        {error && (
          <div className="mb-10 border border-red-500/40 bg-red-500/10 text-red-400 px-6 py-4">
            {error}
          </div>
        )}

        {/* Form */}

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 gap-12">
          {/* Left */}

          <div className="space-y-10">
            {/* Name */}

            <div>
              <label className="block text-sm uppercase tracking-[0.2em] mb-4">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border-b border-neutral-300 pb-4 outline-none bg-transparent focus:border-white transition-all duration-300 placeholder:text-neutral-400"
                required
              />
            </div>

            {/* Email */}

            <div>
              <label className="block text-sm uppercase tracking-[0.2em] mb-4">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full border-b border-neutral-300 pb-4 outline-none bg-transparent focus:border-white transition-all duration-300 placeholder:text-neutral-400"
                required
              />
            </div>

            {/* Phone */}

            <div>
              <label className="block text-sm uppercase tracking-[0.2em] mb-4">
                Phone
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className="w-full border-b border-neutral-300 pb-4 outline-none bg-transparent focus:border-white transition-all duration-300 placeholder:text-neutral-400"
                required
              />
            </div>

            {/* Position */}

            <div>
              <label className="block text-sm uppercase tracking-[0.2em] mb-4">
                Position Applying For
              </label>

              <select
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="w-full border-b border-neutral-600 bg-neutral-900 text-white pb-4 px-2 outline-none focus:border-white transition-all duration-300"
                required
              >
                <option value="" className="bg-neutral-900 text-white">
                  Select Position
                </option>

                <option
                  value="Interior Designer"
                  className="bg-neutral-900 text-white"
                >
                  Interior Designer
                </option>

                <option value="Architect" className="bg-neutral-900 text-white">
                  Architect
                </option>

                <option
                  value="3D Visualizer"
                  className="bg-neutral-900 text-white"
                >
                  3D Visualizer
                </option>

                <option
                  value="Site Supervisor"
                  className="bg-neutral-900 text-white"
                >
                  Site Supervisor
                </option>

                <option
                  value="Project Manager"
                  className="bg-neutral-900 text-white"
                >
                  Project Manager
                </option>
              </select>
            </div>
          </div>

          {/* Right */}

          <div className="space-y-10">
            {/* Cover Letter */}

            <div>
              <label className="block text-sm uppercase tracking-[0.2em] mb-4">
                Cover Letter
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={8}
                placeholder="Tell us about yourself..."
                className="w-full border border-neutral-300 p-6 outline-none resize-none focus:border-white transition-all duration-300 placeholder:text-neutral-400"
                required
              />
            </div>

            {/* Upload */}

            <div>
              <label className="block text-sm uppercase tracking-[0.2em] mb-4">
                Resume
              </label>

              <label className="border border-dashed border-neutral-400 rounded-sm h-44 flex flex-col items-center justify-center cursor-pointer hover:border-white transition">
                <Upload size={34} className="text-neutral-400 mb-4" />

                <p className="text-neutral-300">
                  {resume ? resume.name : "Upload Resume"}
                </p>

                <span className="text-sm text-neutral-400 mt-2">
                  PDF / DOC / DOCX
                </span>

                <input
                  id="resume-upload"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleResumeChange}
                  className="hidden"
                />
              </label>
            </div>

            {/* Button */}

            <button
              type="submit"
              disabled={loading}
              className={`group inline-flex items-center gap-4 border border-white px-8 py-4 uppercase tracking-[0.25em] text-sm transition-all duration-500 ${
                loading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-white hover:text-black"
              }`}
            >
              {loading ? "Submitting..." : "Submit Application"}

              {!loading && (
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-2 transition-transform duration-300"
                />
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

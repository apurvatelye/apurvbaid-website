import { useEffect, useState } from "react";
import FAQItem from "./FAQItem";
import api from "../../services/api";

export default function FAQ() {
  const [faqs, setFaqs] = useState([]);
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true);

  // =========================
  // FETCH FAQ FROM API
  // =========================
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        setLoading(true);

        const response = await api.get("/faqs");

        // Only show active FAQs on public website
        const activeFaqs = Array.isArray(response.data)
          ? response.data.filter((faq) => faq.active === true)
          : [];

        setFaqs(activeFaqs);
      } catch (error) {
        console.error("Failed to load FAQs:", error);
        setFaqs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  // =========================
  // LOADING
  // =========================
  if (loading) {
    return (
      <section className="bg-black py-28">
        <div className="max-w-[1500px] mx-auto px-6">
          <div className="rounded-[34px] bg-[#161616] border border-zinc-700">
            <div className="py-20 text-center">
              <p className="text-zinc-400 text-lg">
                Loading FAQs...
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // =========================
  // NO FAQ
  // =========================
  if (faqs.length === 0) {
    return (
      <section className="bg-black py-28">
        <div className="max-w-[1500px] mx-auto px-6">
          <div className="rounded-[34px] bg-[#161616] border border-zinc-700">
            <div className="py-20 text-center">
              <h2 className="text-5xl md:text-7xl font-light text-white mb-6">
                Frequently Asked{" "}
                <span className="text-[#B06C48]">
                  Questions
                </span>
              </h2>

              <p className="text-zinc-500">
                No FAQs available at the moment.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // =========================
  // FAQ UI
  // =========================
  return (
    <section className="bg-black py-28">
      <div className="max-w-[1500px] mx-auto px-6">

        <div className="rounded-[34px] bg-[#161616] border border-zinc-700">

          <div className="py-20">

            <h2
              className="
                text-center
                text-5xl
                md:text-7xl
                font-light
                text-white
                mb-16
              "
            >
              Frequently Asked{" "}

              <span className="text-[#B06C48]">
                Questions
              </span>
            </h2>

            <div className="space-y-6 px-8 md:px-12 pb-10">

              {faqs.map((faq, index) => (
                <FAQItem
                  key={faq.id}
                  faq={faq}
                  active={active === index}
                  onClick={() =>
                    setActive(
                      active === index ? -1 : index
                    )
                  }
                />
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
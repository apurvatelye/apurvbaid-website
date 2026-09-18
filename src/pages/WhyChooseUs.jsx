import React from "react";

/**
 * ATEL'YE APURV — "Why Choose Us"
 *
 * Design tokens
 * --wcu-bg:        #14100D  (near-black, warm undertone)
 * --wcu-panel:     #1C1712  (card surface, slightly lifted)
 * --wcu-line:      #7A4A28  (copper rule / border, dimmed)
 * --wcu-accent:    #C9793B  (copper — eyebrow, dividers, close)
 * --wcu-ink:       #F3ECE1  (headings, high-contrast cream)
 * --wcu-body:      #B9AF9F  (paragraph text, muted warm grey)
 * --wcu-ghost:     #2A2119  (icon roundel fill)
 *
 * Type: "Cormorant Garamond" for display/headings (matches the light,
 * bookish serif in the source), system sans for body copy so long
 * paragraphs stay easy to scan at small sizes.
 *
 * Layout: five reasons, alternating left/right offset — mirrors the
 * staggered card rhythm of the reference PDF rather than a uniform grid.
 */

const REASONS = [
    {
        title: "Your Story. Our Canvas.",
        body: "We listen, understand, and turn your personality, lifestyle, and dreams into a space that feels unmistakably yours.",
        align: "left",
    },
    {
        title: "Beautiful, But Never Just Beautiful.",
        body: "A space can look stunning and still not work. We bring together aesthetics and functionality to create interiors that are as effortless to live in as they are beautiful to look at.",
        align: "right",
    },
    {
        title: "Details Make the Difference.",
        body: "The right texture. The perfect light. A thoughtful corner. We obsess over the little things because they're often what make a space feel extraordinary.",
        align: "left",
    },
    {
        title: "From \u201CWhat If?\u201D to \u201CWow.\u201D",
        body: "Great spaces begin with a great idea. We transform possibilities into thoughtfully designed realities \u2014 balancing creativity, character, and purpose at every step.",
        align: "right",
    },
    {
        title: "No Templates. No Copy-Paste.",
        body: "Your space deserves more than a Pinterest-perfect replica. Every ATEL\u2019YE APURV project is imagined from scratch, shaped around the people who will actually live, work, and experience it.",
        align: "left",
    },
];

function Roundel() {
    return (
        <div className="wcu-roundel" aria-hidden="true">
            <svg viewBox="0 0 64 64" width="30" height="30">
                <circle cx="32" cy="32" r="31" fill="none" stroke="#C9793B" strokeWidth="1" opacity="0.55" />
                <path
                    d="M32 16 C 24 24, 24 40, 32 48 C 40 40, 40 24, 32 16 Z"
                    fill="none"
                    stroke="#C9793B"
                    strokeWidth="1.1"
                    opacity="0.9"
                />
                <line x1="32" y1="16" x2="32" y2="48" stroke="#C9793B" strokeWidth="0.75" opacity="0.6" />
            </svg>
        </div>
    );
}

function ReasonCard({ title, body, align }) {
    const isRight = align === "right";
    return (
        <div className={`wcu-card-row ${isRight ? "wcu-card-row--right" : ""}`}>
            <div className={`wcu-card ${isRight ? "wcu-card--reverse" : ""}`}>
                {!isRight && <Roundel />}
                <div className="wcu-card-text">
                    <h3>{title}</h3>
                    <p>{body}</p>
                </div>
                {isRight && (
                    <>
                        <span className="wcu-tick" aria-hidden="true" />
                        <Roundel />
                    </>
                )}
            </div>
        </div>
    );
}

export default function WhyChooseUs() {
    return (
        <section className="wcu-section">
            <style>{`
        .wcu-section {
          --wcu-bg: #14100D;
          --wcu-panel: #1C1712;
          --wcu-line: #7A4A28;
          --wcu-accent: #C9793B;
          --wcu-ink: #F3ECE1;
          --wcu-body: #B9AF9F;
          --wcu-ghost: #2A2119;

          position: relative;
          background: var(--wcu-bg);
          color: var(--wcu-ink);
          padding: 96px 24px 120px;
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .wcu-section * { box-sizing: border-box; }

        .wcu-section::before,
        .wcu-section::after {
          content: "";
          position: absolute;
          border: 1px solid var(--wcu-line);
          border-radius: 50%;
          opacity: 0.35;
          pointer-events: none;
        }
        .wcu-section::before {
          width: 420px;
          height: 420px;
          top: -220px;
          right: -160px;
        }
        .wcu-section::after {
          width: 260px;
          height: 260px;
          bottom: 40px;
          left: -140px;
        }

        .wcu-inner {
          position: relative;
          max-width: 760px;
          margin: 0 auto;
        }

        .wcu-eyebrow {
          font-size: 13px;
          letter-spacing: 0.14em;
          color: var(--wcu-accent);
          font-weight: 600;
          margin: 0 0 18px;
        }

        .wcu-heading {
          font-family: "Cormorant Garamond", "Playfair Display", Georgia, serif;
          font-weight: 500;
          font-size: clamp(40px, 6vw, 56px);
          line-height: 1.08;
          margin: 0 0 22px;
          color: var(--wcu-ink);
        }

        .wcu-rule {
          width: 64px;
          height: 2px;
          background: var(--wcu-accent);
          border: none;
          margin: 0 0 26px;
        }

        .wcu-kicker {
          font-size: 12.5px;
          letter-spacing: 0.1em;
          font-weight: 700;
          color: var(--wcu-accent);
          margin: 0 0 12px;
        }

        .wcu-intro {
          font-size: 16px;
          line-height: 1.65;
          color: var(--wcu-body);
          max-width: 46ch;
          margin: 0 0 64px;
        }

        .wcu-list {
          display: flex;
          flex-direction: column;
          gap: 34px;
        }

        .wcu-card-row {
          display: flex;
        }
        .wcu-card-row--right {
          justify-content: flex-end;
        }

        .wcu-card {
          position: relative;
          display: flex;
          align-items: center;
          gap: 22px;
          background: var(--wcu-panel);
          border: 1px solid rgba(201, 121, 59, 0.35);
          border-radius: 999px;
          padding: 22px 34px 22px 22px;
          width: 100%;
          max-width: 560px;
        }
        .wcu-card--reverse {
          padding: 22px 22px 22px 34px;
          max-width: 600px;
          margin-right: 4%;
        }

        .wcu-roundel {
          flex: 0 0 auto;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: var(--wcu-ghost);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .wcu-tick {
          flex: 0 0 auto;
          width: 1px;
          align-self: stretch;
          background: rgba(201, 121, 59, 0.4);
          margin: 4px 0;
        }

        .wcu-card-text h3 {
          font-family: "Cormorant Garamond", "Playfair Display", Georgia, serif;
          font-weight: 500;
          font-size: 22px;
          line-height: 1.3;
          margin: 0 0 8px;
          color: var(--wcu-ink);
        }

        .wcu-card-text p {
          font-size: 14px;
          line-height: 1.6;
          color: var(--wcu-body);
          margin: 0;
        }

        .wcu-close {
          text-align: center;
          margin-top: 88px;
        }

        .wcu-close-kicker {
          font-size: 13px;
          letter-spacing: 0.08em;
          font-weight: 700;
          color: var(--wcu-accent);
          margin: 0 0 14px;
        }

        .wcu-close-line {
          font-family: "Cormorant Garamond", "Playfair Display", Georgia, serif;
          font-size: clamp(28px, 4vw, 38px);
          font-weight: 500;
          margin: 0 0 20px;
        }

        .wcu-close-rule {
          width: 64px;
          height: 2px;
          background: var(--wcu-accent);
          border: none;
          margin: 0 auto;
        }

        @media (max-width: 640px) {
          .wcu-section { padding: 64px 18px 80px; }
          .wcu-card-row--right { justify-content: flex-start; }
          .wcu-card, .wcu-card--reverse {
            flex-direction: column;
            align-items: flex-start;
            border-radius: 28px;
            padding: 24px;
            max-width: 100%;
            margin-right: 0;
          }
          .wcu-tick { display: none; }
        }

        @media (prefers-reduced-motion: no-preference) {
          .wcu-card { transition: border-color 0.25s ease, transform 0.25s ease; }
          .wcu-card:hover { border-color: rgba(201, 121, 59, 0.7); transform: translateY(-2px); }
        }
      `}</style>

            <div className="wcu-inner">
                <p className="wcu-eyebrow">ATEL&rsquo;YE APURV</p>
                <h2 className="wcu-heading">Why Choose Us?</h2>
                <hr className="wcu-rule" />

                <p className="wcu-kicker">DESIGN IS MORE THAN WHAT YOU SEE</p>
                <p className="wcu-intro">
                    It&rsquo;s how a space makes you feel, every single day. Here&rsquo;s what sets us apart.
                </p>

                <div className="wcu-list">
                    {REASONS.map((r) => (
                        <ReasonCard key={r.title} {...r} />
                    ))}
                </div>

                <div className="wcu-close">
                    <p className="wcu-close-kicker">BECAUSE THE BEST SPACES DON&rsquo;T JUST IMPRESS YOU.</p>
                    <p className="wcu-close-line">They feel like you.</p>
                    <hr className="wcu-close-rule" />
                </div>
            </div>
        </section>
    );
}
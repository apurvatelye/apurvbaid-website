export default function WhyChooseUs() {
  return (
    <section className="wcu-section">
      <style>{`
        .wcu-section {
          --wcu-bg: #14100D;
          --wcu-accent: #C9793B;
          --wcu-ink: #F3ECE1;
          --wcu-body: #B9AF9F;

          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--wcu-bg);
          color: var(--wcu-ink);
          padding: 100px 24px;
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .wcu-section * {
          box-sizing: border-box;
        }

        .wcu-section::before,
        .wcu-section::after {
          content: "";
          position: absolute;
          border: 1px solid #7A4A28;
          border-radius: 50%;
          opacity: 0.3;
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
          bottom: -120px;
          left: -100px;
        }

        .wcu-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .wcu-eyebrow {
          font-size: 13px;
          letter-spacing: 0.18em;
          color: var(--wcu-accent);
          font-weight: 600;
          margin-bottom: 24px;
        }

        .wcu-heading {
          font-family: "Cormorant Garamond", "Playfair Display", Georgia, serif;
          font-weight: 500;
          font-size: clamp(38px, 6vw, 66px);
          line-height: 1.15;
          margin: 0 0 30px;
          color: var(--wcu-ink);
        }

        .wcu-rule {
          width: 65px;
          height: 2px;
          background: var(--wcu-accent);
          border: none;
          margin: 0 auto 45px;
        }

        .wcu-content {
          max-width: 760px;
          margin: 0 auto;
        }

        .wcu-content p {
          font-size: clamp(15px, 1.5vw, 18px);
          line-height: 1.9;
          color: var(--wcu-body);
          font-weight: 400;
          margin: 0 0 22px;
        }

        .wcu-content .wcu-highlight {
          color: var(--wcu-ink);
          font-family: "Cormorant Garamond", "Playfair Display", Georgia, serif;
          font-size: clamp(23px, 3vw, 30px);
          line-height: 1.5;
          margin-top: 35px;
        }

        .wcu-bottom-line {
          width: 45px;
          height: 1px;
          background: var(--wcu-accent);
          margin: 40px auto 0;
        }

        @media (max-width: 640px) {
          .wcu-section {
            padding: 85px 22px;
          }

          .wcu-heading {
            font-size: 40px;
          }

          .wcu-rule {
            margin-bottom: 32px;
          }

          .wcu-content p {
            font-size: 15px;
            line-height: 1.8;
          }
        }
      `}</style>

      <div className="wcu-inner">
        <p className="wcu-eyebrow">ATEL&rsquo;YE APURV</p>

        <h1 className="wcu-heading">
          What Makes Atel&rsquo;ye Apurv Different?
        </h1>

        <hr className="wcu-rule" />

        <div className="wcu-content">
          <p>
            Many designers create beautiful interiors. We strive to create
            spaces that improve everyday living.
          </p>

          <p>
            Our designs are rooted in experience, shaped by thoughtful planning,
            inspired by emotion and refined through meticulous attention to
            detail.
          </p>

          <p>
            Every project carries its own identity because every client has a
            different story.
          </p>

          <p className="wcu-highlight">
            And that&rsquo;s exactly how it should be.
          </p>
        </div>

        <div className="wcu-bottom-line" />
      </div>
    </section>
  );
}

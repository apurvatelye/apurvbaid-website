
export default function SpacePsychology() {
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

        .wcu-block {
          margin-bottom: 75px;
        }

        .wcu-block:last-child {
          margin-bottom: 0;
        }

        .wcu-subheading {
          font-family: "Cormorant Garamond", "Playfair Display", Georgia, serif;
          font-size: clamp(28px, 4vw, 40px);
          line-height: 1.2;
          font-weight: 500;
          color: var(--wcu-ink);
          margin: 0 0 28px;
        }

        .wcu-block .wcu-highlight {
          margin-top: 30px;
        }

        .wcu-questions {
          color: var(--wcu-accent) !important;
          font-style: italic;
          line-height: 2 !important;
        }

        .wcu-quote {
          border-left: 2px solid var(--wcu-accent);
          padding: 8px 0 8px 22px;
          margin: 28px auto;
          max-width: 650px;
          text-align: left;
          font-family: "Cormorant Garamond", "Playfair Display", Georgia, serif;
          font-size: clamp(22px, 3vw, 30px);
          line-height: 1.5;
          color: var(--wcu-ink);
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

          .wcu-block {
            margin-bottom: 58px;
          }

          .wcu-subheading {
            font-size: 31px;
          }
        }
      `}</style>

      <div className="wcu-inner">

        {/* Main Introduction */}
        <p className="wcu-eyebrow">ATEL&rsquo;YE APURV</p>

        <h1 className="wcu-heading">
          We Design The Way They Make You Feel.
        </h1>

        <hr className="wcu-rule" />

        <div className="wcu-content wcu-block">
          <p>
            When people think about interior design, they often think about
            colours, furniture, lighting or expensive materials.
            We think about something else first.
          </p>

          <p className="wcu-highlight">
            How will this space make someone feel every single day?
          </p>

          <p>
            Because that's what truly matters.
            A beautifully designed home means very little if it doesn't make
            you feel at peace.
          </p>

          <p>
            An office filled with premium finishes isn't successful if it
            doesn't inspire people to do their best work.
          </p>

          <p>
            A restaurant isn't memorable because of its chairs—it's memorable
            because of the atmosphere people carry with them long after
            they've left.
          </p>

          <p className="wcu-highlight">
            That's the idea behind what we call Space Psychology.
          </p>
        </div>

        {/* What Is Space Psychology */}
        <div className="wcu-content wcu-block">
          <h2 className="wcu-subheading">
            What Is Space Psychology?
          </h2>

          <p>
            Space Psychology is the understanding that the spaces we live
            and work in quietly influence our emotions, behaviour and
            overall well-being.
          </p>

          <p className="wcu-questions">
            The amount of natural light entering a room.<br />
            The way you move through your home.<br />
            The height of a ceiling.<br />
            The texture you touch every day.<br />
            The colours surrounding you.<br />
            The distance between family members while they interact.<br />
            The privacy of a workspace.<br />
            Even the view from your favourite chair.
          </p>

          <p>
            None of these things seem important individually.
            Together, they shape how we experience life.
          </p>

          <p>
            Most people notice when a space looks beautiful.
            Very few realise why a space simply feels right.
          </p>

          <p className="wcu-highlight">
            That invisible feeling is what we design for.
          </p>
        </div>

        {/* Design Is More Than Decoration */}
        <div className="wcu-content wcu-block">
          <h2 className="wcu-subheading">
            Design Is More Than Decoration
          </h2>

          <p>
            Many interiors are designed to impress visitors.
            We design spaces that continue to support the people who live
            inside them long after the compliments fade away.
          </p>

          <p>
            Because your home is where your children grow up.
            Your office is where ideas become businesses.
            Your bedroom is where your mind finds rest.
            Your dining table is where memories are created.
          </p>

          <p>
            Design has the power to influence all of these moments.
            That responsibility should never be taken lightly.
          </p>
        </div>

        {/* Every Client Is Different */}
        <div className="wcu-content wcu-block">
          <h2 className="wcu-subheading">
            Every Client Is Different.<br />
            Every Design Should Be Too.
          </h2>

          <p>
            We don't begin with Pinterest boards.
            We begin with conversations.
          </p>

          <p>
            Before making design decisions, we try to understand the people
            behind the project.
          </p>

          <p className="wcu-questions">
            How do you start your mornings?<br />
            Where does your family naturally gather?<br />
            Do you enjoy hosting guests?<br />
            Do you work from home?<br />
            Do you prefer quiet spaces or lively ones?<br />
            What makes you feel comfortable?<br />
            What inspires you?
          </p>

          <p>
            These answers become more valuable than any trend.
            Because no catalogue can tell us how you live.
            Only you can.
          </p>
        </div>

        {/* Science Meets Soul */}
        <div className="wcu-content wcu-block">
          <h2 className="wcu-subheading">
            The Science Meets The Soul
          </h2>

          <p>
            Good design is both emotional and logical.
            Behind every space we create lies careful thought about movement,
            proportions, lighting, ergonomics, acoustics, materials and
            functionality.
          </p>

          <p>
            But numbers alone never create beautiful spaces.
            Emotion does.
          </p>

          <p>
            We believe the best interiors are where science quietly supports
            human experience.
            When both come together, a space doesn't just function well.
          </p>

          <p className="wcu-highlight">
            It feels effortless.
          </p>
        </div>

        {/* Our Responsibility */}
        <div className="wcu-content wcu-block">
          <h2 className="wcu-subheading">
            Our Responsibility As Designers
          </h2>

          <p>
            We don't believe our responsibility ends after handing over
            drawings.
            Every recommendation we make carries an impact on someone's
            everyday life.
          </p>

          <p>
            The placement of a window.
            The flow of a kitchen.
            The privacy of a bedroom.
            The atmosphere of a workplace.
          </p>

          <p>
            These are decisions people will live with for years.
            That is why we approach every project with care, curiosity
            and honesty.
          </p>

          <p className="wcu-highlight">
            Not because perfection exists—<br />
            but because people deserve spaces designed thoughtfully.
          </p>
        </div>

        {/* Beauty Is A Result */}
        <div className="wcu-content wcu-block">
          <h2 className="wcu-subheading">
            Beauty Is A Result, Not The Goal
          </h2>

          <p>
            A beautiful space is important.
            But beauty alone doesn't create happiness.
          </p>

          <p>
            We believe true design succeeds when people stop noticing
            the design and simply enjoy living inside it.
          </p>

          <p className="wcu-questions">
            When mornings feel calmer.<br />
            When work feels more focused.<br />
            When conversations happen naturally.<br />
            When coming home feels comforting.
          </p>

          <p className="wcu-highlight">
            That's when design has truly done its job.
          </p>
        </div>

        {/* A Note From Apurv */}
        <div className="wcu-content wcu-block">
          <p className="wcu-eyebrow">A PERSONAL NOTE</p>

          <h2 className="wcu-subheading">
            A Note From Apurv
          </h2>

          <p>
            When I started Atel'ye Apurv, I wasn't chasing a signature style.
            I wasn't trying to make every project look similar.
            I wanted every project to feel personal.
          </p>

          <p>
            Over the years, I've realised that the most meaningful compliment
            is not "Your design looks beautiful."
          </p>

          <p className="wcu-highlight">
            It's when a client says,
          </p>

          <div className="wcu-quote">
            "This space feels like us."
          </div>

          <p>
            That sentence reminds me why I chose this profession.
            Because at the end of the day, we are not designing walls,
            furniture or ceilings.
            We are designing the backdrop against which people's lives unfold.
          </p>

          <p>
            And if our work can make those everyday moments a little calmer,
            a little happier and a little more meaningful—
            then we've done our job.
          </p>
        </div>

        <div className="wcu-bottom-line" />

      </div>
    </section>
  );
}

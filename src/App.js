import { useState } from "react";
import "./App.css";

function App() {
  const [showLetter, setShowLetter] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);
  const [journeyChoice, setJourneyChoice] = useState(null);

  const memories = [
    {
      title: "The Beginning",
      text: "The day our story started...",
      photo: "/memories/US.jpg"
    },
    {
      title: "Our First Special Moment",
      text: "One of those memories I'll always keep close to my heart.",
      photo:  "/memories/us.webp"
    },
    {
      title: "Our Little Moments",
      text: "The small moments that became some of my favorite memories.",
      photo:  "/memories/moment.jpg"
    },
    {
      title: "Us",
      text: "Two people, one beautiful story.",
      photo:  "/memories/special.jpg"
    },
  ];

  const thingsILove = [
    "I love that you're the person I get to call mine ♾️" ,
    "I love the feeling that when I think about my future, I see you in it. ♾️",
    "I love your voice somehow, it always feels like my favourite sound. 🎧",
    "I love how you make me feel comfortable being myself around you.",
    "I Love The way you make me laugh",
    "I love your way of making me feel like I belong in your life",
  ];

  return (
    <div className="website">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">Us ♡</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#story">Our Story</a>
          <a href="#memories">Memories</a>
          <a href="#love">Things I Love</a>
          <a href="#gifts">Gifts</a>
          <a href="#future">Our Future</a>
          <a href="#letter">Letter</a>
          <a href="#surprise">Surprise</a>
        </div>
      </nav>

      {/* HOME */}
      <section id="home" className="hero section">
        <div className="floating-heart heart1">♡</div>
        <div className="floating-heart heart2">♡</div>
        <div className="floating-heart heart3">♡</div>

        <p className="small-heading">A LITTLE SOMETHING FOR YOU</p>

        <h1>
          For the man who
          <span> has my heart ❤️</span>
        </h1>

        <p className="hero-text">
          I created this little corner of the internet
          just for you...
        </p>

        <a href="#story" className="main-button">
          Start Our Story →
        </a>
      </section>

      {/* OUR STORY */}
      <section id="story" className="section story-section">
        <p className="section-label">CHAPTER ONE</p>
        <h2>Our Story 💌</h2>

        <p className="section-intro">
          Every love story has a beginning.
          Ours is one of my favorite stories to tell.
        </p>

        <div className="timeline">

          <div className="timeline-item">
  <div className="timeline-dot">♡</div>

  <div className="timeline-card first-meeting">

    <span>24 DECEMBER</span>

    <h3>💌 It All Started With a “Hi”</h3>

    <p className="story-intro">
      It all started with a simple message on Instagram...
    </p>

    {/* INSTAGRAM */}
    <div className="chat-title instagram-title">
      <span>📷</span> Instagram
    </div>

    <div className="chat-row left">
      <div className="chat-bubble">
        <p>Hi Samruddhi, Adarsh this side. ❤️</p>
        <small>4:02 PM</small>
      </div>
    </div>

    {/* HER REACTION */}
    <div className="story-reaction">
      <span>Me:</span>
      <strong>Didn't reply 😭😂</strong>
    </div>

    <p className="story-text">
      And honestly… I didn't reply. 😭😂
    </p>

    <p className="story-text">
      But you didn't give up that easily.
    </p>

    {/* WHATSAPP */}
    <div className="chat-title whatsapp-title">
      <span>💬</span> WhatsApp
    </div>

    <div className="chat-row right">
      <div className="chat-bubble whatsapp-bubble">
        <p>Hi Samruddhi... ❤️</p>
        <small>4:41 PM ✓✓</small>
      </div>
    </div>

    <div className="story-ending">
      <p>
        Little did we know that those two simple messages
        would become the beginning of...
      </p>

      <h4>OUR STORY ✨❤️</h4>
    </div>

  </div>
</div>

          {/* STORY 2 — FAMILIES SAID YES */}
<div className="timeline-item">
  <div className="timeline-dot">💍</div>

  <div className="timeline-card family-story">

    <span>13 JANUARY 2026</span>

    <h3>💍 When Everything Changed</h3>

    <h4>Our Families Said Yes</h4>

    <p className="story-text">
      After our first introduction, our families met a few more times
      and we slowly got to know each other.
    </p>

    <p className="story-text">
      There were conversations, meetings, and lots of little discussions
      between both families. ❤️
    </p>

    <div className="special-date">
      <div className="date-icon">✨</div>

      <div>
        <small>THE DAY IT ALL BECAME REAL</small>
        <strong>13 January 2026</strong>
      </div>
    </div>

    <p className="story-text">
      And then came <strong>13 January 2026</strong> — the day our families
      decided that we should take this relationship forward and
      <strong> tie the knot. 💍</strong>
    </p>

    <p className="story-text">
      It was a simple family decision, but it marked the beginning
      of something very special for both of us.
    </p>

    <div className="arranged-love">
      <p>
        We may have met through an arranged marriage,
        <br />
        but from that day on, we started writing
      </p>

      <h4>OUR OWN STORY. ❤️</h4>
    </div>

    <div className="chapter-ending">
      <p>Two families came together,</p>
      <p>two people found each other,</p>
      <p>and a new chapter began. ✨</p>
    </div>

  </div>
</div>

          {/* STORY 3 — WE BECAME OFFICIAL */}
<div className="timeline-item">
  <div className="timeline-dot">💍</div>

  <div className="timeline-card official-story">

    <span>30 JANUARY 2026</span>

    <h3>💍 And Then Came Us</h3>

    <h4>We Became Official</h4>

    <p className="story-text">
      <strong>30 January 2026</strong> — the day you and I finally
      became <strong>“us.”</strong> ❤️
    </p>

    <p className="story-text">
      We got engaged, and it was such a happy moment for both of us.
      💍✨
      <br />
      Our families were happy, and we were so happy too.
    </p>

    <div className="official-moment">
      <span>✨</span>
      <div>
        <small>THE DAY WE BECAME</small>
        <strong>FIANCÉ & FIANCÉE</strong>
      </div>
      <span>💍</span>
    </div>

    <p className="story-text">
      From that day, we started this beautiful journey together as
      <strong> fiancé and fiancée. ❤️</strong>
    </p>

    <div className="story-ending">
      <p>
        Two people.
        <br />
        One promise.
        <br />
        One beautiful beginning. ❤️
      </p>
    </div>

  </div>
</div>


{/* STORY 4 — FUTURE WEDDING */}
<div className="timeline-item">
  <div className="timeline-dot">💒</div>

  <div className="timeline-card wedding-story">

    <span>29 JANUARY 2027</span>

    <h3>💒 Our Wedding Day</h3>

    <h4>The Day We're Waiting For</h4>

    <p className="story-text">
      And now, we're looking forward to
      <strong> 29 January 2027</strong> —
      the day we will finally get married. ❤️
    </p>

    <div className="countdown-card">
      <span>OUR NEXT CHAPTER</span>
      <strong>29 • 01 • 2027</strong>
      <small>Our Wedding Day 💍</small>
    </div>

    <p className="story-text">
      Our journey began when we started talking in
      <strong> December 2025</strong>,
      <br />
      we got engaged in <strong>January 2026</strong>,
      <br />
      and now we're counting down to
      <strong> January 2027</strong>,
      when we'll begin our life together as husband and wife. 💍✨
    </p>

    <div className="future-love">
      <p>
        The wedding hasn't happened yet…
      </p>

      <h4>
        But the countdown to our forever has begun. ❤️♾️
      </h4>
    </div>

  </div>
</div>

        </div>
      </section>

      {/* MEMORIES */}
      <section id="memories" className="section memories-section"> 
  <p className="section-label">CHAPTER TWO</p> 
  <h2>Our Memories 📸</h2> 
 
  <p className="section-intro"> 
    A collection of little moments that mean everything to me. 
  </p> 
 
  <div className="memory-grid"> 
    {memories.map((memory, index) => ( 
      <div className="memory-card" key={index}> 
        <div className="photo-placeholder"> 
          <img src={memory.photo} alt={memory.title} />
        </div> 
 
        <div className="memory-content"> 
          <h3>{memory.title}</h3> 
          <p>{memory.text}</p> 
        </div> 
      </div> 
    ))} 
  </div> 
 
  <p className="photo-note"> 
    Some moments deserve to be remembered forever ..✨❤️ 
  </p> 
</section>

      {/* THINGS I LOVE */}
      <section id="love" className="section love-section">
        <p className="section-label">CHAPTER THREE</p>
        <h2>Things I Love About You ❤️</h2>

        <p className="section-intro">
          There are probably a thousand things I could write...
          but here are just a few.
        </p>

        <div className="love-grid">
          {thingsILove.map((item, index) => (
            <div className="love-card" key={index}>
              <div className="love-number">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3>{item}</h3>
              <span>♡</span>
            </div>
          ))}
        </div>
      </section>

      {/* GIFTS */}
      <section id="gifts" className="section gifts-section">
        <p className="section-label">A LITTLE SOMETHING</p>
        <h2>Gifts For You 🎁</h2>

        <p className="section-intro">
          Because sometimes a little gift can say what words can't.
        </p>

        <div className="gift-grid">

          <div className="gift-card">
            <div className="gift-icon">📖</div>
            <h3>Siddhartha</h3>
            <p>
              A book chosen especially for you.
              I hope you enjoy every page of it.
            </p>
            <button>For You ♡</button>
          </div>

          <div className="gift-card">
            <div className="gift-icon">🧥</div>
            <h3>A Hoodie</h3>
            <p>
              Something warm and cozy,
              because I want you to think of me whenever you wear it.
            </p>
            <button>For You ♡</button>
          </div>

          <div className="gift-card">
            <div className="gift-icon">🌹</div>
            <h3>A Little Surprise</h3>
            <p>
              Something small, but chosen with a very big heart.
            </p>
            <button>For You ♡</button>
          </div>

        </div>
      </section>

      {/* FUTURE */}
      <section id="future" className="section future-section">
        <p className="section-label">CHAPTER FOUR</p>
        <h2>Our Future 💍</h2>

        <p className="section-intro">
          We have so many chapters left to write.
        </p>

        <div className="future-box">
          <div className="future-item">
            <span>01</span>
            <h3>🏡 Our first home</h3>
            <p>imagining the little place we'll call ours.</p>
          </div>

          <div className="future-item">
            <span>02</span>
            <h3>❤️ Growing together</h3>
            <p>supporting each other's dreams and becoming better together.</p>
          </div>

          <div className="future-item">
            <span>03</span>
            <h3>♾️ Our Future Family</h3>
            <p>someday, when the time is right.</p>
          </div>
          <div className="future-item">
            <span>04</span>
            <h3>♾️ A lifetime of “us”</h3>
            <p>all the ordinary and extraordinary days waiting for us.</p>
          </div>
        </div>
      </section>

      {/* LETTER */}
      <section id="letter" className="section letter-section">

  <p className="section-label">FROM MY HEART</p>

  <h2>A Little Something For You 💌</h2>

  {!showLetter ? (

    <div className="letter-opening">

      <p className="opening-small">
        I kept something special here...
      </p>

      <h3>
        For the person who holds<br />
        a very special place in my heart. ❤️
      </h3>

      <p className="opening-hint">
        Touch the heart to open it
      </p>

      <button
        className="heart-open"
        onClick={() => setShowLetter(true)}
        aria-label="Open love letter"
      >
        <span>♥</span>
      </button>

      <p className="opening-bottom">
        A little birthday surprise, written only for you ✨
      </p>

    </div>

  ) : (

    <div className="letter-wrapper">

      <div className="heart-burst">
        <span>♡</span>
        <span>♥</span>
        <span>♡</span>
        <span>♥</span>
        <span>♡</span>
      </div>

      <div className="letter-paper">

        <div className="letter-top-heart">♥</div>

        <p className="letter-date">
          FOR YOUR SPECIAL DAY
        </p>

        <h3>
          Happy Birthday,<br />
          My Love ❤️
        </h3>

        <div className="letter-line">♡ ───── ♡</div>

        <p>My Love,</p>

        <p>
          Today isn't just another day.
          It's the day the world was lucky enough
          to have <strong>you</strong> in it.
        </p>

        <p>
          And somehow, out of all the people in this world,
          our paths found each other. ❤️
        </p>

        <p>
          I don't think there are enough words in the world
          to explain what you mean to me.
        </p>

        <p>
          Thank you for being a part of my life,
          for all the beautiful memories we've created,
          and for all the moments that are still waiting for us.
        </p>

        <p>
          I hope we continue laughing together,
          supporting each other, annoying each other,
          and creating our own little world.
        </p>

        <div className="birthday-wish">

          <span>🎂</span>

          <p>
            On your birthday, I wish you a life full of
            happiness, success, peace and beautiful moments.
          </p>

          <strong>
            And selfishly, I wish that I get to be beside you
            for as many of those moments as possible. ❤️
          </strong>

        </div>

        <p>
          Whatever the future brings,
          I want you to know that you will always have
          a very special place in my heart.
        </p>

        <div className="forever-message">
          <p>
            You are not just a chapter in my story...
          </p>

          <strong>
            You are the part I want to keep writing forever. ♾️❤️
          </strong>
        </div>

        <p className="signature">
          Forever yours, ❤️
          <br />
          Your girl
        </p>

        <button
          className="heart-close"
          onClick={() => setShowLetter(false)}
          aria-label="Close love letter"
        >
          <span>♥</span>
          <small>close</small>
        </button>

      </div>

    </div>

  )}

</section>

      {/* FINAL SURPRISE */}
      <section id="surprise" className="section surprise-section">

  {!showSurprise ? (

    /* =========================
       STEP 1 — BALLOON
    ========================== */

    <div className="surprise-start">

      <p className="section-label">
        WAIT...
      </p>

      <h2>
        There's One Last Thing... ✨
      </h2>

      <p className="surprise-intro">
        You thought that was everything?
        <br />
        Not quite... ❤️
      </p>

      <p className="surprise-small">
        I made something very special for you.
      </p>

      <button
        className="surprise-balloon"
        onClick={() => setShowSurprise(true)}
        aria-label="Open surprise"
      >
        <span>🎈</span>
      </button>

      <p className="touch-balloon">
        Touch the balloon... 🎈
      </p>

    </div>

  ) : (

    /* =========================
       STEP 2 — AFTER BALLOON
    ========================== */

    <div className="surprise-reveal">

      {/* Floating hearts after balloon burst */}

      <div className="balloon-burst">

        <span>❤️</span>
        <span>♡</span>
        <span>✨</span>
        <span>❤️</span>
        <span>♡</span>
        <span>✨</span>

      </div>


      {/* =========================
          EMOTIONAL MESSAGE
      ========================== */}

      <div className="emotional-message">

        <p className="surprise-label">
          FOR YOU ❤️
        </p>

        <h2>
          Before You See This...
        </h2>

        <p>
          I want you to know that this isn't
          just a picture.
        </p>

        <p>
          It's a little piece of <strong>your life</strong>,
          <br />
          a little piece of <strong>our story</strong>,
          <br />
          and a lot of love from me. ❤️
        </p>

        <p className="emotional-line">
          So please don't get emotional...
          <br />
          because I probably already did while making it. 🥹❤️
        </p>

      </div>


      {/* =========================
          YES / NO QUESTION
      ========================== */}

      <div className="ready-box">

        <p>
          Are you ready to see something
          <br />
          very special?
        </p>

        <h3>
          Your journey. Our memories.
          <br />
          Our story. ❤️
        </h3>

        <div className="ready-buttons">

          <button
            className="yes-button"
            onClick={() => setJourneyChoice("yes")}
          >
            YES, I'M READY ❤️
          </button>

          <button
            className="no-button"
            onClick={() => setJourneyChoice("no")}
          >
            Not yet... 🥺
          </button>

        </div>

      </div>


      {/* =================================================
          STEP 3A — YES
          DON'T GET EMOTIONAL → PHOTO
      ================================================== */}

      {journeyChoice === "yes" && (

        <div className="journey-reveal">

          {/* Message before photo */}

          <div className="dont-cry">

            <div className="message-icon">
              💌
            </div>

            <p>
              Okay...
            </p>

            <strong>
              Don't get too emotional. 🥹❤️
            </strong>

            <small>
              This one is made especially for you.
            </small>

          </div>


          {/* Your journey image */}

          <div className="life-journey-image">

            <img
              src="/memories/ready.png"
              alt="His life journey and our story"
            />

          </div>


          {/* Caption below image */}

          <div className="journey-caption">

            <p>
              From the little boy you once were...
            </p>

            <p>
              to the person you are today...
            </p>

            <p>
              and to the life we're going to build together. ❤️
            </p>

            <h3>
              I'm so proud of you.
            </h3>

          </div>


          {/* Final message */}

          <div className="final-love">

            <div className="big-heart">
              ♥
            </div>

            <h2>
              My Favorite Person
            </h2>

            <p>
              Thank you for being you.
            </p>

            <p>
              Thank you for being part of my story.
            </p>

            <p>
              And thank you for becoming
              such a beautiful part of my future.
            </p>

            <h3>
              Today, tomorrow,
              <br />
              and every tomorrow after that. ❤️
            </h3>

            <div className="forever">
              YOU + ME = FOREVER
            </div>

          </div>

        </div>

      )}


      {/* =================================================
          STEP 3B — NO
          SHOW ONLY AFTER CLICKING NOT YET
      ================================================== */}

      {journeyChoice === "no" && (

        <div className="not-ready">

          <div className="not-ready-heart">
            🥺❤️
          </div>

          <h3>
            That's okay...
          </h3>

          <p>
            Take your time.
            <br />
            There is no hurry.
          </p>

          <strong>
            But just remember...
            <br />
            I'll still be here,
            waiting to show you
            a little piece of your story. ❤️
          </strong>

          <button
            className="try-again"
            onClick={() => setJourneyChoice(null)}
          >
            Okay... I'm Ready ❤️
          </button>

        </div>

      )}

    </div>

  )}

</section>

      {/* FOOTER */}
      {/* FOOTER */}
<footer className="romantic-footer">

  <div className="footer-heart">♥</div>

  <h3>And this is only the beginning...</h3>

  <p>
    From a simple “Hi”  
    to a lifetime of “Us”. ❤️
  </p>

  <div className="footer-line"></div>

  <span>
    Our story is still being written...
  </span>

  <small>
    One beautiful chapter at a time. ♾️
  </small>

</footer>

    </div>
  );
}

export default App;
// import React from "react";
// import "./About.css";

// const About = () => {
//   return (
//     <div className="about-page">
      
//       <section className="about-hero">
//         <h1>About Active Pulse</h1>
//         <p>
//           India’s premium platform to discover, register, and participate in
//           sports events across the country.
//         </p>
        
//       </section>


//       <section className="about-content">
//         <div className="about-card">
//           <h2>Our Vision</h2>
//           <p>
//             Active Pulse was created with one clear vision — to bring all sports
//             events in India onto a single, powerful platform. From marathons and
//             walkathons to trekking, football, cricket, swimming, and more, we
//             aim to make sports accessible to everyone.
//           </p>
//         </div>

//         <div className="about-card">
//           <h2>What We Do</h2>
//           <p>
//             We connect athletes, fitness enthusiasts, and adventure seekers
//             with verified sports events happening across India. Our platform
//             allows users to explore events, register securely, and stay updated
//             — all in one place.
//           </p>
//         </div>

//         <div className="about-card">
//           <h2>Why Active Pulse?</h2>
//           <ul>
//             <li>✔ Nationwide sports event listings</li>
//             <li>✔ Secure registration & payments</li>
//             <li>✔ Premium user experience</li>
//             <li>✔ Trusted organizers & events</li>
//           </ul>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="about-cta">
//         <h2>Be Part of the Movement</h2>
//         <p>
//           Discover your next challenge, push your limits, and stay active with
//           Active Pulse.
//         </p>
//       </section>
//     </div>
//   );
// };

// export default About;


import React from "react";
import "./About.css";

const About = () => {
  return (
    <div
      className="about-page"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(0, 0, 0, 0.75),
            rgba(0, 0, 0, 0.85)
          ),
          url(${process.env.PUBLIC_URL}/images/abt-bg.webp)
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <section className="about-hero">
        <h1>About Active Pulse</h1>
        <p>
          India’s premium platform to discover, register, and participate in
          sports events across the country.
        </p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <h2>Our Vision</h2>
          <p>
            Active Pulse was created with one clear vision — to bring all sports
            events in India onto a single, powerful platform. From marathons and
            walkathons to trekking, football, cricket, swimming, and more, we
            aim to make sports accessible to everyone.
          </p>
        </div>

        <div className="about-card">
          <h2>What We Do</h2>
          <p>
            We connect athletes, fitness enthusiasts, and adventure seekers
            with verified sports events happening across India. Our platform
            allows users to explore events, register securely, and stay updated
            — all in one place.
          </p>
        </div>

        <div className="about-card">
          <h2>Why Active Pulse?</h2>
          <ul>
            <li>✔ Nationwide sports event listings</li>
            <li>✔ Secure registration & payments</li>
            <li>✔ Premium user experience</li>
            <li>✔ Trusted organizers & events</li>
          </ul>
        </div>
      </section>

      <section className="about-cta">
        <h2>Be Part of the Movement</h2>
        <p>
          Discover your next challenge, push your limits, and stay active with
          Active Pulse.
        </p>
      </section>
    </div>
  );
};

export default About;

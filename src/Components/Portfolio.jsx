/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "PrasadHUB 🎉",
    description:
      "Developed a donation platform with user-friendly forms, multi-admin dashboard, Razorpay payments, and Nodemailer-powered automated receipts.",
    url: "https://prasad-hub-client.vercel.app/",
  },
  {
    title: "MediCulture",
    description:
      "Developed a healthcare management system with React UI, JWT authentication, role-based access, MongoDB, Razorpay payments, and Cloudinary-Multer for file management.",
    url: "https://prescripto-frontend-psi.vercel.app/",
  },
  {
    title: "Global EV Value Predictor",
    description:
      "Led frontend development of an ML-based EV valuation tool using Random Forest, achieving 85% accuracy on 10,000 vehicles with an intuitive user interface.",
    url: "https://global-ev-value-prediction.onrender.com/",
  },
  {
    title: "Melodify",
    description: "Cloned Spotify using Reactjs at frontend basis",
    url: "hhttps://melodify-gilt.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

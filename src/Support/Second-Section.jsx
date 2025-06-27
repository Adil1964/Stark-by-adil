import React, { useState } from "react";
import "./Second-Section.css";

const data = [
  {
    title: "Getting started",
    sections: [
      {
        heading: "Install Stark",
        text: "The different ways to install the full suite of Stark tools. For your design tool, and your browser.",
      },
      {
        heading: "Signing in to plugins with your Stark account",
        text: "How to use your account within your favorite design tool.",
      },
      {
        heading: "Using Contrast Checker + Color Suggestions",
        text: "Check your designs to ensure your colors meet accessibility standards",
      },
      {
        heading: "Using Typography Analysis",
        text: "Check your designs to see if your text is too small to be legible",
      },
      {
        heading: "Using Alt-Text Annotations",
        text: "Create and add beautifully crafted Alt-text descriptions in multiple languages to your images",
      },
      {
        heading: "Using Touch Targets",
        text: "Ensure that your touch targets are large enough to meet current guidelines",
      },
      {
        heading: "Using Focus Order",
        text: "Establish your product's focus order sequences and focus items",
      },
      {
        heading: "Using Landmarks",
        text: "Intentionally outline the structure of your website",
      },
      {
        heading: "Using the Vision Simulator + Generator",
        text: "View your entire design in a variety of vision types to properly test",
      },
    ],
  },
  {
    title: "Accounts",
    sections: [
      {
        heading: "Reset password",
        text: "Steps to reset your account password.",
      },
      { heading: "Change email", text: "How to update your account email." },
      {
        heading: "Delete account",
        text: "How to permanently delete your account.",
      },
      {
        heading: "2FA",
        text: "Enable two-factor authentication for extra security.",
      },
      {
        heading: "Account recovery",
        text: "What to do if you get locked out.",
      },
    ],
  },
  {
    title: "Subscriptions and billing",
    sections: [
      { heading: "Pricing plans", text: "Overview of all pricing plans." },
      { heading: "Upgrade plan", text: "How to upgrade your current plan." },
      {
        heading: "Billing history",
        text: "Where to find invoices and payment info.",
      },
      {
        heading: "Cancel subscription",
        text: "Steps to cancel your subscription.",
      },
      { heading: "Refund policy", text: "Learn about our refund process." },
    ],
  },
  {
    title: "Teams",
    sections: [
      { heading: "Team creation", text: "How to create and name a new team." },
      { heading: "Invite members", text: "How to add members to your team." },
      {
        heading: "Roles and permissions",
        text: "Assigning roles in your team.",
      },
      { heading: "Billing for teams", text: "How team billing works." },
      { heading: "Transfer ownership", text: "How to change team ownership." },
    ],
  },
  {
    title: "Privacy",
    sections: [
      { heading: "Data usage", text: "What data we collect and why." },
      { heading: "Third-party sharing", text: "Who we share your data with." },
      {
        heading: "Cookie policy",
        text: "How cookies are used on our platform.",
      },
      { heading: "User controls", text: "Tools you have to manage privacy." },
      {
        heading: "Account deletion",
        text: "What happens when you delete your account.",
      },
    ],
  },
  {
    title: "Contact Us",
    sections: [
      {
        heading: "Live chat",
        text: "Reach us instantly via live support chat.",
      },
      { heading: "Email support", text: "Send us a detailed query via email." },
      { heading: "Call support", text: "Call us at our support hotline." },
      { heading: "Social media", text: "DM us on Instagram or Twitter." },
      { heading: "Help center", text: "Use the help center to search FAQs." },
    ],
  },
];

const SecondSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="support-wrapper ">
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-4 mb-4 mb-md-0">
            <ul className="list-unstyled support-nav">
              {data.map((item, index) => (
                <li key={index}>
                  <button
                    className={`support-link btn btn-link ${
                      index === activeIndex ? "active" : ""
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Content */}
          <div className="col-md-6">
            {data[activeIndex].sections.map((section, idx) => (
              <div className="support-box mb-3 p-4 rounded" key={idx}>
                <h5 className="heading">{section.heading}</h5>
                <p className="mb-0">{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;

import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const workItems = [
  {
    title: "Supportwise",
    category: "Application Product",
    tools: "Javascript, TypeScript, React, CSS, FAQ Matching",
    description:
      "A smart customer support application powered by FAQ matching algorithms that automatically routes and resolves user queries with precision.",
  },
  {
    title: "Ledgerium",
    category: "Application Product",
    tools: "Javascript, TypeScript, React, CSS, Finance",
    description:
      "A finance-focused platform providing real-time ledger management, transaction tracking, and insightful reporting dashboards.",
  },
  {
    title: "Text Summarisation using BiLSTM and Attention",
    category: "Application Product",
    tools: "Python, NLP, Data Visualization",
    description:
      "An advanced text summarization model leveraging BiLSTM and attention mechanisms to generate concise summaries from large documents with high accuracy.",
  },
  {
    title: "Reflectra",
    category: "Application Product",
    tools: "Python, Typescript, React, CSS, NLP, HTML, DBMS",
    description:
      "Reflectra is an AI-powered conversational system that helps users understand themselves better through interactive dialogue. It analyzes a user’s communication style and behavior to build a dynamic personality profile, enabling features like reflection and communication mirroring for deeper self-awareness.",
  },
];

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {workItems.map((item, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{String(index + 1).padStart(2, "0")}</h3>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{item.tools}</p>
              </div>
              <div className="work-description">
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

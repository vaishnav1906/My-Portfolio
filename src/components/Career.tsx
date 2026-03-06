import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior College</h4>
                <h5>Thakur Vidya Mandir</h5>
              </div>
              <h3>2020-2022</h3>
            </div>
            <p>
              Completed Higher Secondary education while developing strong analytical, problem-solving, and communication skills. 
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Integrated UG + PG Program</h4>
                <h5>MBA Tech in Artificial Intelligence</h5>
              </div>
              <h3>2022-2027</h3>
            </div>
            <p>
              Pursuing an integrated MBA Tech in Artificial Intelligence, where I am gaining a strong foundation in both business and technology. 
              This program is equipping me with the skills and knowledge to excel in the dynamic fields of AI and business management, preparing me for a successful career at the intersection of these domains.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI DS Intern</h4>
                <h5>Syndrome New Edge Pvt Ltd.</h5>
              </div>
              <h3>May 2025 - July 2025</h3>
            </div>
            <p>
              Gained hands-on experience in artificial intelligence and data science while contributing to real-world projects and developing my technical skills.
            </p>
          </div>
          <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Marketing Intern</h4>
                <h5>Indian Dental and Derma Assurance</h5>
              </div>
              <h3>May 2026 - Sep 2026</h3>
            </div>
            <p>
              Gaining practical experience in marketing by contributing to campaigns, conducting market research, and developing strategies to promote the company's products and services.
              Also working as an On sales executive at the company, where I am responsible for engaging with doctors, understanding their needs, and providing solutions to drive sales and enhance satisfaction.
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

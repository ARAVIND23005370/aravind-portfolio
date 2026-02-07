<template>
  <div class="app-container">
    <nav class="navbar">
      <div class="nav-logo">Aravind R</div>
      <div class="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#certificates">Certificates</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>

    <div class="sprinkles">
      <div
        v-for="n in 50"
        :key="n"
        class="sprinkle"
        :style="{
          left: Math.random() * 100 + 'vw',
          animationDelay: Math.random() * 5 + 's',
          backgroundColor: randomColor(),
          width: Math.random() * 8 + 4 + 'px',
          height: Math.random() * 8 + 4 + 'px',
          borderRadius: Math.random() > 0.5 ? '50%' : '0%'
        }"
      ></div>
    </div>

    <section id="home" class="section home-section">
      <div class="home-content">
        <h1>Welcome to My Portfolio</h1>
        <p>
          I am Aravind R, a pre-final year B.Tech student in Artificial Intelligence & Data Science with a strong focus on
          Java backend development. I build scalable, rule-driven systems using Spring Boot, REST APIs, and SQL,
          with an emphasis on automation, clean architecture, and audit-ready design.
        </p>

        <div class="skills-list vertical">
          <a href="/resume/Aravind_Resume.pdf" download class="skill">
            📄 Resume
          </a>
        </div>
      </div>

      <div class="home-image">
        <img :src="myImage" alt="Aravind R" class="profile-image" />
      </div>
    </section>

    <section id="about" class="section about-section">
      <h2>About Me</h2>

      <p>
        I am a pre-final year Artificial Intelligence & Data Science student at Saveetha Engineering College,
        Chennai, with a strong inclination toward backend engineering and system design.
      </p>

      <p>
        My primary expertise lies in Java backend development using Spring Boot, REST APIs, JPA, and SQL databases.
        I have hands-on experience designing rule-based decision systems, document processing pipelines,
        and modular backend architectures focused on scalability and maintainability.
      </p>

      <p>
        I possess solid fundamentals in Object-Oriented Programming, Data Structures, DBMS, and Operating Systems.
        I enjoy building clarity-first solutions, solving backend problems, and working on industry-aligned projects
        involving automation, decision logic, and server-side programming.
      </p>
    </section>

    <section id="skills" class="section skills-section">
      <h2>Skills</h2>

      <div class="skills-group">
        <h3>Technical Skills</h3>
        <div class="skills-list vertical">
          <div class="skill">☕ Java</div>
          <div class="skill">🐍 Python</div>
          <div class="skill">💻 C Programming</div>
          <div class="skill">🌱 Spring Boot</div>
          <div class="skill">🔗 REST APIs</div>
          <div class="skill">🗄 MySQL</div>
          <div class="skill">🗄 Oracle SQL</div>
          <div class="skill">🗄 H2 Database</div>
          <div class="skill">📦 JPA / Hibernate</div>
          <div class="skill">🧠 OOP Concepts</div>
          <div class="skill">🧩 DSA (Basics)</div>
          <div class="skill">🛠 Git & GitHub</div>
          <div class="skill">📮 Postman</div>
          <div class="skill">⚡ ES6</div>
          <div class="skill">⚛️ React (Familiar)</div>
        </div>
      </div>

      <div class="skills-group">
        <h3>Non-Technical Skills</h3>
        <div class="skills-list vertical">
          <div class="skill">🛠 SDLC Management</div>
          <div class="skill">🗣 Communication Skills</div>
          <div class="skill">🎤 Public Speaking</div>
          <div class="skill">🧩 Problem Solving</div>
          <div class="skill">🧠 Logical Thinking</div>
        </div>
      </div>

      <div class="skills-group">
        <h3>Languages Known</h3>
        <div class="skills-list vertical">
          <div class="skill">English</div>
          <div class="skill">Tamil</div>
        </div>
      </div>
    </section>

    <section id="projects" class="section projects-section">
      <h2>Projects</h2>

      <div class="projects-list vertical">
        <div class="project-card">
          <h3>Autonomous Policy-Driven Decision Intelligence Platform</h3>
          <p>
            Designed and developed an advanced decision intelligence platform focused on policy-driven reasoning
            instead of basic workflow automation.
          </p>
          <p>
            Implemented explainable decision outcomes with confidence scoring and full decision traceability.
            Designed rule-evaluation workflows supporting what-if analysis and future policy evolution.
          </p>
          <p><strong>Tech:</strong> Java, System Design, Decision Logic, UML</p>
        </div>

        <div class="project-card">
          <h3>End-to-End Document Intelligence & Decision Automation System</h3>
          <p>
            Backend-driven system for automating document ingestion, OCR-based data extraction,
            and rule-based decision making.
          </p>
          <p>
            Built modular services for document management, OCR handling, rule evaluation,
            and automated decision routing with a domain-agnostic architecture.
          </p>
          <p><strong>Tech:</strong> Spring Boot, Java, REST APIs, MySQL</p>
        </div>

        <div class="project-card">
          <h3>AI Resume Analyzer Web Application</h3>
          <p>
            AI-powered resume parsing and job-matching system using NLP techniques to evaluate
            candidate–job compatibility.
          </p>
          <p>
            Improved resume relevance through automated keyword and structure analysis
            with a tag-based UI.
          </p>
          <p><strong>Tech:</strong> Python, NLP, Streamlit, HTML, CSS, JavaScript</p>
        </div>

        <div class="project-card">
          <h3>Gen AI Exchange Hackathon – Google Cloud & Hack2Skill</h3>
          <p>
            Participated in a national-level hackathon focused on Generative AI-based solution design
            for real-world problem statements.
          </p>
          <p>
            Gained experience in rapid prototyping, AI ideation, and collaborative development.
          </p>
          <p><strong>Tech:</strong> Generative AI, Problem Solving</p>
        </div>
      </div>
    </section>

    <section id="certificates" class="section certificates-section">
      <h2>Certificates</h2>
      <div class="certificates-list vertical">
        <a href="/certificates/Oracle_SQL.pdf" download class="certificate-card">
          🏆 <strong>Oracle Database SQL Certified Specialist</strong> - November 21, 2025
        </a>

        <a href="/certificates/MS_AI_Learning.pdf" download class="certificate-card">
          🏆 <strong>AINNOVATION 2025: Microsoft AI Learning Challenge</strong> - August 31, 2025
        </a>

        <a href="/certificates/Applied_AI_Learning.pdf" download class="certificate-card">
          🏆 <strong>AINNOVATION 2025: Applied AI Learning Challenge</strong> - September 1, 2025
        </a>

        <a href="/certificates/MS_Azure_Learning.pdf" download class="certificate-card">
          🏆 <strong>AINNOVATION 2025: Microsoft Azure Learning Challenge</strong> - August 31, 2025
        </a>

        <a href="/certificates/PyTorch_Ultimate.pdf" download class="certificate-card">
          🏆 <strong>PyTorch Ultimate 2024 Specialization</strong> - May 12, 2025
        </a>

        <a href="/certificates/Java_Beginners_IBM.pdf" download class="certificate-card">
          🏆 <strong>Java Programming for Beginners (IBM Coursera)</strong> - Aug 15, 2025
        </a>

        <a href="/certificates/Software_Engineering_IBM.pdf" download class="certificate-card">
          🏆 <strong>Introduction to Software Engineering (IBM Coursera)</strong> - Aug 14, 2025
        </a>

        <a href="/certificates/JPMorgan_Forage.pdf" download class="certificate-card">
          🏆 <strong>JPMorgan Chase – Software Engineering Job Simulation (Forage)</strong>
        </a>
      </div>
    </section>

    <section id="contact" class="section contact-section">
      <h2>Contact</h2>
      <p>Email: aravindgd45@gmail.com</p>
      <p>Phone: +91-9342423726</p>
      <p>Location: Chennai, India</p>

      <div class="social-links">
        <a href="https://github.com/ARAVIND23005370" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/aravind-r-16b1b4313/" target="_blank">LinkedIn</a>
        <a href="https://www.instagram.com/aravind_ramesh4/" target="_blank">Instagram</a>
        <a href="https://leetcode.com/u/Aravind_R4/" target="_blank">LeetCode</a>
      </div>
    </section>

    <footer class="footer">
      &copy; 2025 Aravind R. All Rights Reserved.
    </footer>
  </div>
</template>

<script setup>
import myImage from '@/assets/images/my-image.jpg'

const colors = ['#00f0ff','#0d6efd','#ff00ff','#ffdd00','#00ff00','#ff007f']
function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}
</script>

<style scoped>
/* styles unchanged */
</style>

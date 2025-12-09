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
          I am Aravind R, an aspiring AI & Data Science student passionate
          about building interactive web apps. Focused on Software Development, Data Analytics, and AI solutions.
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
        A focused and goal-oriented engineering professional targeting entry-level assignments
        in Software Development and Testing. Proficient in Python, Java, SQL, HTML, CSS, JavaScript,
        Power BI, and Hadoop.
      </p>
      <p>
        Strong understanding of the Software Development Lifecycle (SDLC) from Requirement Analysis,
        Documentation, Coding, Testing, and Maintenance. Skilled in problem-solving, analytical thinking,
        and delivering practical solutions.
      </p>
      <p>
        Strong communication, coordination, and networking capabilities. Passionate about
        learning, experimenting, and delivering real-world projects.
      </p>
    </section>

    <section id="skills" class="section skills-section">
      <h2>Skills</h2>

      <div class="skills-group">
        <h3>Technical Skills</h3>
        <div class="skills-list vertical">
          <div class="skill">💻 C Programming</div>
          <div class="skill">🐍 Python</div>
          <div class="skill">☕ Java</div>
          <div class="skill">🌐 HTML/CSS</div>
          <div class="skill">📜 JavaScript</div>
          <div class="skill">🗄 SQL</div>
          <div class="skill">📊 Power BI</div>
          <div class="skill">🐘 Hadoop</div>
          <div class="skill">🗂 DSA</div>
          <div class="skill">🐳 Docker</div>
          <div class="skill">⚛️ React</div>
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
          <h3>Sales Dashboard using Power BI</h3>
          <p>
            Built an interactive sales dashboard visualizing total sales, regional performance, and product-wise revenue.
          </p>
          <p><strong>Skills:</strong> Power BI, DAX, Excel, Data Visualization</p>
        </div>
        <div class="project-card">
          <h3>AI Resume Analyzer Web App (Streamlit)</h3>
          <p>
            Streamlit web application extracting resume details (skills, education, experience) and matching with job descriptions.
          </p>
          <p><strong>Skills:</strong> Python, Streamlit, Resume Parsing, Keyword Matching</p>
        </div>
        <div class="project-card">
          <h3>Offline Voice-Controlled Bionic Dog (WAVEGO)</h3>
          <p>
            Built a voice-controlled robotic dog using ESP32 and Vosk for offline speech recognition.
          </p>
          <p><strong>Skills:</strong> Python, Vosk, ESP32, Servo Motor Control</p>
        </div>
        <div class="project-card">
          <h3>Frontend Interface for Voice-Controlled Robots</h3>
          <p>
            Developed stylish frontend using HTML/CSS and Flask for interacting with bionic dogs, with mic button and live transcription.
          </p>
          <p><strong>Skills:</strong> Flask, HTML/CSS, JavaScript, Frontend Development</p>
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

const colors = ['#00f0ff','#0d6efd','#ff00ff','#ffdd00','#00ff00','#ff007f'];
function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
</script>

<style scoped>
/* App Container */
.app-container {
  background-color: #0a0a0a;
  color: #fff;
  font-family: 'Inter', sans-serif;
  scroll-behavior: smooth;
  position: relative;
  overflow-x: hidden;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #111;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}
.nav-logo { font-weight: bold; font-size: 1.8rem; color: #0d6efd; }
.nav-links a { margin-left: 1.5rem; font-weight: 500; color: #ccc; transition: all 0.3s; }
.nav-links a:hover { color: #00f0ff; text-decoration: none; text-shadow: 0 0 8px #00f0ff, 0 0 16px #00f0ff; }

/* Sprinkles */
.sprinkles { position: fixed; top:0; left:0; width:100%; height:100%; pointer-events:none; overflow:hidden; z-index:0; }
.sprinkle { position:absolute; opacity:0.8; animation: fall 4s linear infinite; }
@keyframes fall { 0% { transform: translateY(-10px) rotate(0deg); opacity:1; } 100% { transform: translateY(100vh) rotate(360deg); opacity:0; } }

/* Sections */
.section { padding:6rem 2rem; position:relative; z-index:1; }

/* Hero */
.home-section { display:flex; align-items:center; justify-content:space-between; gap:2rem; flex-wrap:wrap; }
.home-content h1 { font-size:3rem; margin-bottom:1rem; color:#0d6efd; }
.home-content p { font-size:1.2rem; color:#ccc; }
.profile-image { width:300px; height:300px; border-radius:50%; object-fit:cover; border:4px solid #00f0ff; box-shadow:0 0 20px #00f0ff,0 0 40px #00f0ff inset; transition:transform 0.5s, box-shadow 0.5s; }
.profile-image:hover { transform:scale(1.1) rotate(5deg); box-shadow:0 0 30px #00f0ff,0 0 60px #00f0ff inset; }

/* Skills & Projects vertical */
.skills-list.vertical,
.projects-list.vertical,
.certificates-list.vertical { display:flex; flex-direction:column; gap:1rem; }
.skill, .project-card, .certificate-card { display:flex; align-items:center; gap:0.5rem; background-color:#111; color:#0d6efd; padding:0.7rem 1.2rem; border-radius:15px; font-weight:bold; transition:all 0.3s; box-shadow:0 0 5px #0d6efd; cursor:pointer; }
.skill:hover, .project-card:hover, .certificate-card:hover { color:#00f0ff; box-shadow:0 0 15px #00f0ff,0 0 30px #00f0ff inset; transform:scale(1.02); }
.project-card, .certificate-card { flex:none; text-align:left; color:#ccc; background-color:#111; }

/* Contact */
.contact-section p { color:#ccc; margin-bottom:0.5rem; }
.social-links a { margin-right:1rem; color:#0d6efd; text-decoration:none; }
.social-links a:hover { color:#00f0ff; }

/* Footer */
.footer { text-align:center; padding:2rem; background-color:#111; color:#ccc; }

/* Responsive */
@media(max-width:1024px){
  .home-section{flex-direction:column;text-align:center;}
  .profile-image{width:200px;height:200px;}
  .nav-links{flex-wrap:wrap;justify-content:center;margin-top:0.5rem;}
}
</style>
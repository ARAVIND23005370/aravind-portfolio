<template>
  <div class="page-container">
    <h1>Projects</h1>
    <div class="projects-grid">
      <div class="project-card">
        <h2>AI Resume Analyzer</h2>
        <p>Web app to parse resumes, match job descriptions, and suggest keywords.</p>
      </div>
      <div class="project-card">
        <h2>Voice-Controlled Bionic Dog</h2>
        <p>Offline voice recognition robot project using Python and ESP32.</p>
      </div>
      <div class="project-card">
        <h2>Sales Dashboard</h2>
        <p>Dashboard built with Power BI to visualize sales data and KPIs.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding: 2rem;
}
h1 {
  color: #0d6efd;
  margin-bottom: 1rem;
}
.projects-grid {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.project-card {
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  flex: 1 1 250px;
  transition: transform 0.3s, box-shadow 0.3s;
}
.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}
.project-card h2 {
  color: #0d6efd;
  margin-bottom: 0.5rem;
}
.project-card p {
  color: #555;
}
</style>

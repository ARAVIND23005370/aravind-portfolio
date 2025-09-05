<template>
  <div class="page-container">
    <h1>Skills</h1>
    <div class="skills-grid">
      <span class="skill">JavaScript</span>
      <span class="skill">TypeScript</span>
      <span class="skill">Vue.js / Nuxt.js</span>
      <span class="skill">HTML & CSS</span>
      <span class="skill">Python</span>
      <span class="skill">Data Science</span>
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
.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.skill {
  background-color: #0d6efd;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: bold;
  transition: transform 0.3s;
}
.skill:hover {
  transform: scale(1.1);
}
</style>

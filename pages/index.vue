<template>
  <div class="home-page">
    <section class="intro">
      <h1>Welcome to My Portfolio</h1>
      <p>This is the home page. Explore my work and skills.</p>
    </section>

    <section class="highlights">
      <div class="card">
        <h2>Projects</h2>
        <p>Check out my projects section for details.</p>
        <NuxtLink to="/projects">View Projects</NuxtLink>
      </div>

      <div class="card">
        <h2>Skills</h2>
        <p>See what I am good at in the skills section.</p>
        <NuxtLink to="/skills">View Skills</NuxtLink>
      </div>

      <div class="card">
        <h2>Contact</h2>
        <p>Get in touch with me anytime.</p>
        <NuxtLink to="/contact">Contact Me</NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  padding: 2rem;
  background-color: #f9f9f9;
  min-height: 80vh;
}
.intro h1 {
  color: #0d6efd;
  font-size: 3rem;
  margin-bottom: 1rem;
}
.intro p {
  color: #555;
  font-size: 1.2rem;
}
.highlights {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}
.card {
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  flex: 1 1 250px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}
.card h2 {
  color: #0d6efd;
  margin-bottom: 0.5rem;
}
.card p {
  color: #555;
  margin-bottom: 1rem;
}
.card a {
  text-decoration: none;
  color: #0d6efd;
  font-weight: bold;
}
</style>

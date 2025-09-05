<template>
  <div class="page-container">
    <h1>Contact Me</h1>
    <form class="contact-form">
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <textarea placeholder="Your Message"></textarea>
      <button type="submit">Send</button>
    </form>
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
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
}
input, textarea {
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
  width: 100%;
}
button {
  padding: 0.7rem;
  background-color: #0d6efd;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}
button:hover {
  background-color: #094dbf;
}
</style>

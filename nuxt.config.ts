export default defineNuxtConfig({
  devtools: { enabled: true },
 css: ['~/css/main.css'], // lowercase path
  routeRules: {
    '/': { prerender: true },
    '/about': { prerender: true },
    '/skills': { prerender: true },
    '/projects': { prerender: true },
    '/contact': { prerender: true },
  },
  app: {
    head: {
      title: "Aravind's Portfolio",
      meta: [
        { name: 'description', content: "Aravind's Portfolio Website" },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Poppins:wght@600&display=swap'
        }
      ]
    }
  }
});

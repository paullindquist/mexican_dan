// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [{ src: "~/plugins/jquery.js", mode: "client" }],
  modules: ["nuxt-viewport", "@nuxt/image", "@nuxtjs/google-fonts", "nuxt-icon"],
  googleFonts: {
    families: {
      Rubik: [400, 500, 600, 700],
    },
  },
});

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-banshorian`,
      options: {
        basePath: ``,
        path: `src/`,
        imagesPath: `src/images/`,
        iconFile: `src/images/icon.png`,
        siteTitle: `Front-End developer Cihan Uygur`,
        siteUrl: `https://cihanuygur.netlify.app/`,
        siteName: `Cihan Uygur developer portfolio | @kriptoleo`,
        siteShortName: `Cihan Uygur CV`,
        siteDescription: `My personal website`,
        siteKeywords: `Developer, Front-end`,
        useMozJpeg: true,
        menuLinks: [
          // title = Link text
          // color = Animation background color on click
          { name: `home`, title: `Home`, color: `#000`, link: `` },
          {
            name: `experience`,
            title: `Experience`,
            color: `#3a3d98`,
            link: ``,
          },
          { name: `skills`, title: `Skills`, color: `#d52d43`, link: `` },
          { name: `aboutMe`, title: `About Me`, color: `#fff`, link: `` },
        ],
        email: `cuygur@outlook.com`,
        social: {
          // Usernames
          twitter: `kriptoleo`,
          gitHub: `cuygur`,
          stackOverflow: `/`,
          linkedIn: `in/cihanuygur`,
          resumeInPdf: `/CV-20.pdf`, // url or local link
        },
        homePage: {
          availableToHire: true,
          dotColors: ["#0e3e1e", "#6CC551"],
          h1Text: `I can help you!`,
          h2Text: `I'm Cihan Uygur, Front-End developer based in Istanbul`,
          typewriter: [
            `Creative, coder, out-of-box thinker 😎`,
            `I'm an ex-ship captain`,
            `I always interested in learning new skills 🤓`,
            `I think one of my values is the <strong>ability to find solutions<strong>`,
            `In my non-coding hours, I like to run and cook`,
            `I also do design and UX work <span style='color: #27ae60;'>using Figma.com</span>`,
          ],
        },
        // Color for menu background
        shapeColor: {
          link: { color: "#434343", hover: "#ffff" },
          shape1: {
            color: `#13547A`,
            opacity: `0.8`,
          },
          shape2: {
            color: `#80D0C7`,
            opacity: `0.3`,
          },
          shape3: {
            color: `#fff`,
            opacity: `0.7`,
          },
        },
        footer: `heart`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `*`, // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
          send_page_view: true,
          cookie_name: `gatsby-starter-banshorian.vercel.app`,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
        },
      },
    },
  ],
}

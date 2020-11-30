module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-banshorian`,
      options: {
        basePath: ``,
        path: `src/`,
        imagesPath: `src/images/`,
        iconFile: `src/images/cu-2.png`,
        siteTitle: `Developer Cihan Uygur`,
        siteUrl: `https://cihanuygur.netlify.app/`,
        siteName: `Cihan Uygur`,
        siteShortName: `CU`,
        siteDescription: `My personal website about my work experience as developer`,
        siteKeywords: `Developer, Front-end, React, Cihan Uygur`,
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
        email: `cuygurdev@gmail.com`,
        social: {
          // Usernames
          twitter: `kriptoleo`,
          gitHub: `cuygur`,
          stackOverflow: `/`,
          linkedIn: `in/cihanuygur`,
          resumeInPdf: `/Cihan-Uygur-Resume.pdf`, // url or local link
        },
        homePage: {
          availableToHire: true,
          dotColors: ["#0e3e1e", "#6CC551"],
          h1Text: `Hey there, I will help you! I'm Cihan Uygur`,
          h2Text: `I'm a creative Front-End developer. We can create beautiful and engaging web apps together!`,
          typewriter: [
            `Creative coder, out-of-box thinker 😎`,
            `I build projects with React and JavaScript`,
            `Always interested in learning new skills`,
            `One of my values is the <strong>ability to find solutions<strong>`,
            `I also do design using Figma`,
            `I'm an ex-ship captain ⚓`,
          ],
        },
        // Color for menu background
        shapeColor: {
          link: { color: "#2557A5", hover: "#A6941C" },
          shape1: {
            color: `#13547a`,
            opacity: `0.8`,
          },
          shape2: {
            color: `#80d0c7`,
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
          cookie_name: `cihanuygur.com`,
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

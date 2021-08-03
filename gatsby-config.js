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
            color: `#2456A6`,
            link: ``,
          },
          { name: `skills`, title: `Skills`, color: `#d52d43`, link: `` },
          { name: `aboutMe`, title: `About Me`, color: `#fff`, link: `` },
        ],
        email: ``,
        social: {
          // Usernames
          twitter: `kriptoleo`,
          gitHub: `cuygur`,
          stackOverflow: `14736546/cihan-uygur`,
          linkedIn: `in/cihanuygur`,
          resumeInPdf: `/Cihan-Uygur`, // url or local link .pdf
        },
        homePage: {
          availableToHire: false,
          dotColors: ["#A8A62C", "#FFFF00"],
          h1Text: `Hey there, I can help you on the development! I'm Cihan Uygur`,
          h2Text: `Creative Front-End developer based in Istanbul. We can create beautiful and engaging web apps together!`,
          typewriter: [
            `Creative coder, out-of-box thinker 😎`,
            `I build projects with React and JavaScript`,
            `Always interested in learning new skills`,
            `One of my values is the <strong>ability to find solutions<strong>`,
            `I also do design in Figma`,
            `I'm an ex-ship captain ⚓`,
          ],
        },
        // Color for menu background
        shapeColor: {
          link: { color: "#A6941C", hover: "#2557A5" },
          shape1: {
            color: `#A6602D`,
            opacity: `0.7`,
          },
          shape2: {
            color: `#F2D71D`,
            opacity: `0.7`,
          },
          shape3: {
            color: `#2456A6`,
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
          `UA-150445798-1`, // Google Analytics / GA
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

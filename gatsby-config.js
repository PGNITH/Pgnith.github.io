module.exports = {
  siteMetadata: {
    siteUrl: "https://Premashish.github.io",
    title: "Portfolio",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
`gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images// Needed for dynamic images
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/PGLOGOPURPLE1.svg",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:100i,200,300`,
          `Orbitron\:300,400,500`,
          `Poppins\:100`,
          `Josefin Sans\:100`,
          `Righteous\:400`,
          `Montserrat`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  ],
};

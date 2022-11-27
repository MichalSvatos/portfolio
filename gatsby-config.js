const siteMetadata = {
	name: "Michal Svatos",
	titleDesc: "Self-taught frontend developer/designer, privacy advocate and aspiring digital minimalist",
	description: "Self-taught frontend developer with more than 10 years of experience. Strong flair for design and UX, privacy and digital minimalism enthusiast.",
	email: "write@svatos.dev",
	github: "https://github.com/MichalSvatos",
	linkedIn: "https://www.linkedin.com/in/michalsvatos"
}

module.exports = {
	plugins: [
		`gatsby-plugin-sass`,
		`gatsby-transformer-remark`,
		{
			resolve: `gatsby-plugin-sharp`,
			options: {
				defaults: {
					// formats: [`auto`, `webp`],
					placeholder: `dominantColor`,
					quality: 75,
					// breakpoints: [750, 1080, 1366, 1920],
					// backgroundColor: `transparent`,
					// tracedSVGOptions: {},
					// blurredOptions: {},
					// jpgOptions: {},
					// pngOptions: {},
					// webpOptions: {},
					// avifOptions: {},
				},
			},
		},
		`gatsby-plugin-image`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `projects`,
				path: `${__dirname}/src/projects/`,
			},
		},
		{
			resolve: `gatsby-plugin-react-svg`,
			options: {
				rule: {
					include: /\.inline\.svg$/
				}
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Svatos.dev | Michal Svatos frontend developer, designer`,
				short_name: `Svatos.dev`,
				start_url: `/`,
				background_color: `#000000`,
				theme_color: `#000000`,
				display: `standalone`,
				icon: `src/images/favicon/favicon.png`,
			},
		},
	],
	siteMetadata: {
		name: siteMetadata.name,
		title: siteMetadata.name + " | " + siteMetadata.titleDesc,
		description: siteMetadata.description,
		contact: {
			email: siteMetadata.email,
			github: siteMetadata.github,
			linkedIn: siteMetadata.linkedIn
		}
	},
}

const siteMetadata = {
	name: "Michal Svatos",
	titleDesc: "Frontend developer, designer, privacy advocate and enthusiast, aspiring digital minimalist",
	description: "Self-taught front-end developer with more than 10 years of experience and strong flair for design and UX. Passion for privacy included.",
	email: "write@svatos.dev",
	github: "https://github.com/MichalSvatos",
	linkedIn: "https://www.linkedin.com/in/michalsvatos"
}

module.exports = {
	plugins: [
		`gatsby-plugin-sass`,
		`gatsby-transformer-remark`,
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `projects`,
				path: `${__dirname}/src/projects/`,
			},
		},
	],
	siteMetadata: {
		title: siteMetadata.name + " | " + siteMetadata.titleDesc,
		description: siteMetadata.description,
		contact: {
			email: siteMetadata.email,
			github: siteMetadata.github,
			linkedIn: siteMetadata.linkedIn
		}
	},
}

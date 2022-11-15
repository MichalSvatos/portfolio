const siteMetadata = {
	name: "Michal Svatos",
	titleDesc: "Self-taught frontend developer/designer, privacy advocate and aspiring digital minimalist",
	description: "Self-taught frontend developer with 10+ years of experience and strong flair for design and UX. Passioned about privacy and digital minimalism.",
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
		{
			resolve: `gatsby-plugin-react-svg`,
			options: {
				rule: {
					include: /\.inline\.svg$/
				}
			}
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

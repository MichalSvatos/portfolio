import React, {useEffect} from "react"
import {graphql} from "gatsby"
import Layout from "../components/Layout/Layout"
import Time from "../components/Time/Time"
import Projects from "../components/Projects/Projects"
import Modal from "../components/Modal/Modal"
import Intro from "../components/Intro/Intro"
import DeLorean from "../components/DeLorean/DeLorean"
import TimeCircuits from "../components/TimeCircuits/TimeCircuits"
// import Software from "../components/Software/Software"
import OldPaper from "../components/Projects/Item/images/item-history--clippath.inline.svg"

export default function Homepage({data}) {
	const projectSorter = (timeperiod) => {

		const nodes = data.allMarkdownRemark.nodes
		const nodesFiltered = []

		// TODO: try .filter()
		// let bigCities = cities.filter(city => city.population > 3000000);
		nodes.forEach(node => {
			const nodeTimePeriod = node.frontmatter.timeperiod

			if (nodeTimePeriod === timeperiod) {
				nodesFiltered.push(node)
			}
		})

		return nodesFiltered
	}

	// TODO: [NTH] - Relocate to gatsby-config.js
	const timePeriods = {
		"present" : "present",
		"past" : "past",
		"history" : "history"
	}

	const {present, past, history} = timePeriods

	useEffect(() => {
		document.body.classList.remove("no-js")
	})


	// TEMP!
	// const copywritingData = data.allMarkdownRemark.nodes

	return (
		<Layout>
			<React.StrictMode>
			<div className="inline-svgs hide-me">
				<OldPaper/>
			</div>
			<DeLorean timePeriods={timePeriods} />
			<TimeCircuits />

			<Time timePeriod={present}>
				<Intro />
				<Projects projectsData={projectSorter("present")} />
			</Time>

			<Time timePeriod={past} customClass="js-time-travel-checking">
				<Projects projectsData={projectSorter("past")} />
			</Time>

			<Time timePeriod={history}>
				<Projects projectsData={projectSorter("history")} />
				{/*TODO: Software section */}
				{/*<Software />*/}
			</Time>

			<Modal />

			{/*<div className="copywriting-helper">
				{
					copywritingData.map(item => {
						return <>
							<div>
								<h4>{item.frontmatter.title} - ({item.frontmatter.year})</h4>
								<div dangerouslySetInnerHTML={{__html: item.html}} />
							</div>
						</>
					})
				}
			</div>*/}
			</React.StrictMode>
		</Layout>
	)
}

// Additional HTML head content (Gatsby Head API)
export function Head({data}) {
	const {title, description, name} = data.site.siteMetadata
	const {github} = data.site.siteMetadata.contact

	return (
		<>
			<title>{title}</title>
			<meta name="author" content={`${name} | ${github}`} />
			<meta name="description" content={description} />
			{/* TODO: [NTH] - meta og */}
		</>
	)
}

export const query = graphql`
query AllProjects {
  allMarkdownRemark(sort: {fields: frontmatter___year, order: DESC}) {
    nodes {
      frontmatter {
        title
        tags
        slug
        timeperiod
        year
        url {
          link
          title
        }
        featured {
          childrenImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        collectionThumbs {
          publicURL
        }
        collection {
          publicURL
        }
        statusText
        status
        owner
      }
      id
      html
    }
  }
  site {
    siteMetadata {
      name
      description
      title
      contact {
        github
        email
        linkedIn
      }
    }
  }
}
`

import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/Layout/Layout"
import Time from "../components/Time/Time"
import Projects from "../components/Projects/Projects"
import Modal from "../components/Modal/Modal"
import Intro from "../components/Intro/Intro"
import DeLorean from "../components/DeLorean/DeLorean";

export default function Homepage({data}) {
	// const {title, description} = data.site.siteMetadata;
	// console.log(data);

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

	return (
		<Layout>
			<DeLorean />

			<Time timePeriod="present">
				<Intro />
				<Projects projectsData={projectSorter("present")} />
			</Time>

			<Time timePeriod="past">
				<Projects projectsData={projectSorter("past")} />
			</Time>

			<Time timePeriod="history">
				<Projects projectsData={projectSorter("history")} />
			</Time>

			<Modal />
		</Layout>
	)
}

export const query = graphql`
query AllProjects {
  allMarkdownRemark {
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
      }
      id
      html
    }
  }
}
`

import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/Layout/Layout"
import Time from "../components/Time/Time"
import Projects from "../components/Projects/Projects"
import Modal from "../components/Modal/Modal"
import Intro from "../components/Intro/Intro"
import DeLorean from "../components/DeLorean/DeLorean"
import TimeCircuits from "../components/TimeCircuits/TimeCircuits"

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

	// TODO: [NTH] - Relocate to gatsby-config.js
	const timePeriods = {
		"present" : "present",
		"past" : "past",
		"history" : "history"
	}

	const {present, past, history} = timePeriods

	return (
		<Layout>
			<DeLorean timePeriods={timePeriods} />
			<TimeCircuits />

			<Time timePeriod={present}>
				<Intro />
				{/*<h1>This is heavy, doc</h1>
				<p>Get your meat hooks off of me. Marty you gotta come back with me. But, what are you blind McFly, it's there. How else do you explain that wreck out there? Mom, is that you? Doc, she's beautiful. She's crazy about me. Look at this, look what she wrote me, Doc. That says it all. Doc, you're my only hope.</p>
				<h2>You wanna a Pepsi, pall, you're gonna pay for it.</h2>
				<p>Oh. I'll call you tonight. George McFly? Oh, he's kinda cute and all, but, well, I think a man should be strong, so he could stand up for himself, and protect the woman he loves. Don't you? I think it's terrible. Girls chasing boys. When I was your age I never chased a boy, or called a boy, or sat in a parked car with a boy. Next, please.</p>
				<h3>Whoa, whoa, Biff, what's that?</h3>
				<p>That's right, he's gonna be mayor. You okay, is everything alright? Look at the time, you've got less than 4 minutes, please hurry. Hey, hey, Doc, where are you? Quiet down, I'm sure the car is fine.</p>
				<h4>Oh, you make it sound so easy.</h4>
				<p>It's cold, damn cold. Ha, ha, ha, Einstein, you little devil. Einstein's clock is exactly one minute behind mine, it's still ticking. Well just gimme something without any sugar in it, okay? No no no, Doc, I just got here, okay, Jennifer's here, we're gonna take the new truck for a spin. Damn. I'm late for school. Hey man, the dance is over. Unless you know someone else who could play the guitar.</p>*/}
				<Projects projectsData={projectSorter("present")} />
			</Time>

			<Time timePeriod={past} customClass="js-time-travel-checking">
				{/*<h1>This is heavy, doc</h1>
				<p>Get your meat hooks off of me. Marty you gotta come back with me. But, what are you blind McFly, it's there. How else do you explain that wreck out there? Mom, is that you? Doc, she's beautiful. She's crazy about me. Look at this, look what she wrote me, Doc. That says it all. Doc, you're my only hope.</p>
				<h2>You wanna a Pepsi, pall, you're gonna pay for it.</h2>
				<p>Oh. I'll call you tonight. George McFly? Oh, he's kinda cute and all, but, well, I think a man should be strong, so he could stand up for himself, and protect the woman he loves. Don't you? I think it's terrible. Girls chasing boys. When I was your age I never chased a boy, or called a boy, or sat in a parked car with a boy. Next, please.</p>
				<h3>Whoa, whoa, Biff, what's that?</h3>
				<p>That's right, he's gonna be mayor. You okay, is everything alright? Look at the time, you've got less than 4 minutes, please hurry. Hey, hey, Doc, where are you? Quiet down, I'm sure the car is fine.</p>
				<h4>Oh, you make it sound so easy.</h4>
				<p>It's cold, damn cold. Ha, ha, ha, Einstein, you little devil. Einstein's clock is exactly one minute behind mine, it's still ticking. Well just gimme something without any sugar in it, okay? No no no, Doc, I just got here, okay, Jennifer's here, we're gonna take the new truck for a spin. Damn. I'm late for school. Hey man, the dance is over. Unless you know someone else who could play the guitar.</p>*/}
				<Projects projectsData={projectSorter("past")} />
			</Time>

			<Time timePeriod={history}>
				{/*<h1>This is heavy, doc</h1>
				<p>Get your meat hooks off of me. Marty you gotta come back with me. But, what are you blind McFly, it's there. How else do you explain that wreck out there? Mom, is that you? Doc, she's beautiful. She's crazy about me. Look at this, look what she wrote me, Doc. That says it all. Doc, you're my only hope.</p>
				<h2>You wanna a Pepsi, pall, you're gonna pay for it.</h2>
				<p>Oh. I'll call you tonight. George McFly? Oh, he's kinda cute and all, but, well, I think a man should be strong, so he could stand up for himself, and protect the woman he loves. Don't you? I think it's terrible. Girls chasing boys. When I was your age I never chased a boy, or called a boy, or sat in a parked car with a boy. Next, please.</p>
				<h3>Whoa, whoa, Biff, what's that?</h3>
				<p>That's right, he's gonna be mayor. You okay, is everything alright? Look at the time, you've got less than 4 minutes, please hurry. Hey, hey, Doc, where are you? Quiet down, I'm sure the car is fine.</p>
				<h4>Oh, you make it sound so easy.</h4>
				<p>It's cold, damn cold. Ha, ha, ha, Einstein, you little devil. Einstein's clock is exactly one minute behind mine, it's still ticking. Well just gimme something without any sugar in it, okay? No no no, Doc, I just got here, okay, Jennifer's here, we're gonna take the new truck for a spin. Damn. I'm late for school. Hey man, the dance is over. Unless you know someone else who could play the guitar.</p>*/}
				<Projects projectsData={projectSorter("history")} />
			</Time>

			<Modal />
		</Layout>
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
      }
      id
      html
    }
  }
}
`

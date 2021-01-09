import * as React from "react"
import { Helmet } from "react-helmet"

import AboutSection from '../components/aboutSection';
import CtaSection from '../components/ctaSection'
import HeroSection from "../components/heroSection";
import ProjectsSection from '../components/projectsSection'
import Layout from "../components/layout";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Alex Ricci | Portfolio</title>
      </Helmet>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <CtaSection />
    </Layout>
  )
}

export default IndexPage

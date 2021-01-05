import * as React from "react"
import AboutSection from '../components/aboutSection';
import CtaSection from '../components/ctaSection'
import HeroSection from "../components/heroSection";
import ProjectsSection from '../components/projectsSection'
import Layout from "../components/layout";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <CtaSection />
    </Layout>
  )
}

export default IndexPage

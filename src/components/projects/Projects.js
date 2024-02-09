import Project from './Project.js'

function Projects() {
  return (
    <div className='mx-auto my-12 max-w-2xl px-6'>
      <p className="my-2 text-medium inline-block font-medium no-underline">Projects</p>
      <Project name="Villow" description="Zillow - popular real estate website clone."/>
    </div>
  )
}

export default Projects;

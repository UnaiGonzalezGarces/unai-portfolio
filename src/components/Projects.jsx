import ProjectCard from './ProjectCard';

const projects = [
  {
    imgSrc: '/images/project-1.png',
    title: 'Company management dashboard app',
    tags: ['React', 'NextJS', 'MongoDB'],
    projectLink: 'https://github.com/UnaiGonzalezGarces/company-dashboard',
  },
  {
    imgSrc: '',
    title: 'More to come...',
    tags: [],
  },
];

const Projects = () => {
  return (
    <section className='section' id='projects'>
      <div className='container'>
        <h2 className='mb-8 headline-2 reveal-up'>My portfolio highlights</h2>

        <div className='grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]'>
          {projects.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes={'reveal-up'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

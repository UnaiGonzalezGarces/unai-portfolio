import ProjectCard from './ProjectCard';

const works = [
  {
    imgSrc: '/public/project-1.jpg',
    title: 'Full stack music app',
    tags: ['API', 'MVC', 'Development'],
    projectLink: 'https://musify-5al0.onrender.com/',
  },
  {
    imgSrc: '/public/project-2.jpg',
    title: 'Free stock photo app',
    tags: ['API', 'SPA'],
    projectLink: 'https://pixstock-official.vercel.app/',
  },
  {
    imgSrc: '/public/project-3.jpg',
    title: 'Recipe app',
    tags: ['Development', 'API'],
    projectLink: '',
  },
  {
    imgSrc: '/public/project-4.jpg',
    title: 'Real state website',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/codewithsadee-org/wealthome',
  },
  {
    imgSrc: '/public/project-5.jpg',
    title: 'eCommerce website',
    tags: ['eCommerce', 'Development'],
    projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website',
  },
  {
    imgSrc: '/public/project-6.jpg',
    title: 'vCard Personal portfolio',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio',
  },
];

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container'>
        <h2 className='mb-8 headline-2'>My portfolio highlights</h2>

        <div className='grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]'>
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;

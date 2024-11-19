import SkillCard from './SkillCard';

const skillsItem = [
  {
    imgSrc: '/public/figma.svg',
    label: 'Figma',
    desc: 'Design tool',
  },
  {
    imgSrc: '/public/css3.svg',
    label: 'CSS',
    desc: 'User Interface',
  },
  {
    imgSrc: '/public/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction',
  },
  {
    imgSrc: '/public/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server',
  },
  {
    imgSrc: '/public/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Node Framework',
  },
  {
    imgSrc: '/public/mongodb.svg',
    label: 'MongoDB',
    desc: 'Database',
  },
  {
    imgSrc: '/public/react.svg',
    label: 'React',
    desc: 'Framework',
  },
  {
    imgSrc: '/public/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface',
  },
];

const Skills = () => {
  return (
    <section className='section'>
      <div className='container'>
        <h2 className='headline-2 reveal-up'>Essential Tools I use</h2>

        <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up'>
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div className='grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]'>
          {skillsItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes={'reveal-up'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

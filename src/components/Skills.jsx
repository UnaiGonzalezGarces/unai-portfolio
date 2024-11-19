import SkillCard from './SkillCard';

const skillsItem = [
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
  },
  {
    imgSrc: '/images/mongodb.svg',
    label: 'MongoDB',
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
  },
];

const Skills = () => {
  return (
    <section className='section'>
      <div className='container'>
        <h2 className='headline-2 reveal-up'>Some of my developement skills</h2>

        <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch] md:max-w-full reveal-up font-bold'>
          I have experience working with the following technologies and tools.
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

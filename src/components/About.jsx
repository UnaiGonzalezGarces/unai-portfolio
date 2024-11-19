// const aboutItems = [
//   {
//     label: 'Project done',
//     number: 45,
//   },
//   {
//     label: 'Years of experience',
//     number: 10,
//   },
// ];

const About = () => {
  return (
    <section id='about' className='section'>
      <div className='container'>
        <div className='bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up'>
          <p className='mb-4 text-zinc-300 md:mb-8 md:text-2xl'>
            Hey there! I&apos;m{' '}
            <span className='font-bold text-sky-400'>Unai González</span>, a
            junior web developer based in Barcelona, Spain. In 2020 I started
            studying computer science and there I discovered what I&apos;m
            really passionate about, web development, since then I&apos;ve been
            learning and working on my abilities. I&apos;m a very curious person
            and I love to learn new things. I&apos;m always looking for new
            challenges and opportunities to grow as a developer.
          </p>
          {/*
          <div className='flex flex-wrap items-center gap-4 md:gap-7'>
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className='flex items-center md:mb-2'>
                  <span className='text-2xl font-semibold md:text-4xl'>
                    {number}
                  </span>
                  <span className='font-semibold text-sky-400 md:text-3xl'>
                    +
                  </span>
                </div>

                <p className='text-sm text-zinc-400'>{label}</p>
              </div>
            ))}

            <img
              src='/images/logo.png'
              alt='Logo'
              width={10}
              height={10}
              className='ml-auto md:w-[40px] md:h-[40px]'
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;

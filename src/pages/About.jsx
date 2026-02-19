import React from 'react'

const About = () => {
    const skills = [
        "Python",
        "Javascript",
        "React js",
        "React native",
        "Machine learning",
        "Artificial intelligence",
        "Node js",
        "Django",
        "Sql database",
        "No sql database",
        "Tailwind css",
        "Git",
    ]
  return (
   <div className="p-10 bg-slate-50 min-h-screen">
  <h1 className="text-4xl text-center font-bold mb-12 text-slate-800">About Me</h1>
    <div>
  <div className='flex flex-col md:flex-row justify-between gap-12 max-w-6xl mx-auto'>
    <div className="md:w-1/4">
      <p className="text-sm uppercase tracking-widest ">Introduction</p>
    </div>

    <div className='max-w-2xl'>
      <p className="text-lg text-slate-700 leading-relaxed mb-10">
        I’m <span className="font-semibold text-slate-900">Elikana Mwangi</span>, a full-stack developer passionate about building end-to-end digital experiences that are fast, scalable, and user-focused. 
        With strong expertise in both front-end and back-end technologies, I enjoy transforming ideas into fully functional web applications.
      </p>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-6 text-slate-800">What I Do</h2>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className="p-4 bg-white rounded-xl shadow-sm border border-red-100">
            <h3 className="font-bold text-blue-600">Frontend Development</h3>
            <p className="text-sm text-slate-600">Crafting responsive, interactive UIs using React, Next.js, and Tailwind CSS.</p>
          </div>

          <div className="p-4 bg-white rounded-xl shadow-sm border border-red-100">
            <h3 className="font-bold text-blue-600">Backend Systems</h3>
            <p className="text-sm text-slate-600">Building robust APIs and server-side logic with Node.js, Express, and NestJS.</p>
          </div>

          <div className="p-4 bg-white rounded-xl shadow-sm border border-red-100">
            <h3 className="font-bold text-blue-600">Database Management</h3>
            <p className="text-sm text-slate-600">Designing efficient data schemas in PostgreSQL (SQL) and MongoDB (NoSQL).</p>
          </div>

          <div className="p-4 bg-white rounded-xl shadow-sm border border-red-100">
            <h3 className="font-bold text-blue-600">Ai sytems</h3>
            <p className="text-sm text-slate-600">This one of my favorite. Turning systems into thinkable and intelligent applications.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className='flex flex-col md:flex-row justify-between gap-12 max-w-6xl mx-auto mt-10 items-start'>
    <div className='md:w-1/4'>
        <p className="text-sm uppercase tracking-widest">Experience</p>

    </div>
    <div className=' max-w-2xl space-y-3'>
        <div className='p-4 bg-white rounded-xl shadow-sm border border-blue-100'>
            <div className='flex justify-between'>
                <div>
                    <p>Google</p>
                </div>
                <div>
                    <p>May 2025 - Dec 2026</p>
                </div>
            </div>
            <div>
                <p>Lead end-to-end development of scalable web applications that are fast, accessible, user-friendly and used by millions of users.</p>
                <p>Mentor junior developers in best practices and code review.</p>
            </div>
        </div>
        <div className='bg-slate-50 shadow-lg rounded-md z-10 border border-blue-100 flex flex-col p-3'>
            <div className='flex justify-between'>
                <div>
                    <p>Safaricom</p>
                </div>
                <div>
                    <p>May 2024 - Dec 2025</p>
                </div>
            </div>
            <div>
                <p>Full-stack development of large-scale, high-performance systems used by millions of users.</p>
                <p>Mentor junior engineers, conduct code reviews, and uphold engineering best practices.</p>
            </div>
        </div>
    </div>
  </div>

    <div className='flex flex-col md:flex-row justify-between gap-12 max-w-6xl mx-auto mt-10 items-start'>
    <div className='md:w-1/4'>
        <p className="text-sm uppercase tracking-widest">Education</p>
    </div>
    <div className=' max-w-2xl space-y-3'>
        <div className='p-4 bg-white rounded-xl shadow-sm border border-blue-100'>
            <div className='flex justify-between items-center mb-2'>
                <div className='flex space-x-2 items-center'>
                    <img src="/src/assets/jkuat.png"  width={40} alt="jkuat logo" />
                    <p>Jomo Kenyatta University of Agriculture and Technology</p>
                </div>
                <div>
                    <p>2024 - 2029</p>
                </div>
            </div>
            <div>
                <p className='text-base underline'>Bachelor of Science in Mechatronic Engineering</p>
                <p>Graduated with First Class Honors, specializing in mechatronics systems and artificial intelligence.</p>
            </div>
        </div>
    </div>

  </div>
   <div className='flex flex-col md:flex-row justify-between gap-12 max-w-6xl mx-auto mt-10 items-start'>
    <div className='md:w-1/4'>
        <p className="text-sm uppercase tracking-widest">Skills</p>
    </div>
    <div className=' max-w-2xl lg:min-w-2xl space-y-3'>
        <div className='p-4 bg-white rounded-xl w-2400 shadow-sm border border-blue-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {
            skills.map((skill, index) => (
                <div key={index} className='p-2 bg-blue-200 hover:cursor-pointer hover:bg-slate-100  rounded-md text-center text-sm text-slate-700 font-medium'>
                    <p>{skill}</p>
                </div>
            ))
        }
        </div>
    </div>
    
  </div>
  </div>
</div>
  )
}

export default About
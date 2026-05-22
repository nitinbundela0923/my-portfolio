function Skills() {
  const skills = [
    "Python",
    "Pandas",
    "NumPy",
    "Machine Learning",
    "SQL",
    "React",
    "HTML",
    "CSS"
  ];

  return (
    <div className="page">
      <h1 className="title">Skills</h1>

      <div className="grid">
        {skills.map((skill,index)=>(
          <div key={index} className="card">
            <h2>{skill}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;

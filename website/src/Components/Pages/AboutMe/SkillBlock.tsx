interface SkillBlockTypes {
  title: string;
  skillList: string[];
}

export default function SkillBlock({ title, skillList }: SkillBlockTypes) {
  return (
    <div className='skillBlock'>
      <div className='skillTitle'>
        <span className='prompt'>&gt;</span> {title}
      </div>
      <div className='skillList'>
        {skillList.map((item) => (
          <span className='skill' key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}
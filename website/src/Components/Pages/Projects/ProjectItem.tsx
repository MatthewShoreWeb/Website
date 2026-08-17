interface PropTypes {
    itemInfo: Object
}

export default function ProjectItem({ itemInfo }: PropTypes) {
    return (
        <div className='projectItem'>
            <div className='projectTitle'>{itemInfo.title}</div>
            <div className='projectDesc'>{itemInfo.desc}</div>
            <div className='projectSkills'>
                {itemInfo.skills.map((skill, i) => (
                    <span key={i}>{skill}</span>
                ))}
            </div>
        </div>
    )
}
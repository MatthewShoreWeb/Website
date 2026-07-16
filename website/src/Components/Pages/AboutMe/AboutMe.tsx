import SkillBlock from './SkillBlock.tsx';
import './AboutMe.css';

export default function AboutMe() {
    return (
        <div id='aboutMe'>
            <div id='descriptionBlock'>
                I am a motivated and award-winning full-stack software engineer with 6 years of professional experience
                focused around building web applications, APIs and maintaining large analytics and personalisation
                solutions across over 20 brands. I was very pleased to have been selected as a winner in the PPA Next
                Gen Awards 2025 for my development work.
            </div>

            <div id='skillsBlock'>
                <SkillBlock title='Front End Development' skillList={['HTML / CSS / ES6', 'TypeScript', 'React', 'React Native', 'API Integrations', 'Responsive Design']} />
                <SkillBlock title='Back End Development' skillList={['Node.js', 'REST', 'GraphQL', 'Web Sockets', 'Message Queues', 'Auth Protocols', 'Python', 'PostgreSQL', 'API Testing']} />
                <SkillBlock title='AI Tools' skillList={['RAG development', 'Vercel AI SDK', 'Vector Databases']} />
                <SkillBlock title='Analytics, Tagging & Personalisation' skillList={['Adobe Analytics', 'Adobe Target', 'Adobe Launch', 'Piano Analytics', 'Piano VX', 'Piano Audience', 'Google Analytics', 'Google Tag Manager']} />
                <SkillBlock title='Cloud Computing' skillList={['Azure', 'Docker', 'Jenkins']} />
                <SkillBlock title='Other' skillList={['Java', 'Linux']} />
            </div>
        </div>
    )
}
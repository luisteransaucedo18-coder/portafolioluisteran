import { skillGroups } from '../data/portfolio';
import { Icon } from './Icon';
import { Section } from './Section';

export function Skills() {
  return (
    <Section id="habilidades" label="Stack" title="Habilidades tecnicas">
      <div className="skills-grid fade-in">
        {skillGroups.map((group) => (
          <article className="skill-category" key={group.title}>
            <div className="skill-category-icon">
              <Icon name={group.icon} size={20} />
            </div>
            <h3 className="skill-category-title">{group.title}</h3>
            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

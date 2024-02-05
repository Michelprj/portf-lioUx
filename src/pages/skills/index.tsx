import ProgressSkills from '../../components/progressSkills';
import { i18n } from '../../translate/i18n';
import { Container } from './style';

function Skills() {
  return (
    <Container id="skills">

      <div>
        <h2>{i18n.t('skillsText.subtitle')}</h2>
      </div>

      <div className="container-skills">
        <div className="container-softwares">
          <h3>Softwares</h3>
          <div className="line-botton" />
          <ProgressSkills titleSkill="Photoshop" value="240" />
          <ProgressSkills titleSkill="Illustrator" value="240" />
          <ProgressSkills titleSkill="Figma" value="280" />
        </div>

        <div className="container-knowledge">
          <h3>{i18n.t('skillsText.titleKnowledge')}</h3>
          <div className="line-botton" />
          <div className="container-progress-bar">
            <div>
              <ProgressSkills titleSkill="UI Design" value="240" />
              <ProgressSkills titleSkill="UX Design" value="230" />
              <ProgressSkills titleSkill="Design Thinking" value="180" />
            </div>
            <div>
              <ProgressSkills
                titleSkill={ i18n.t('skillsText.subtitleKnowledge') }
                value="280"
              />
              <ProgressSkills titleSkill="Google analytics" value="180" />
              <ProgressSkills titleSkill="Treejack" value="180" />
            </div>
          </div>
        </div>
      </div>

    </Container>
  );
}

export default Skills;

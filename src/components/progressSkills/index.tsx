import { Container } from './style';

type ProgressSkillsProps = {
  titleSkill: string,
  value: string,
};

function ProgressSkills({ titleSkill, value }: ProgressSkillsProps) {
  return (
    <Container>
      <h4>{ titleSkill }</h4>

      <div className="container-progress-bar">
        <div className="background-progress-bar" />
        <div
          className="progress-bar"
          style={ { width: `${value}px` } }
        />
      </div>
    </Container>
  );
}

export default ProgressSkills;

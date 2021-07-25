import {FactsDiv} from './Facts.styles'

const Facts = ({ title, value }) => {
  return (
    <FactsDiv>
      <h3>{title}</h3>
      <h4>{value}</h4>
    </FactsDiv>
  );
};

export default Facts;

import {MenuDiv} from './Facts.styles'

const Facts = ({ title, value }) => {
  return (
    <MenuDiv>
      <h3>{title}</h3>
      <h4>{value}</h4>
    </MenuDiv>
  );
};

export default Facts;

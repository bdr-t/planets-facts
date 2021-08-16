import { ImgDiv} from "./Img.styles";

const Img = ({planetDetails, menuPosition}) => {
  return (
    <ImgDiv>
      <img src={planetDetails[menuPosition].image} alt="planet" />
    </ImgDiv>
  );
};

export default Img;

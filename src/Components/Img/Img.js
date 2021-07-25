import { ImgDiv} from "./Img.styles";

const Img = ({source}) => {
  return (
    <ImgDiv>
      <img src={source} alt="planet" />
    </ImgDiv>
  );
};

export default Img;

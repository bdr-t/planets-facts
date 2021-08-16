import {Container, ConentDiv, MoreInfoDiv, ExternalIcon, TextWraper } from "./Content.styles";

const Content = ({planetDetails, menuPosition}) => {
  console.log(planetDetails)

  return (
    <Container>
      <ConentDiv>
        <h1>{planetDetails.name}</h1>
        <TextWraper>
          <p>
            {planetDetails[menuPosition].content}
          </p>
        </TextWraper>

        <MoreInfoDiv>
          <p>Source:</p>
          <a href="google.com">
            Wikipedia <ExternalIcon />
          </a>
        </MoreInfoDiv>
      </ConentDiv>
    </Container>
  );
};

export default Content;

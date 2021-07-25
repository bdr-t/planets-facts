import {Container, ConentDiv, MoreInfoDiv, ExternalIcon } from "./Content.styles";

const Content = () => {
  return (
    <Container>
      <ConentDiv>
        <h1>Earth</h1>
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
          <p>
            Third planet from the Sun and the only known planet to harbor life.
            About 29.2% of Earth's surface is land with remaining 70.8% is
            covered with water. Earth's distance from the Sun, physical
            properties and geological history have allowed life to evolve and
            thrive.
          </p>
        </div>

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

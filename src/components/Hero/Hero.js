import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row padding>
    <LeftSection>
      <SectionTitle main center>
        Bienvenido a <br />
        Mi portafolio personal
      </SectionTitle>
      <SectionText>
        El porpósito de esta página es ayudar a otros emprendedores.
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Más Información
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;

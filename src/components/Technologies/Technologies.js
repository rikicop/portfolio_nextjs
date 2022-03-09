import React from "react";
import { DiFirebase, DiReact, DiPython } from "react-icons/di";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Tecnologías</SectionTitle>
    <SectionText>
      Trabajo con un rango de tecnologías del desarrollo web.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiencia con <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>BackEnd-End</ListTitle>
          <ListParagraph>
            Experiencia con <br />
            Node y MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="3rem" />
        <ListContainer>
          <ListTitle>Python</ListTitle>
          <ListParagraph>
            Experiencia con <br />
            Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

import React from 'react';
import { MainSection, StyledSubTitle } from 'components/Section/Sectionstyle';
export const Section = ({ title, children }) => {
  return (
    <MainSection>
      <StyledSubTitle>{title}</StyledSubTitle>
      {children}
    </MainSection>
  );
};

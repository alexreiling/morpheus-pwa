import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 16px;
  line-height: 24px;
`;

type ParagraphProps = {};

const Paragraph: React.FC<ParagraphProps> = (props) => {
  const { children, ...rest } = props;
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export default Paragraph;

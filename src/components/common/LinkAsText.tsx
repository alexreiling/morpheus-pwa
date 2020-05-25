import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #1ec8cc;
  cursor: pointer;
`;

type LinkAsTextProps = {
  children?: string;
  to: string;
};

const LinkAsText: React.FC<LinkAsTextProps> = (props) => {
  const { children, to } = props;
  return <StyledLink to={to}>{children}</StyledLink>;
};

export default LinkAsText;

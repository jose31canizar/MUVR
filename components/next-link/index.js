import React from "react";
import Link from "next/link";
import { Box } from "~/components";
import styled from "styled-components";
import { findTag } from "~/helpers";

export const Links = [
  {
    href: "metro",
    label: "Metro"
  },
  {
    href: "cercanias",
    label: "Cercanías"
  },
  {
    href: "carsharing",
    label: "Carsharing"
  }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const StyledLink = styled(Box)`
  outline: none;
  color: rgba(255, 255, 255, 0.9);

  &:hover {
    color: grey;
  }
`;

export const NextLink = ({ href, children, ...props }) => {
  return (
    <Link href={`/${href}`}>
      <StyledLink pointer as="a" {...props} tabIndex="-1">
        {children}
      </StyledLink>
    </Link>
  );
};

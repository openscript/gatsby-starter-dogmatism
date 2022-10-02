import { graphql, PageProps } from 'gatsby';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { AllGenericPagesQuery } from '../../graphql-types';
import { Document } from '../layouts/default/Document';
import { DefaultLayout } from '../layouts/DefaultLayout';

export default function GenericPage({ children }: PageProps<AllGenericPagesQuery>) {
  return <DefaultLayout>{children}</DefaultLayout>;
}

export function Head() {
  return <Document />;
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      id
    }
  }
`;

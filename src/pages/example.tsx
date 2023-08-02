import { gql } from "../__generated__";
import { useQuery } from "@apollo/client";
import Head from "next/head";
import Header from "../components/header";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import { getNextStaticProps } from "@faustwp/core";
import { GetStaticPropsContext } from "next";

/**
 * Next.js file based page example with Faust helpers.
 */
export default function Page() {
  const { data } = useQuery(Page.query);

  const { title: siteTitle, description: siteDescription } =
    data.generalSettings;
  const menuItems = data.primaryMenuItems.nodes;

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Header fragment={data}/>

      <main className="container">
        <EntryHeader title="Next.js Page Example" />
        <p>Next.js pages are still supported!</p>
      </main>

      <Footer />
    </>
  );
}

Page.query = gql(`
  ${Header.fragments.headerFragment}
  query GetExamplePage {
    ${Header.fragments.headerFragment}
    generalSettings {
      title
      description
    }
  }
`);

export function getStaticProps(ctx: GetStaticPropsContext) {
  return getNextStaticProps(ctx, {
    Page,
  });
}

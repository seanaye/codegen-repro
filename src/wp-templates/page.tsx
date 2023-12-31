import { gql } from "../__generated__";
import Head from "next/head";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import Header from "../components/header";
import { GetPageQuery } from "../__generated__/graphql";
import { FaustTemplate } from "@faustwp/core";

const Component: FaustTemplate<GetPageQuery> = (props) => {
  // Loading state for previews
  console.log("page template");
  if (props.loading) {
    return <>Loading...</>;
  }

  const { title: siteTitle } = props.data.generalSettings;
  const { title, content } = props.data.page;

  return (
    <>
      <Head>
        <title>{`${title} - ${siteTitle}`}</title>
      </Head>

      {/* <Header fragment={props.data} /> */}

      <main className="container">
        <EntryHeader title={title} />
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="no-preflight"
        />
      </main>

      <Footer />
    </>
  );
};

Component.variables = ({ databaseId }, ctx) => {
  console.log({ databaseId });
  return {
    databaseId,
    asPreview: ctx?.asPreview,
  };
};

Component.query = gql(`
  query GetPage($databaseId: ID!, $asPreview: Boolean = false) {


    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
    }
    generalSettings {
      title
      description
    }
    primaryMenuItems: menuItems(where: { location: PRIMARY }) {
      nodes {
        id
        uri
        path
        label
        parentId
        cssClasses
        menu {
          node {
            name
          }
        }
      }
    }
  }
`);

export default Component;

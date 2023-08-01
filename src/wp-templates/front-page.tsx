import { gql } from "../__generated__";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import { GetHomePageQuery } from "../__generated__/graphql";
import { FaustTemplate } from "@faustwp/core";

const Component: FaustTemplate<GetHomePageQuery> = (props) => {
  const { title: siteTitle, description: siteDescription } =
    props.data.generalSettings;
  const menuItems = props.data.primaryMenuItems.nodes;

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Header
        siteTitle={siteTitle}
        siteDescription={siteDescription}
        menuItems={menuItems}
      />

      <Footer />
    </>
  );
};

Component.query = gql(`
  query GetHomePage {
    generalSettings {
      title
      description
    }
    
    primaryMenuItems: menuItems(where: { location: PRIMARY }) {
      nodes {
        editorBlocks {
renderedHTML
}
      }
    }
  }
`);

export default Component;

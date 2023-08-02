import { gql } from "../__generated__";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import { GetHomePageQuery } from "../__generated__/graphql";
import { FaustTemplate } from "@faustwp/core";

const Component: FaustTemplate<GetHomePageQuery> = (props) => {
  console.log("front page template", props.data);


  return (
    <>
      <Head>
        <title>{props.data.generalSettings.title}</title>
      </Head>

      <Header fragment={props.data} />

      <main className="container">
        <EntryHeader title="Welcome to the Faust Scaffold Blueprint" />

        <section>
          <Link
            href="https://faustjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Documentation →</h3>
            <p>
              Learn more about Faust.js through guides and reference
              documentation.
            </p>
          </Link>

          <Link
            href="https://my.wpengine.com/atlas#/create/blueprint"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Blueprints →</h3>
            <p>Explore production ready Faust.js starter projects.</p>
          </Link>

          <Link
            href="https://wpengine.com/atlas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Deploy →</h3>
            <p>
              Deploy your Faust.js app to Atlas along with your WordPress
              instance.
            </p>
          </Link>

          <Link
            href="https://github.com/wpengine/faustjs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Contribute →</h3>
            <p>Visit us on GitHub to explore how you can contribute!</p>
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
};


Component.query = gql(`
  query GetHomePage {
    ...HeaderFragment
    generalSettings {
      title
    }
  }


`);

export default Component;

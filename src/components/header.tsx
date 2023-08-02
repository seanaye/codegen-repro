import { FragmentType, getFragmentData, gql } from "../__generated__";
import Link from "next/link";

type HeaderProps = {
  fragment: FragmentType<typeof HeaderFragment>
};

function Header({
  fragment
}: HeaderProps) {
  const f = getFragmentData(HeaderFragment, fragment);
  console.log(f)
  return (
    <header>
      <div className="container">
        <Link href="/">
          <h2>{f.generalSettings.title}</h2>
          <p>{f.generalSettings.description}</p>
        </Link>

        <nav>
          <ul>
            {f.primaryMenuItems.nodes.map((item) => (
              <li key={item.id}>
                <Link href={item.uri}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export const HeaderFragment = gql(`
fragment HeaderFragment on RootQuery {
  generalSettings {
    title
    description
  }
  primaryMenuItems: menuItems(where: {location: PRIMARY}) {
    __typename
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

export default Header;

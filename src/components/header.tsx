import { gql } from "../__generated__";
import Link from "next/link";
import {
  HeaderGeneralSettingsFragmentFragment,
  PrimaryMenuItemFragmentFragment,
} from "../__generated__/graphql";

type HeaderProps = {
  siteTitle: HeaderGeneralSettingsFragmentFragment["title"];
  siteDescription: HeaderGeneralSettingsFragmentFragment["description"];
  menuItems: PrimaryMenuItemFragmentFragment[];
};

export default function Header({
  siteTitle,
  siteDescription,
  menuItems,
}: HeaderProps) {
  return (
    <header>
      <div className="container">
        <Link href="/">
          <h2>{siteTitle}</h2>
          <p>{siteDescription}</p>
        </Link>

        <nav>
          <ul>
            {menuItems.map((item) => (
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

Header.fragments = {
  generalSettingsFragment: gql(`
    fragment HeaderGeneralSettingsFragment on GeneralSettings {
      title
      description
    }
  `),
  menuItemFragment: gql(`
    fragment PrimaryMenuItemFragment on MenuItem {
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
  `),
};

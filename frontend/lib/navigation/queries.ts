export const NAVIGATION_QUERY = `
  *[_type == "navigation"][0]{
    logo {
      asset->{
        url
      }
    },
    menuItems[]{
      title,
      link,
      hasDropdown,
      dropdownItems[]{
        title,
        link
      }
    },
    themeToggle
  }
`;

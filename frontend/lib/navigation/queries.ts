export const NAVIGATION_QUERY = `
  *[_type == "navigation"][0]{
    logo {
      asset->{
        url
      }
    },
    headline {
      en,
      ta
    },
    subheadline {
      en,
      ta
    },
    menuItems[]{
      title {
        en,
        ta
      },
      link,
      hasDropdown,
      dropdownItems[]{
        title {
          en,
          ta
        },
        link
      }
    },
    themeToggle
  }
`;
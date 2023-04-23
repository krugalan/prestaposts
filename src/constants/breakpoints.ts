const size = {
  mobileM: "375px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "2560px",
};

export const device = {
  mobileM: `(min-width: ${size.mobileM})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};

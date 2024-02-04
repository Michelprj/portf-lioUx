const size = {
  mobileMin: '320px',
  mobileMax: '480px',
  tabletMin: '481px',
  tabletMax: '768px',
  laptopMin: '769px',
  laptopMax: '1024px',
  desktopMin: '1025px',
  desktopMax: '1200px',
  largerScreenMin: '1201px',
};

export const device = {
  mobileMin: `(min-width: ${size.mobileMin})`,
  mobileMax: `(max-width: ${size.mobileMax})`,
  tabletMin: `(min-width: ${size.tabletMin})`,
  tabletMax: `(max-width: ${size.tabletMax})`,
  laptopMin: `(min-width: ${size.laptopMin})`,
  laptopMax: `(max-width: ${size.laptopMax})`,
  desktopMin: `(min-width: ${size.desktopMin})`,
  desktopMax: `(max-width: ${size.desktopMax})`,
  largerScreenMin: `(min-width: ${size.largerScreenMin})`,
};

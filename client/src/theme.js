import { createTheme } from '@mui/material/styles';

// USAFE design system — industrial "hi-vis" safety aesthetic.
// Charcoal structure + safety-amber accents, characterful display type.
const HI_VIS = '#FFB703';
const CHARCOAL = '#1B232B';
const SLATE = '#52606D';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: CHARCOAL, contrastText: '#FFFFFF' },
    secondary: { main: HI_VIS, dark: '#E0A100', contrastText: CHARCOAL },
    warning: { main: HI_VIS, dark: '#E0A100', contrastText: CHARCOAL },
    success: { main: '#2E9E5B' },
    error: { main: '#D64545' },
    background: { default: '#EEF1F4', paper: '#FFFFFF' },
    text: { primary: CHARCOAL, secondary: SLATE },
    divider: 'rgba(27,35,43,0.08)',
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: '"Manrope", system-ui, -apple-system, sans-serif',
    h1: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, letterSpacing: '-1px' },
    h2: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, letterSpacing: '-0.5px' },
    h3: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, letterSpacing: '-0.5px' },
    h4: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, letterSpacing: '-0.5px' },
    h5: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 },
    h6: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 },
    subtitle1: { fontWeight: 500 },
    button: { fontWeight: 700, letterSpacing: '0.2px' },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: CHARCOAL,
          backgroundImage: 'none',
          boxShadow: '0 2px 18px rgba(27,35,43,0.18)',
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 10, textTransform: 'none', paddingInline: 20, paddingBlock: 8 },
        containedSecondary: { color: CHARCOAL },
        containedWarning: { color: CHARCOAL },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: '1px solid rgba(27,35,43,0.06)',
          boxShadow: '0 8px 28px rgba(27,35,43,0.08)',
        },
      },
    },
    MuiPaper: { styleOverrides: { rounded: { borderRadius: 16 } } },
    MuiOutlinedInput: { styleOverrides: { root: { borderRadius: 10 } } },
    MuiListItemButton: { styleOverrides: { root: { borderRadius: 10 } } },
  },
});

export default theme;

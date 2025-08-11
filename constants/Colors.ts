/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4'; 
const tintColorDark = '#fff'; 

const background = '#0C0C22';
const foreground1 = '#1A1D32';
const foreground2 = '#222749';

const past = '#4CAED1';
const present = '#ACFF82';
const future = '#F768DD';
const eternal = '#8975A8';
const beyond = '#BA1130';

const i = '#52FC12';
const ii = '#0DC5FC';
const iii = '#F19029';
const iv = '#BB09FB';
const iv_a = '#8B5DB7';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#F0F0F5', 
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    foreground1: '#D0D0E0', 
    foreground2: '#B0B0C5',
  },
  dark: {
    text: '#ECEDEE',
    background: background, 
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    foreground1: foreground1,
    foreground2: foreground2,
  },
  Background: background,
  Foreground: foreground1,
  Foreground2: foreground2,
  Past: past,
  Present: present,
  Future: future,
  Eternal: eternal,
  Beyond: beyond,
  I: i,
  II: ii,
  III: iii,
  IV: iv,
  IV_a: iv_a,
};
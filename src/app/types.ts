export type TypesBoxTypo = {
  fs?: string | null;
  lh?: string | null;
  ls?: string | null;
  color?: string | null;
  fw?: string | null;
  ff?: string | null;
  children?: string | null;
}

export type TypesTitle = {
  japanese?: string | null;
  english?: string | null;
  textAlign?: string | null;
}

export type TypesCustomButton = {
  text?: string | null;
  href?: string | null;
  isTarget?: boolean | true;
  bgcolor?: string | null;
  border?: string | null;
  borderColor?: string | null;
}

export type TypesFV = {
  src: string;
}

export type TypesMenuBarButton = {
  text: string;
  onClick: () => void;
}

export type TypesNl2br = {
  text: string | null;
}

export type TypesGradationButton = {
  text: string;
  href?: string | null;
  isTarget?: boolean | true;
}

export type TypesHoverText = {
  text: string;
  fs?: string | null;
  fw?: string | null;
  ff?: string | null;
  lh?: string | null;
}

export type TypesCharacterDrawer = {
  name: string;
  image: string;
  description: string;
}
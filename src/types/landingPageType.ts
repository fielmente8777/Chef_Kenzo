export interface BannerTypeProps {
  title: string;
  points: string[];
  description: string;
  subTitle: {
    title: string;
    src: string;
  }[];
  actions: {
    label: string;
    href: string;
  };
  note: string;
}

export interface AmbitionSectionProps {
  title: string;
  description: string[];
  items: {
    title: string;
    description: string;
    image: string;
  }[];
  action: {
    label: string;
    href: string;
  };
}

export interface FlexibilitySectionProps {
  title: string;
  description: string[];
  items: {
    image: string;
    title: string;
    description?: string;
    points?: string[];
  }[];
  action: {
    label: string;
    href: string;
  };
}

export interface StandardSectionProps {
  title: string;
  description: string[];
  items: {
    image: string;
    title: string;
    description: string;
  }[];
}

export interface SubScriptionSectionProps {
  title: string;
  description: string[];
  items: {
    image: string;
    title: string;
    points: string[];
    description?: string;
  }[];
  action: {
    label: string;
    href: string;
  };
}

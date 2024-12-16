import { ReactNode } from "react";

export type PaymentCardProps = {
  icon: ReactNode;
  percentText?: string;
  percent: string;
  label: string;
  cardBgColor?: string;
  color?: string;
};

export type SliderData = {
  imageSrc: string;
  imageTitle: string;
  imageDescription: string;
  title: string;
  description: string;
  buttonText: string;
  changeFlexDirection: boolean;
};

export type Testimonial = {
  name: string;
  title: string;
  text: string;
  avatar: string;
  rating: number;
};

export type TripCard = {
  icon: ReactNode;
  header: string;
  text: string;
};

export type GalleryItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ImageText = {
  src: string;
  name: string;
  text: string;
};

export type DestinationInfo = {
  img: string;
  price: number;
  routeText: string;
  progressWidthParty: string;
  progressWidthAdventure: string;
};

export type AccordionItem = {
  name: string;
  image: string;
};

export type ProgressItem = {
  label: string;
  progressWidth: string;
  progressBgFill: string;
  progressBgColor: string;
};

export type CompareItem = {
  label: string;
  disabled: boolean;
};

export type ExperienceImage = {
  text: string;
  image: string;
};

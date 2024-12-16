import {
  AccordionItem,
  CompareItem,
  DestinationInfo,
  ExperienceImage,
  GalleryItem,
  ImageText,
  ProgressItem,
  SliderData,
} from "../components/types/components";

export const testimonials = [
  {
    name: "Courtney Henry",
    title: "Amazing experience",
    text: "Lorem ipsum dolor sit amet consectetur. Sapien eget morbi aliquam ultricies est ornare. Eu ac lorem eleifend diam tellus magnis volutpat nulla.",
    avatar: "/images/avatar.png",
    rating: 5,
  },
  {
    name: "Courtney Henry",
    title: "Fantastic support",
    text: "Lorem ipsum dolor sit amet consectetur. Sapien eget morbi aliquam ultricies est ornare. Eu ac lorem eleifend diam tellus magnis volutpat nulla.",
    avatar: "/images/avatar.png",
    rating: 5,
  },
  {
    name: "Courtney Henry",
    title: "Unforgettable moments",
    text: "Lorem ipsum dolor sit amet consectetur. Sapien eget morbi aliquam ultricies est ornare. Eu ac lorem eleifend diam tellus magnis volutpat nulla.",
    avatar: "/images/avatar.png",
    rating: 5,
  },
  {
    name: "Courtney Henry",
    title: "Unforgettable moments",
    text: "Lorem ipsum dolor sit amet consectetur. Sapien eget morbi aliquam ultricies est ornare. Eu ac lorem eleifend diam tellus magnis volutpat nulla.",
    avatar: "/images/avatar.png",
    rating: 5,
  },
];

export const sections = [
  {
    title: "Programs",
    items: ["Program 1", "Program 2", "Program 3", "Program 4"],
  },
  {
    title: "Find out more",
    items: ["Link 1", "Link 2", "Link 3"],
  },
  {
    title: "Charterag",
    items: ["Link 1", "Link 2", "Link 3"],
  },
];

export const galleryData: GalleryItem[] = [
  { src: "/images/img1.png", alt: "Image 1", width: 268, height: 241 },
  { src: "/images/img2.png", alt: "Image 2", width: 268, height: 241 },
  { src: "/images/img5.png", alt: "Image 5", width: 268, height: 241 },
  { src: "/images/img4.png", alt: "Image 4", width: 268, height: 241 },
  { src: "/images/img3.png", alt: "Image 3", width: 268, height: 241 },
  { src: "/images/img8.png", alt: "Image 8", width: 268, height: 241 },
  { src: "/images/img7.png", alt: "Image 7", width: 268, height: 241 },
  { src: "/images/img6.png", alt: "Image 6", width: 268, height: 241 },
];

export const ImageTextData: ImageText[] = [
  {
    src: "/images/fjordBays.png",
    name: "Fjord Like Bays",
    text: "Where the sea meets the mountains. Sail the Bay of Kotor, often called Europe’s most southernmost fjord. Towering peaks and a rocky coastline dotted with charming waterside towns will leave you breathless.",
  },
  {
    src: "/images/coastalTown.png",
    name: "Nostalgic Coastal Towns",
    text: "Perast, Kotor, Tivat, Budva, Sveti Stefan…Montenegro is full of traditional Mediterranean coastal towns where locals still live with the nature. Sustainable tourism, local way of life and world famous Montenegrin hospitality.",
  },
  {
    src: "/images/beachParties.png",
    name: "Beach parties",
    text: "Summer Vibes at it’s best. The most amazing Montenegrin beaches, cocktails and live DJs. Dance the night away.",
  },
  {
    src: "/images/wellness.png",
    name: "Wellness oasis",
    text: "Relax and enjoy swimming pool area, gym, yoga, massages and saunas in the freshly opened, chic, Lazure Marina. This traditional marina has everything you wish for, from fine dining restaurants to burger bars, cocktails and freshly squeezed fruit stands. Celebrate traditional Montenegrin hospitality and freshness of local produce.",
  },
  {
    src: "/images/charteragRegatta.png",
    name: "Charterag regatta",
    text: "Is there anything better than sailing and having fun with your mates? Get behind the helm, pull ropes, switch sides and most important, have fun. On SailWeek there are no losers. Everybody wins!!!",
  },
  {
    src: "/images/mountainViews.png",
    name: "Spectacular Mountain Views",
    text: "Hike the peak of Lovcen mountain or catch a taxi to the top, for the most spectacular view of the surrounding mountains, postcard perfect cliffs and romantic bays.",
  },
];

export const DestinationsInfo: DestinationInfo[] = [
  {
    img: "/images/partyRoute.png",
    price: 710,
    routeText: "Party",
    progressWidthParty: "70%",
    progressWidthAdventure: "40%",
  },
  {
    img: "/images/ultraRoute.png",
    price: 792,
    routeText: "Ultra",
    progressWidthParty: "95%",
    progressWidthAdventure: "20%",
  },
  {
    img: "/images/greeceRoute.png",
    price: 710,
    routeText: "Greece",
    progressWidthParty: "40%",
    progressWidthAdventure: "70%",
  },
  {
    img: "/images/adventureRoute.png",
    price: 792,
    routeText: "Adventure",
    progressWidthParty: "10%",
    progressWidthAdventure: "90%",
  },
];

export const sliderData: SliderData[] = [
  {
    imageSrc: "/images/soloCabinFriends.png",
    imageTitle: "Solo",
    imageDescription:
      "Book a single spot and share a bunk bed cabin with a person of the same gender. We have a lot of single travelers just like you. ",
    title: "Solo, Cabin or Group of Friends",
    description:
      "Book a single spot and share a bunk bed cabin with a person of the same gender. We have a lot of single travelers just like you.",
    buttonText: "Compare cabins",
    changeFlexDirection: false,
  },
  {
    imageSrc: "/images/catamaran.png",
    imageTitle: "Catamaran",
    imageDescription: "Twin hulled boat - for those who travel in style",
    title: "Catamaran or Monohull",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tellus lectus non purus odio amet fermentum eu morbi id. Risus sed facilisis maecenas urna nunc.",
    buttonText: "Compare yachts",
    changeFlexDirection: true,
  },
  {
    imageSrc: "/images/swcWeek.png",
    imageTitle: "Skipper",
    imageDescription: "Lorem ipsum dolor sit amet consectetur",
    title: "Skipper and Host",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tellus lectus non purus odio amet fermentum eu morbi id. Risus sed facilisis maecenas urna nunc.",
    buttonText: "About us",
    changeFlexDirection: false,
  },
];

export const sailWeekList: CompareItem[] = [
  {
    label: "experience",
    disabled: false,
  },
  {
    label: "lorem ipsum dolor",
    disabled: false,
  },
  {
    label: "dolor sit et",
    disabled: false,
  },
  {
    label: "lorem ipsum dolor",
    disabled: false,
  },
  {
    label: "et santi dolor sum",
    disabled: false,
  },
  {
    label: "ipsum lorem dolor sit et",
    disabled: false,
  },
];

export const individualList: CompareItem[] = [
  {
    label: "experience",
    disabled: false,
  },
  {
    label: "lorem ipsum dolor",
    disabled: false,
  },
  {
    label: "dolor sit et",
    disabled: true,
  },
  {
    label: "lorem ipsum dolor",
    disabled: true,
  },
  {
    label: "et santi dolor sum",
    disabled: true,
  },
  {
    label: "ipsum lorem dolor sit et",
    disabled: true,
  },
];

export const AccordionData: AccordionItem[] = [
  {
    name: "Ultra route",
    image: "/images/ultraNew.png",
  },
  {
    name: "Greece route",
    image: "/images/greeceRoute.png",
  },
  {
    name: "Party route",
    image: "/images/partyRoute.png",
  },
  {
    name: "Adventure route",
    image: "/images/adventureRoute.png",
  },
];

export const progressData: ProgressItem[] = [
  {
    label: "Organised parties",
    progressWidth: "100%",
    progressBgFill: "#1DC072",
    progressBgColor: "#D2D2E2",
  },
  {
    label: "Sailweek Regatta",
    progressWidth: "100%",
    progressBgFill: "#1DC072",
    progressBgColor: "#D2D2E2",
  },
  {
    label: "Swim Stops",
    progressWidth: "60%",
    progressBgFill: "#1DC072",
    progressBgColor: "#D2D2E2",
  },
  {
    label: "Sightseeing",
    progressWidth: "30%",
    progressBgFill: "#1DC072",
    progressBgColor: "#D2D2E2",
  },
  {
    label: "Local cuisine",
    progressWidth: "0%",
    progressBgFill: "#1DC072",
    progressBgColor: "#D2D2E2",
  },
  {
    label: "Wine tasting",
    progressWidth: "0%",
    progressBgFill: "#1DC072",
    progressBgColor: "#D2D2E2",
  },
  {
    label: "Island hopping",
    progressWidth: "10%",
    progressBgFill: "#1DC072",
    progressBgColor: "#D2D2E2",
  },
  {
    label: "Exploring cities",
    progressWidth: "10%",
    progressBgFill: "#1DC072",
    progressBgColor: "#D2D2E2",
  },
  {
    label: "Cliff jumping",
    progressWidth: "70%",
    progressBgFill: "#1DC072",
    progressBgColor: "#D2D2E2",
  },
];

export const ExpImages: ExperienceImage[] = [
  {
    text: "sail",
    image: "/images/sail.png",
  },
  {
    text: "party",
    image: "/images/party.png",
  },
  {
    text: "explore",
    image: "/images/explore.png",
  },
  {
    text: "relax",
    image: "/images/relax.png",
  },
];

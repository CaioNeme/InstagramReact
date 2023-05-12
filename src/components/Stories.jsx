import Story from "./Story";

const sto = [
  {
    user: "9gag",
    img: "assets/img/9gag.svg",
    alt: "9gag",
  },
  {
    user: "meowed",
    img: "assets/img/meowed.svg",
    alt: "meowed",
  },
  {
    user: "barked",
    img: "assets/img/barked.svg",
    alt: "barked",
  },
  {
    user: "nathanwpylestrangeplanet",
    img: "assets/img/nathanwpylestrangeplanet.svg",
    alt: "nathanwpylestrangeplanet",
  },
  {
    user: "wawawicomics",
    img: "assets/img/wawawicomics.svg",
    alt: "wawawicomics",
  },
  {
    user: "respondeai",
    img: "assets/img/respondeai.svg",
    alt: "respondeai",
  },
  {
    user: "filomoderna",
    img: "assets/img/filomoderna.svg",
    alt: "filomoderna",
  },
  {
    user: "memeriagourmet",
    img: "assets/img/memeriagourmet.svg",
    alt: "memeriagourmet",
  },
];

export default function Storeies() {
  return (
    <div class="stories">
      {/*
      <Story user="9gag" img="assets/img/9gag.svg" alt="9gag" />
      <Story user="meowed" img="assets/img/meowed.svg" alt="meowed" />
      <Story user="barked" img="assets/img/barked.svg" alt="barked" />
      <Story
        user="nathanwpylestrangeplanet"
        img="assets/img/nathanwpylestrangeplanet.svg"
        alt="nathanwpylestrangeplanet"
      />
      <Story
        user="wawawicomics"
        img="assets/img/wawawicomics.svg"
        alt="wawawicomics"
      />
      <Story
        user="respondeai"
        img="assets/img/respondeai.svg"
        alt="respondeai"
      />
      <Story
        user="filomoderna"
        img="assets/img/filomoderna.svg"
        alt="filomoderna"
      />
      <Story
        user="memeriagourmet"
        img="assets/img/memeriagourmet.svg"
        alt="memeriagourmet"
      />
  */}
      {sto.map(Story)}
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

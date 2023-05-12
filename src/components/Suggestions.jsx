import Suggestion from "./Suggestion";

const sug = [
  {
    nome: "bad.vibes.memes",
    imagem: "assets/img/bad.vibes.memes.svg",
    altImg: "bad.vibes.memes",
  },
  {
    nome: "chibirdart",
    imagem: "assets/img/chibirdart.svg",
    altImg: "chibirdart",
  },
  {
    nome: "razoesparaacreditar",
    imagem: "assets/img/razoesparaacreditar.svg",
    altImg: "razoesparaacreditar",
  },
  {
    nome: "adorable_animals",
    imagem: "assets/img/adorable_animals.svg",
    altImg: "adorable_animals",
  },
  {
    nome: "smallcutecats",
    imagem: "assets/img/smallcutecats.svg",
    altImg: "smallcutecats",
  },
];

export default function Suggestions() {
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {/*
      <Suggestion
        nome="bad.vibes.memes"
        imagem="assets/img/bad.vibes.memes.svg"
        altImg="bad.vibes.memes"
      />
      <Suggestion
        nome="chibirdart"
        imagem="assets/img/chibirdart.svg"
        altImg="chibirdart"
      />
      <Suggestion
        nome="razoesparaacreditar"
        imagem="assets/img/razoesparaacreditar.svg"
        altImg="razoesparaacreditar"
      />
      <Suggestion
        nome="adorable_animals"
        imagem="assets/img/adorable_animals.svg"
        altImg="adorable_animals"
      />
      <Suggestion
        nome="smallcutecats"
        imagem="assets/img/smallcutecats.svg"
        altImg="smallcutecats"
      />
      */}
      {sug.map(Suggestion)}
    </div>
  );
}

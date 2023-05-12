import Post from "./Post";

const pub = [
  {
    imgUser: "assets/img/meowed.svg",
    altUser: "meowed",
    user: "meowed",
    imgPost: "assets/img/gato-telefone.svg",
    altPost: "gato-telefone",
    imgLike: "assets/img/respondeai.svg",
    altLike: "respondeai",
    qtdLikes: 101.523,
  },
  {
    imgUser: "assets/img/meowed.svg",
    altUser: "meowed",
    user: "meowed",
    imgPost: "assets/img/venus-cat1.jpg",
    altPost: "venus-cat",
    imgLike: "assets/img/respondeai.svg",
    altLike: "respondeai",
    qtdLikes: 201.343,
  },
  {
    imgUser: "assets/img/barked.svg",
    altUser: "barked",
    user: "barked",
    imgPost: "assets/img/dog.svg",
    altPost: "dog",
    imgLike: "assets/img/adorable_animals.svg",
    altLike: "adorable_animals",
    qtdLikes: 99.159,
  },
];

export default function Posts() {
  return (
    <div class="posts">
      {/*
      <Post
        imgUser="assets/img/meowed.svg"
        altUser="meowed"
        user="meowed"
        imgPost="assets/img/gato-telefone.svg"
        altPost="gato-telefone"
        imgLike="assets/img/respondeai.svg"
        altLike="respondeai"
        qtdLikes="101.523"
      />
      
      <Post
        imgUser="assets/img/meowed.svg"
        altUser="meowed"
        user="meowed"
        imgPost="assets/img/venus-cat1.jpg"
        altPost="venus-cat"
        imgLike="assets/img/respondeai.svg"
        altLike="respondeai"
        qtdLikes="201.343"
      />
      <Post
        imgUser="assets/img/barked.svg"
        altUser="barked"
        user="barked"
        imgPost="assets/img/dog.svg"
        altPost="dog"
        imgLike="assets/img/adorable_animals.svg"
        altLike="adorable_animals"
        qtdLikes="99.159"
      />*/}

      {pub.map(Post)}
    </div>
  );
}

import React from "react";

export default function Post(props) {
  const [like, setLike] = React.useState("heart-outline");
  const [save, setSave] = React.useState("bookmark-outline");
  let [a, setA] = React.useState("0");
  let qtdLikes = Number(props.qtdLikes.toString().replace(".", ""));
  qtdLikes = qtdLikes.toString();
  qtdLikes = `${qtdLikes.substring(0, 3)}.${qtdLikes.substring(4)}`;
  let [heart, setHeart] = React.useState("heart-normal");

  function curtir() {
    if (like === "heart-outline") {
      setLike("heart");
      setA("1");
      setHeart("heart-red");
    } else {
      setLike("heart-outline");
      setA("0");
      setHeart("heart-normal");
    }
  }
  function curtirImg() {
    if (like === "heart-outline") {
      setLike("heart");
      setA("1");
      setHeart("heart-red");
    }
  }
  function salvar() {
    if (save === "bookmark-outline") {
      setSave("bookmark");
    } else {
      setSave("bookmark-outline");
    }
  }

  return (
    <div data-test="post" class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.imgUser} alt={props.altUser} />
          {props.user}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img
          data-test="post-image"
          onClick={curtirImg}
          src={props.imgPost}
          alt={props.altPost}
        />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon
              class={heart}
              onClick={curtir}
              data-test="like-post"
              name={like}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              onClick={salvar}
              data-test="save-post"
              name={save}
            ></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.imgLike} alt={props.altLike} />
          <div data-test="likes-number" class="texto">
            Curtido por <strong>{props.like}</strong> e{" "}
            <strong>outras {qtdLikes + a} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

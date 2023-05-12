import React from "react";

export default function User() {
  let [user, setUser] = React.useState("Insira o Usuario");
  let [img, setImg] = React.useState("assets/img/meowed.svg");

  function perguntarUser() {
    let novoUser = prompt("Qual é o nome do usuario");
    if (!novoUser) {
      return;
    } else {
      setUser(novoUser);
    }
  }
  function perguntarImg() {
    let novaImg = prompt("Qual é a sua foto de perfil");
    if (!novaImg) {
      return;
    } else {
      setImg(novaImg);
    }
  }

  return (
    <div class="usuario">
      <img
        data-test="profile-image"
        onClick={perguntarImg}
        class="imgPerfil"
        src={img}
        alt="imagem de perfil"
      />
      <div class="texto">
        <span>
          <strong class="user" data-test="name">
            {user}
          </strong>
          <ion-icon
            data-test="edit-name"
            onClick={perguntarUser}
            class="nome"
            name="pencil"
          ></ion-icon>
        </span>
      </div>
    </div>
  );
}

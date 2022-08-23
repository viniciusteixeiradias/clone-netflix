import React from "react";
import "./Header.css";

export default ({black}) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src="https://conteudo.imguol.com.br/c/noticias/74/2022/06/06/bored-ape-nft-que-integra-a-colecao-do-bored-ape-yacht-club-1654521934017_v2_450x337.jpg" alt="Usuário" />
        </a>
      </div>
    </header>
  );
}
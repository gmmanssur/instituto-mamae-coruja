import sonhar from "../assets/gallery/sonhar/1.jpeg";
import acoes from "../assets/gallery/acoes/1.jpeg";
import inclusivos from "../assets/gallery/inclusivos/1.jpeg";
import conscientiza from "../assets/gallery/conscientiza/1.jpeg";
import { loadGallery } from "./galleryLoader";

export const galleryData = [
  {
    id: 1,
    image: sonhar,
    title: "Projeto Criar e Sonhar",
    description: "Momentos onde levamos a nossa missão para o mundo",
    images: loadGallery("sonhar"),
  },
  {
    id: 2,
    image: inclusivos,
    title: "Projetos Inclusivos",
    description: "Projetos que promovem a inclusão social e o bem-estar das famílias",
    images: loadGallery("inclusivos"),
  },
  {
    id: 3,
    image: acoes,
    title: "Ações Realizadas",
    description: "Distribuições em Santos, Peruíbe, Itanhaém, Suzano e SBC",
    images: loadGallery("acoes"),
  },
  {
    id: 4,
    image: conscientiza,
    title: "Projeto Conscientiza",
    description: "Ações de conscientização sobre a vida e a nossa missão",
    images: loadGallery("conscientiza"),
  }
];
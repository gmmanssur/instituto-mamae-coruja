import sonhar from "../assets/gallery/sonhar/1.jpeg";
import acoes from "../assets/gallery/acoes/1.jpeg";
import inclusivos from "../assets/gallery/inclusivos/1.jpeg";
import { loadGallery } from "./galleryLoader";

export const galleryData = [
  {
    id: 1,
    image: sonhar,
    badge: "Criar e Sonhar",
    title: "Projeto Criar e Sonhar",
    description: "Momentos onde levamos a nossa missão para o mundo",
    images: loadGallery("sonhar"),
  },
  {
    id: 2,
    image: inclusivos,
    badge: "Inclusivos",
    title: "Projetos Assistenciais e Inclusivos",
    description: "Projetos que promovem a inclusão social e o bem-estar das famílias",
    images: loadGallery("inclusivos"),
  },
  {
    id: 3,
    image: acoes,
    badge: "Ações",
    title: "Ações Realizadas",
    description: "Distribuições em Santos, Peruíbe, Itanhaém, Suzano e SBC",
    images: loadGallery("acoes"),
  },
];
import sonhar from "../assets/gallery/sonhar/1.jpeg";
import acoes from "../assets/gallery/acoes/1.jpeg";
import iluminar from "../assets/gallery/iluminar/1.jpeg";
import conscientiza from "../assets/gallery/conscientiza/1.jpeg";
import { loadGallery } from "./galleryLoader";
import volunteer from "../assets/gallery/voluntarios/1.jpeg";
import eventos from "../assets/gallery/eventos/1.jpeg";

export const galleryData = [
  {
    id: 1,
    image: sonhar,
    title: "Projeto Criar e Sonhar",
    description: "Momentos onde levamos a nossa missão para o mundo",
    images: loadGallery("sonhar"),
    idealizado: "Idealizadora: Pati C., Pati B., Helen, Noeli e Elinete"
  },
  {
    id: 2,
    image: iluminar,
    title: "Projeto Iluminar",
    description: "Projetos que promovem a inclusão social e o bem-estar das famílias",
    images: loadGallery("iluminar"),
    idealizado: "Idealizadora: Cris Levado"
  },
  {
    id: 3,
    image: conscientiza,
    title: "Projeto Conscientiza",
    description: "Ações de conscientização sobre a vida e a nossa missão",
    images: loadGallery("conscientiza"),
    idealizado: "Idealizador: Vinícius Laerte"
  },
  {
    id: 4,
    image: acoes,
    title: "Ações Realizadas",
    description: "Distribuições em Santos, Peruíbe, Itanhaém, Suzano e SBC",
    images: loadGallery("acoes"),
    idealizado: ""
  },
  {
    id: 5,
    image: volunteer,
    title: "Voluntários",
    description: "Nossos voluntários são o coração do Instituto Mamãe Coruja",
    images: loadGallery("voluntarios"),
    idealizado: ""
  },
  {
    id: 6,
    image: eventos,
    title: "Eventos",
    description: "Participações para levar o Instituto Mamãe Coruja ao mundo",
    images: loadGallery("eventos"),
    idealizado: ""
  }
];
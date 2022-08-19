import BannerMateriales from "./img/banner-materiales-descarga.png";
import {
  MainContainer,
  Title,
  SubTitle,
  Image,
  ImageContainer,
} from "./my-styled-comps";

export interface params {
  title?: string;
  subtitle?: string;
  banner?: string;
  url?: string;
}

const App = (params: params): JSX.Element => (
  <>
    <MainContainer>
      <Title>{params.title}</Title>
      <SubTitle>{params.subtitle}</SubTitle>
      <ImageContainer>
        <a href={params.url} target="_blank">
          <Image src={params.banner} />
        </a>
      </ImageContainer>
    </MainContainer>
  </>
);

App.defaultProps = {
  title: "materiales",
  subtitle: "para descargar",
  banner: BannerMateriales,
  url: "https://www.cruzroja.org.ar/newDesign/materiales/",
};

export default App;
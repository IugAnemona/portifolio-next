import Image from "next/image";
import {
  CardContainer,
  Content,
  InfoCard,
  InfoContainer,
  InfoList,
  Input,
  Score,
  SearchButton,
  SynopsisContainer,
  Title,
} from "./styles";
import { useState, useEffect } from "react";
import traceMoe from "./Api";
import { FaSearch } from "react-icons/fa";

export const KusakaKwaApp = () => {
  const [apiData, setApiData] = useState<AnimeData | any>("");
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState<string>("Belo Horizonte");

  interface AnimeData {
    title: string;
    image: string;
    studio: string;
    url: string;
    score: number;
    genres: string[];
    episodes: number;
    synopsis: string;
    video: string;
    episode: string;
  }

  useEffect(() => {
    requestApi(
      "https://www.omegascopio.com.br/wp-content/uploads/2020/03/Zero.jpg"
    );
  }, []);

  async function requestApi(link: string): Promise<void> {
    const resultApi: AnimeData = await traceMoe(link);

    setApiData(resultApi);
    setLoading(false);
  }

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };

  const handleClick = () => {
    requestApi(search);
  };

  return loading ? (
    <h1> loading</h1>
  ) : (
    <CardContainer>
      <Content>
        <Input placeholder="Image Url" onChange={handleChange} />
        <SearchButton onClick={handleClick}>
          <FaSearch />
        </SearchButton>
      </Content>
      <Title>{apiData.title}</Title>
      <InfoContainer>
        <Image
          loader={({ src }) => src}
          alt="Anime Image"
          src={apiData.image}
          width={300}
          height={300}
        ></Image>
        <InfoCard>
          <Score>{apiData.score}</Score>
          <div>
            <InfoList>
              <li>
                Episodes: <span>{apiData.episodes}</span>
              </li>
            </InfoList>
            <InfoList>
              <li>Genres:</li>

              {apiData.genres.map((genre: string, i: number, a: string[]) =>
                i !== a.length - 1 ? (
                  <span key={i}>{genre}, </span>
                ) : (
                  <span key={i}>{genre}.</span>
                )
              )}
            </InfoList>
            <InfoList>
              <li>
                Studio: <span>{apiData.studio}</span>
              </li>
            </InfoList>
          </div>
        </InfoCard>
      </InfoContainer>
      <SynopsisContainer>
        <h2>Sinopse</h2>
        <p>{apiData.synopsis}</p>
      </SynopsisContainer>
    </CardContainer>
  );
};

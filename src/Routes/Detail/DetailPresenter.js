import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";
import useWindowDimensions from "../../Components/useWindowDemensions";
import noPosterUrl from "../../assets/noPosterSmall.png";
import noBackdropUrl from "../../assets/noBackdropBig.jpg";

const Container = styled.div`
  height: calc(100vh- 80px);
  width: 100%;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
`;

const Content = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 80%;
  left: 5%;
`;

const Data = styled.div`
  width: ${(props) => props.width};
  margin-left: 30px;
`;

const Title = styled.h3`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 24px;
`;

const Item = styled.span``;

const ItemConatainer = styled.div`
  width: 80%;
  line-height: 1.75em;
  margin: 16px 0;
`;

const Divider = styled.span`
  margin: 0 8px;
`;

const Graph = styled.div`
  height: 8px;
  width: 100px;
  margin-right: 5px;
  background-color: black;
  display: inline-block;
  border: 1px solid #e1b12c;
`;

const GraphStick = styled.div`
  height: 100%;
  width: ${(props) => props.graghWidth}%;
  background-color: #e1b12c;
`;

const Overview = styled.p`
  font-size: 14px;
  opacity: 0.7;
  line-height: 1.8em;
  width: 70%;
`;

const Cover = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  border-radius: 5px;
  box-shadow: 3px 3px 36px rgba(200, 200, 200, 0.3);
`;

const DetailPresenter = ({ result, error, loading }) => {
  const { height, width, screenHeight, screenWidth } = useWindowDimensions();
  console.log(
    "height",
    height,
    "width",
    width,
    "screenHeight",
    screenHeight,
    "screenWidth",
    screenWidth
  );
  return loading ? (
    <>
      <Helmet>
        <title>Loading | Hunflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>
          {" "}
          {result.original_title
            ? result.original_title
            : result.original_name
            ? result.original_name
            : "Detail"}{" "}
          | Hunflix
        </title>
      </Helmet>
      <Backdrop
        bgImage={
          result.backdrop_path
            ? `https://image.tmdb.org/t/p/original${result.backdrop_path}`
            : noBackdropUrl
        }
      />
      <Content>
        <Cover
          height={
            screenWidth > screenHeight
              ? `${530 * (width / screenWidth)}px`
              : `${height * 0.26}px`
          }
          width={
            screenWidth > screenHeight
              ? `${380 * (width / screenWidth)}px`
              : `${height * 0.19}px`
          }
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : noPosterUrl
          }
        />
        <Data width={`${(width / screenWidth) * 70}%}`}>
          <Title>{result.original_title || result.original_name}</Title>
          <ItemConatainer>
            <Item>
              {result.release_date
                ? result.release_date.slice(0, 4)
                : null || result.first_air_date
                ? result.first_air_date.slice(0, 4)
                : null}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.runtime
                ? result.runtime
                : result.episode_run_time
                ? result.episode_run_time[0]
                : ""}{" "}
              min
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.genres &&
                result.genres.map(
                  (genre, index) =>
                    `${genre.name} ${
                      index < result.genres.length - 1 ? "⎢" : ""
                    }`
                )}
            </Item>
          </ItemConatainer>
          <ItemConatainer>
            <Graph>
              <GraphStick graghWidth={result.vote_average * 10} />
            </Graph>
            <Item>⭐️ {result.vote_average}</Item>
          </ItemConatainer>
          <Overview>{result.overview}</Overview>
        </Data>
      </Content>
    </Container>
  );
};

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Section from "../../Components/Section";
import Loader from "../../Components/Loader";

const Container = styled.div`
  padding: 0 10px;
`;

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today">
          {airingToday.map((tv) => tv.name)}
        </Section>
      )}
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated Shows">
          {topRated.map((tv) => tv.name)}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Shows">{popular.map((tv) => tv.name)}</Section>
      )}
    </Container>
  );

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TVPresenter;

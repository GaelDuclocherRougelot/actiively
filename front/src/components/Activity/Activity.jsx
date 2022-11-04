import React from 'react';
import PropTypes from 'prop-types';

import 'semantic-ui-css/semantic.min.css';
import {
  Image, Grid, Header, Container, Label, Icon,
} from 'semantic-ui-react';

function Activity({
  data,
}) {
  return (
    <Container>
      <Grid centered>
        <Grid.Row>
          <Header as="h1">{data.name}</Header>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column mobile={12} tablet={8} computer={4}>
            <Image src={data.image_url} alt={data.name} />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Container style={{ textAlign: 'center' }}>
              <br />
              {data.address}
              <br />
              {data.zip_code}
              {' '}
              {data.city}
              <br />
              <br />
              <Label.Group color="teal">
                <Label as="a">
                  {data.price}
                  {' '}
                  €
                  {' '}
                  {data.price_type}
                </Label>
                <Label as="a">
                  {data.gender}
                </Label>
                <Label as="a">
                  {data.level}
                </Label>
                <Label as="a">
                  {data.day}
                  {' '}
                  {data.start_time}
                  {' '}
                  -
                  {' '}
                  {data.end_time}
                </Label>
              </Label.Group>
              <Header as="h3" size="small">Informations de contact</Header>
              {data.organism_infos.email}
              <Icon name="mail" />
              <br />
              {data.organism_infos.phone_number}
              <Icon name="phone" />
            </Container>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column mobile={12} computer={8}>
            <Header as="h2" size="medium">L&apos;activité</Header>
            {data.description}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column mobile={12} computer={8}>
            <Header as="h2" size="medium">
              L&apos;association :
              {' '}
              {data.organismName}
            </Header>
            {data.organism_infos.organism_description}
            {' '}

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

Activity.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    zip_code: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    price_type: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    organismName: PropTypes.string.isRequired,
    phone_number: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    organism_description: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    start_time: PropTypes.string.isRequired,
    end_time: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

Activity.defaultProps = {};

export default React.memo(Activity);

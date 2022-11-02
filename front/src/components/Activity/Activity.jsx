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
          <Header as="h1">{data.activityName}</Header>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column mobile={12} tablet={8} computer={4}>
            <Image src={data.imageUrl} alt={data.activityName} />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Container style={{ textAlign: 'center' }}>
              <br />
              {data.address}
              <br />
              {data.zipCode}
              {' '}
              {data.city}
              <br />
              <br />
              <Label.Group color="teal">
                <Label as="a">
                  {data.price}
                  {' '}
                  {data.priceType}
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
                  {data.startTime}
                  {' '}
                  -
                  {' '}
                  {data.endTime}
                </Label>
              </Label.Group>
              <Header as="h3" size="small">Informations de contact</Header>
              <Icon name="mail" />
              {data.email}
              <br />
              <Icon name="phone" />
              {data.phoneNumber}
            </Container>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column mobile={12} computer={8}>
            <Header as="h2" size="medium">L&apos;activité</Header>
            {data.activityDescription}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column mobile={12} computer={8}>
            <Header as="h2" size="medium">
              L&apos;association :
              {' '}
              {data.organismName}
            </Header>
            {data.organismDescription}
            {' '}

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

Activity.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    activityName: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    zipCode: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    priceType: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    organismName: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    activityDescription: PropTypes.string.isRequired,
    organismDescription: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

Activity.defaultProps = {};

export default React.memo(Activity);

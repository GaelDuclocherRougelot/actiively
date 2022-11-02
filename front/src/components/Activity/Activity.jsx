import React from 'react';
// import PropTypes from 'prop-types';

import "semantic-ui-css/semantic.min.css";
import { Image, Grid, Header, Container, Label, Icon } from 'semantic-ui-react';

function Activity() {
  return (
    <Container>
      <Grid centered>
        <Grid.Row>
          <Header as='h1'>Piano</Header>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column mobile={12} tablet={8} computer={4}>
            <Image src='https://images.unsplash.com/photo-1513883049090-d0b7439799bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Container style={{ textAlign: 'center' }}><br />
              20 avenue de la République<br />
              69000 Lyon<br /><br />
              <Label.Group color='teal'>
                <Label as='a'>
                  150 € par trimestre
                </Label>
                <Label as='a'>
                  Mixte
                </Label>
                <Label as='a'>
                  Tous niveaux
                </Label>
                <Label as='a'>
                  Lundi 18h00 - 20h00
                </Label>
              </Label.Group>
              <Header as='h3' size='small'>Informations de contact</Header>
              <Icon name='mail' />doremi@gmail.com<br />
              <Icon name='phone' />0625417885
            </Container>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column mobile={12} computer={8}>
            <Header as='h2' size='medium'>L'activité</Header>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis minima numquam eaque velit doloremque iste deserunt nam, porro voluptate quod eos voluptatibus laboriosam exercitationem, aut aperiam earum fugiat aliquam laudantium.
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column mobile={12} computer={8}>
            <Header as='h2' size='medium'>L'association : Do Ré Mi</Header>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam explicabo obcaecati omnis nam odio repellendus consequuntur tempore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam explicabo obcaecati omnis nam odio repellendus consequuntur tempore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam explicabo obcaecati omnis nam odio repellendus consequuntur tempore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam explicabo obcaecati omnis nam odio repellendus consequuntur tempore.        </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}
Activity.propTypes = {};

Activity.defaultProps = {};

export default React.memo(Activity);
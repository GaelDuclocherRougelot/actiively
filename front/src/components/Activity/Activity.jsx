import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import 'semantic-ui-css/semantic.min.css';
import {
  Image, Grid, Header, Container, Label, Icon, Button,
} from 'semantic-ui-react';

function Activity({
  token,
}) {
  const [activity, setActivity] = useState({});
  const [organism, setOrganism] = useState({});

  // Used params to add id to URL when sending an axios request
  let id = useParams();
  // Transformed result to number to match format set in the Back
  id = Number(id.id);

  // Request to API to get data for an Activity with an id in URL
  const fetchActivity = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/v1/activity/${id}`);
      // Update states with results
      setActivity(response.data);
      setOrganism(response.data.organism_infos);
      // console.log(response.data);
      // console.log(response.data.organism_infos);
    }
    catch (error) {
      console.log(error);
    }
  };

  // useEffect so that data is fetched on mount
  useEffect(
    () => {
      fetchActivity();
    },
    [],
  );

  // To identify the page we are currently on
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState('');

  // Give the URL to state whenever URL changes
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  const navigate = useNavigate();
  // Delete an activity feature
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:3001/api/v1/organism/activity/${id}/delete`,
        {
          headers: { authorization: token },
        },
      );
      // console.log('activité supprimée');
      navigate('/organism/activities');
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Grid centered>
        <Grid.Row>
          <Header as="h1">{activity.name}</Header>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column mobile={12} tablet={8} computer={4}>
            <Image src={activity.image_url} alt={activity.name} />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Container style={{ textAlign: 'center'}}>
              <br />
              {activity.address}
              <br />
              {activity.zip_code}
              {' '}
              {activity.city}
              <br />
              <br />
              <Label.Group color="teal">
                <Label as="a">
                  {activity.price}
                  {' '}
                  €
                  {' '}
                  {activity.price_type}
                </Label>
                <Label as="a">
                  {activity.gender}
                </Label>
                <Label as="a">
                  {activity.level}
                </Label>
                <Label as="a">
                  {activity.day}
                  {' '}
                  {activity.start_time}
                  {' '}
                  -
                  {' '}
                  {activity.end_time}
                </Label>
              </Label.Group>
              <Header as="h3" size="small">Informations de contact</Header>
              {organism.email}
              <Icon name="mail" />
              <br />
              {organism.phone_number}
              <Icon name="phone" />
            </Container>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column mobile={12} computer={8}>
            <Header as="h2" size="medium">L&apos;activité</Header>
            {activity.description}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column mobile={12} computer={8}>
            <Header as="h2" size="medium">
              L&apos;association :
              {' '}
              {organism.name}
            </Header>
            {organism.organism_description}
            {' '}
          </Grid.Column>
        </Grid.Row>
        {/* If on organism page, link redirects to private activity URL */}
        {currentPath === `/organism/activity/${activity.code_activity}` && (
        <Grid.Row>
          <Button basic color="red" type="submit" size="mini" onClick={handleSubmit}>Supprimer cette activité</Button>
        </Grid.Row>
        )}
      </Grid>
    </Container>
  );
}

Activity.propTypes = {
  token: PropTypes.string,
};

Activity.defaultProps = {
  token: '',
};

export default React.memo(Activity);

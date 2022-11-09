/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

function DayFilter({
  Lundii,
  Mardii,
  Mercredii,
  Jeudii,
  Vendredii,
  Samedii,
  Dimanchei,
}) {
  const [checkLundi, setCheckLundi] = useState('');
  const [checkMardi, setCheckMardi] = useState('');
  const [checkMercredi, setCheckMercredi] = useState('');
  const [checkJeudi, setCheckJeudi] = useState('');
  const [checkVendredi, setCheckVendredi] = useState('');
  const [checkSamedi, setCheckSamedi] = useState('');
  const [checkDimanche, setCheckDimanche] = useState('');

  
  Lundii(checkLundi);
  Mardii(checkMardi);

  Mercredii(checkMercredi);
  Jeudii(checkJeudi);
  Vendredii(checkVendredi);
  Samedii(checkSamedi);
  Dimanchei(checkDimanche);

  const handleChangeLundi = (e) => {
    if (e.target.checked) {
      setCheckLundi('Lundi');
    }
    else {
      setCheckLundi('');
    }
  };

  const handleChangeMardi = (e) => {
    if (e.target.checked) {
      setCheckMardi('Mardi');
    }
    else {
      setCheckMardi('');
    }
  };

  const handleChangeMercredi = (e) => {
    if (e.target.checked) {
      setCheckMercredi('Mercredi');
    }
    else {
      setCheckMercredi('');
    }
  };

  const handleChangeJeudi = (e) => {
    if (e.target.checked) {
      setCheckJeudi('Jeudi');
    }
    else {
      setCheckJeudi('');
    }
  };

  const handleChangeVendredi = (e) => {
    if (e.target.checked) {
      setCheckVendredi('Vendredi');
    }
    else {
      setCheckVendredi('');
    }
  };

  const handleChangeSamedi = (e) => {
    if (e.target.checked) {
      setCheckSamedi('Samedi');
    }
    else {
      setCheckSamedi('');
    }
  };

  const handleChangeDimanche = (e) => {
    if (e.target.checked) {
      setCheckDimanche('Dimanche');
    }
    else {
      setCheckDimanche('');
    }
  };

  return (
    <div>
      <h1 className="level-title">Jours de disponibilité</h1>

      <div className="level-container">
        <form>
          <div className="cat action">
            <label>
              <input
                type="checkbox"
                value="1"
                id="opt-in"
                onChange={handleChangeLundi}
              />
              <span>Lundi</span>
            </label>
          </div>
        </form>

        <div className="cat action">
          <label>
            <input
              type="checkbox"
              value="1"
              id="opt-in"
              onChange={handleChangeMardi}
            />
            <span>Mardi</span>
          </label>
        </div>

        <div className="cat action">
          <label>
            <input
              type="checkbox"
              value="1"
              id="opt-in"
              onChange={handleChangeMercredi}
            />
            <span>Mercredi</span>
          </label>
        </div>
        <div className="cat action">
          <label>
            <input
              type="checkbox"
              value="1"
              id="opt-in"
              onChange={handleChangeJeudi}
            />
            <span>Jeudi</span>
          </label>
        </div>
        <div className="cat action">
          <label>
            <input
              type="checkbox"
              value="1"
              id="opt-in"
              onChange={handleChangeVendredi}
            />
            <span>Vendredi</span>
          </label>
        </div>

        <div className="cat action">
          <label>
            <input
              type="checkbox"
              value="1"
              id="opt-in"
              onChange={handleChangeSamedi}
            />
            <span>Samedi</span>
          </label>
        </div>
        <div className="cat action">
          <label>
            <input
              type="checkbox"
              value="1"
              id="opt-in"
              onChange={handleChangeDimanche}
            />
            <span>Dimanche</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default React.memo(DayFilter);

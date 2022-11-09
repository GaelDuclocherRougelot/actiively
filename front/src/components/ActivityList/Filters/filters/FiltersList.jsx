import React from 'react';
import DayFilter from '../aloneFilter/DayFilter';
import LevelFilter from '../aloneFilter/LevelFilter';
import GenderFilter from '../aloneFilter/GenderFilter';
import './filtersStyles.scss';

function FiltersList({
  Lundi,
  Mardi,
  Mercredi,
  Jeudi,
  Vendredi,
  Samedi,
  Dimanche,
  firstLevel,
  secondFilter,
  thirdFilter,
}) {
  const handleCheckLundi = (checkLundi) => {
    Lundi(checkLundi);
  };
  const handleCheckMardi = (checkMardi) => {
    Mardi(checkMardi);
  };
  const handleCheckMercredi = (checkMercredi) => {
    Mercredi(checkMercredi);
  };
  const handleCheckJeudi = (checkJeudi) => {
    Jeudi(checkJeudi);
  };
  const handleCheckVendredi = (checkVendredi) => {
    Vendredi(checkVendredi);
  };
  const handleCheckSamedi = (checkSamedi) => {
    Samedi(checkSamedi);
  };
  const handleCheckDimanche = (checkDimanche) => {
    Dimanche(checkDimanche);
  };

  const handleFirstFilter = (checkFirstLevel) => {
    firstLevel(checkFirstLevel);
  };
  const handleSecondFilter = (checkSecondLevel) => {
    secondFilter(checkSecondLevel);
  };
  const handleThirdFilter = (checkThirdLevel) => {
    thirdFilter(checkThirdLevel);
  };

  return (
    <div className="filters-container">
      <button type="button" className="filters-styles">Filtres</button>
      <DayFilter
        Lundii={handleCheckLundi}
        Mardii={handleCheckMardi}
        Mercredii={handleCheckMercredi}
        Jeudii={handleCheckJeudi}
        Vendredii={handleCheckVendredi}
        Samedii={handleCheckSamedi}
        Dimanchei={handleCheckDimanche}
      />
      <LevelFilter
        firstLevel={handleFirstFilter}
        secondFilter={handleSecondFilter}
        thirdFilter={handleThirdFilter}

      />
      <GenderFilter />
    </div>
  );
}

export default React.memo(FiltersList);

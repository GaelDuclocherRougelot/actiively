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
}) {
  const handleCheckLundi = (checkLundi) => { Lundi(checkLundi) }
  const handleCheckMardi = (checkMardi) => {Mardi(checkMardi)}
  const handleCheckMercredi = (checkMercredi) => {Mercredi(checkMercredi)}
  const handleCheckJeudi = (checkJeudi) => {Jeudi(checkJeudi)}
  const handleCheckVendredi = (checkVendredi) => {Vendredi(checkVendredi)}
  const handleCheckSamedi = (checkSamedi) => {Samedi(checkSamedi)}
  const handleCheckDimanche = (checkDimanche) => {Dimanche(checkDimanche)}



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
      <LevelFilter />
      <GenderFilter />
    </div>
  );
}

export default React.memo(FiltersList);

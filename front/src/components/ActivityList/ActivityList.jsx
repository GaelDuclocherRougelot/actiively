import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FiltersList from './Filters/filters/FiltersList';
import PostsList from './Posts/Posts/PostsList';

import './activityListStyles.css';

// je veux faire un traitement avec props recu results et
// et j'envoie le resultat de ma function, comment
// je peux utiliser ma props ici

function ActivityList({
  results,
}) {
  const [LundiCheked, setLundiCheked] = useState('')
  const [MardiCheked, setMardiCheked] = useState('')
  const [MercrediCheked, setMercrediCheked] = useState('')
  const [JeudiCheked, setJeudiCheked] = useState('')
  const [VendrediCheked, setVendrediCheked] = useState('')
  const [SamediCheked, setSamediCheked] = useState('')
  const [DimancheCheked, setDimancheCheked] = useState('')
  
  const [checkFirstLevel, setCheckFirstLevel] = useState('');
  const [checkSecondLevel, setCheckSecondtLevel] = useState('');
  const [checkThirdLevel, setCeckThirdLevel] = useState('');
  console.log("ici",checkFirstLevel)
  console.log("ici",checkSecondLevel)
  console.log("ici",checkThirdLevel)


  const handleLundiFilter = (checkLundi) => {setLundiCheked(checkLundi)};
  const handleMardiFilter = (checkMardi) => {setMardiCheked(checkMardi)}; 
  const handleMercrediFilter = (checkMercredi) => {setMercrediCheked(checkMercredi)};
  const handleJeudiFilter = (checkJeudi) => {setJeudiCheked(checkJeudi)}; 
  const handleVendrediFilter = (checkVendredi) => {setVendrediCheked(checkVendredi)}; 
  const handleSamediFilter = (checkSamedi) => {setSamediCheked(checkSamedi)}; 
  const handleDimancheFilter = (checkDimanche) => {setDimancheCheked(checkDimanche)}; 

  const handleFirstFilter = (checkFirstLevel) => {setCheckFirstLevel(checkFirstLevel)}; 
  const handleSecondFilter = (heckSecondLeve) => {setCheckSecondtLevel(heckSecondLeve)}; 
  const handleThirdFilter = (checkThirdLevel) => {setCeckThirdLevel(checkThirdLevel)}; 
  const arr = results;
  let Jours1 = LundiCheked
  let Jours2 = MardiCheked
  let Jours3 = MercrediCheked
  let Jours4 = JeudiCheked
  let Jours5 = VendrediCheked
  let Jours6 = SamediCheked
  let Jours7 = DimancheCheked 
  let Gendre1 = "" 
  let Gendre2 = "" 
  let Gendre3 = "" 
  let Niveau1 = ""
  let Niveau2 = ""
  let Niveau3 = ""

  let result = data(arr);
  console.log("verifier les données", result)


  function data (table) {
  let rightData
  let isdayfiltrenotactive =  (
Jours1 === "" && 
Jours2 === "" && 
Jours3 === "" &&  
Jours4 === "" && 
Jours5 === "" &&  
Jours6 === "" && 
Jours7 === "" 
);

let gendrefiltrenotactive = (
Gendre1 === "" && 
Gendre2 === "" && 
Gendre3 === "" 
)
let levelfiltrenotactive = 
(
Niveau1 === "" && 
Niveau2 === "" && 
Niveau3 === ""
)

rightData = table.filter(function (el)
{
let isvalid = (isdayfiltrenotactive ||(
el.day === Jours1 || 
el.day === Jours2 ||
el.day === Jours3 || 
el.day === Jours4 || 
el.day === Jours5 || 
el.day === Jours6 || 
el.day === Jours7 
))
&&
(gendrefiltrenotactive ||(
el.Gendre === Gendre1 ||
el.Gendre === Gendre2 ||
el.Gendre === Gendre3 
))
&&
(levelfiltrenotactive ||(
el.level === Niveau1 ||
el.level === Niveau2 ||
el.level === Niveau3
))
return isvalid;
}
);
return rightData;
console.log(rightData)
}


  return (
    <div>
      <div className="container-activity">
        <FiltersList 
        Lundi = {handleLundiFilter}
        Mardi = {handleMardiFilter}
        Mercredi = {handleMercrediFilter}
        Jeudi = {handleJeudiFilter}
        Vendredi = {handleVendrediFilter}
        Samedi = {handleSamediFilter}
        Dimanche = {handleDimancheFilter}
        firstLevel={handleFirstFilter}
        secondFilter={handleSecondFilter}
        thirdFilter={handleThirdFilter}
        />
        <PostsList
          results={result}
        />
      </div>
    </div>
  );
}

ActivityList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    zip_code: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    price_type: PropTypes.string.isRequired,
    organismName: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default React.memo(ActivityList);

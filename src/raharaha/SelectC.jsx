import Select from 'react-select';
import mambra from '../../data/mambra.json';
import sampana from './../../data/sampana.json';

function SelectC({ andraikitra, name, handleSelectChange }) {
  //construire un nouveau objet avec mambra 
  const mambraOptions = mambra.map(m => ({
    value: m.id,
    label: m.prenom
  }))

  const sampanaOptions = sampana.map(m => ({
    value: m.id,
    label: m.name
  }))
  const andrFampaherezana = [13];

  const options = andrFampaherezana.includes(parseInt(andraikitra)) ? sampanaOptions : mambraOptions;

  return (
    <>
      <Select
        options={options}
        name={name}
        onChange={handleSelectChange}
        value=""
      />
    </>
  )
}

export default SelectC
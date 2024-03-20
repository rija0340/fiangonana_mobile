import Select from 'react-select';


function SelectC({ options, name, handleSelectChange,defaultValue, }) {

  return (
    <>
      <Select
        options={options}
        name={name}
        onChange={handleSelectChange}
        defaultValue={defaultValue}
      />
    </>
  )
}

export default SelectC
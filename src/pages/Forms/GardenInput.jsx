const GardenInput = ({ form, handleChange }) => {
  return (
    <>
      <label htmlFor="name">Name</label>
      <input
        value={form.name ? form.name : ''} onChange={handleChange} id="name" name="name" type="text" placeholder="Name" autoComplete="off" required
      />
      <label htmlFor="garden_description">Description</label>
      <input
        value={form.garden_description ? form.garden_description : ''} onChange={handleChange} id="garden_description" name="garden_description" type="text" placeholder="Description" autoComplete="off" required
      />
      <label htmlFor="garden_type">Type</label>
      <select name="garden_type" onChange={handleChange} required>
        <option value="Outdoor">Outdoor</option>
        <option value="Indoor">Indoor</option>
      </select>
    </>
  );
}

export default GardenInput;
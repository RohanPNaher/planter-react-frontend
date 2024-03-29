import styles from './GardenForm.module.css'

const GardenInput = ({ form, handleChange }) => {
  return (
    <>
      <div className={styles.inputContainer}>
        <label htmlFor="name" className={styles.label}>Name</label>
        <input
          value={form.name ? form.name : ''} onChange={handleChange} id="name" name="name" type="text" placeholder="Name" autoComplete="off" required
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="garden_description" className={styles.label}>Description</label>
        <input
          value={form.garden_description ? form.garden_description : ''} onChange={handleChange} id="garden_description" name="garden_description" type="text" placeholder="Description" autoComplete="off" required
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="garden_type" className={styles.label}>Type</label>
        <select name="garden_type" onChange={handleChange} value={form.garden_type ? form.garden_type : ''} required>
          <option value="Outdoor">Outdoor</option>
          <option value="Indoor">Indoor</option>
        </select>
      </div>
    </>
  );
}

export default GardenInput;
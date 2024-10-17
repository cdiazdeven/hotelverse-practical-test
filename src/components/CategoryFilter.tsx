import { useAppContext } from '..//context/AppContext';

const CategoryFilter = () => {

    const { category, loadingError, setCategory, setLoading } = useAppContext();

    const setCategoryAction = (category: string) => {
      setLoading(true)
      setCategory(category)
    }

    return (
        <select
          className="form-select"
          value={category}
          onChange={(e) => setCategoryAction(e.target.value)}
          disabled={loadingError}
        >
          <option value="technology">Technology</option>
          <option value="sports">Sports</option>
          <option value="economy">Economy</option>
          <option value="dogs">Dogs</option>
          <option value="cuba">Cuba</option>
        </select>
    )       
    
}

export default CategoryFilter
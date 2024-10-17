
import { useAppContext } from "../context/AppContext";
import { ButtonPropType } from "../types/ButtonPropType";

const ButtonComponent = ( { resetNewsQuantity, buttonText }  : ButtonPropType ) => {

    const { page, loading, loadingError, setPage, setLoading } = useAppContext();

    const onButtonClick = () => {

        setLoading(true)

        if(resetNewsQuantity)
            setPage(1)
        else
            setPage(page + 1)

    }

    return (
        <>
            <button
                className="btn btn-warning"
                disabled={loading}
                onClick={onButtonClick}
            >
                {loading ? 'Loading news...' : `${buttonText}`}
                {loading && (
                    <span
                        className="spinner-border spinner-border-sm ms-2"
                        role="status"
                        aria-hidden="true"
                    >
                    </span>
                )}
            </button>    
        </>
    )
}

export default ButtonComponent
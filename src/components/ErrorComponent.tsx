import { useAppContext } from '../context/AppContext';
import styles from '../../styles/Error.module.css';
import ButtonComponent from './ButtonComponent';

const ErrorComponent = () => {
    const { loadingErrorMessage } = useAppContext();

    return (
        <div className={styles.errorContainer}>
            <div className={styles.errorImage}></div>
            <p className={styles.errorMessage}>{loadingErrorMessage}</p>
            <div>
            <ButtonComponent resetNewsQuantity={true} buttonText={'Fix issue...'} />
            </div>
        </div>
    );
}

export default ErrorComponent;

import { useAppContext } from "../context/AppContext";

const styles = {
    loaderContainer: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      zIndex: 9999, // Asegura que el loader esté por encima del contenido
    },
    loader: {
      width: '50px',
      height: '50px',
      border: '5px solid #f3f3f3',
      borderTop: '5px solid #3498db',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
    },
    text: {
      marginTop: '20px',
      color: '#fff',
      fontSize: '18px',
    },
  };

const LoaderComponent = () => {

    const { loading } = useAppContext();

    if (!loading) return null;

    return (
        <div style={styles.loaderContainer}>

            <div style={styles.loader}></div>
        
        </div>
    );

}

export default LoaderComponent
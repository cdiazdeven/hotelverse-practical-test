
import Image from 'next/image';
import { NewsDetailProps } from '../types/NewsType';

const ImageComponent = ({ newsDetail } : NewsDetailProps) => {

    const { urlToImage, title } = newsDetail

    return (
        <div style={{ position: 'relative', width: '100%', height: '200px' }}>
            <Image
                src={urlToImage}
                alt={title}
                fill={true} // Esta es la propiedad que sustituye layout="responsive"
                style={{ objectFit: 'cover' }} // Para que la imagen se ajuste al contenedor
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
    )
}

export default ImageComponent
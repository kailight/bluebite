import '../Card.scss'
import './Image.scss'

interface ImageComponentProps {
    src: string,
    alt: string
}

export default function Image(props:ImageComponentProps) {
    console.info('props', props);

    return (
        <div className="card image" style={{ backgroundImage: `url(${props.src})` }}></div>
    );
}

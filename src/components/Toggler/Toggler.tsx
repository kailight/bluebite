import '../Card.scss'
import './Toggler.scss'


interface TogglerComponentProps {
    name  : string,
    value : 'show'|'hide'
}

import EyeOpenImage from 'src/icons/eye-white.svg'
import EyeClosedImage from 'src/icons/eye-slash-white.svg'

const icon2Image = {
    show: EyeOpenImage,
    hide: EyeClosedImage
}

export default function Toggler(props:TogglerComponentProps) {
    console.info('props', props);

    const capitalize = (str:string) => {
        const arr = str.split("");
        arr[0] = arr[0].toLocaleUpperCase();
        return arr.join('');
    }

    return (
        <div className="card toggler">
            <div className="action">{capitalize(props.value)}</div>
            <div className="icon">
                <img src={icon2Image[props.value]} />
            </div>
        </div>
    );
}

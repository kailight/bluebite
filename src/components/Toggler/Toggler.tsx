import '../Card.scss'
import './Toggler.scss'

import EyeOpenImage from 'src/icons/eye-white.svg'
import EyeClosedImage from 'src/icons/eye-slash-white.svg'

interface TogglerComponentProps {
    variable    : string,
    value       : 'show'|'hide'
    onToggle    : (propName:string, newValue:string) => {}
}

const icon2Image = {
    show: EyeOpenImage,
    hide: EyeClosedImage
}

export default function Toggler(props:TogglerComponentProps) {
    console.info('Toggler props', props);

    const capitalize = (str:string) => {
        const arr = str.split("");
        arr[0] = arr[0].toLocaleUpperCase();
        return arr.join('');
    }

    const onToggle = () => {
        let propName = props.variable
        let newValue

        if (props.value === 'show') {
            newValue = 'hide'
        }
        if (props.value === 'hide') {
            newValue = 'show'
        }

        props.onToggle(propName, newValue || '')

    }

    return (
        <div className="card toggler" onClick={() => onToggle()}>
            <div className="action">{capitalize(props.value)}</div>
            <div className="icon">
                <img src={icon2Image[props.value]} />
            </div>
        </div>
    );
}

import '../Card.scss'
import './Toggler.scss'

import EyeOpenImage from 'src/icons/eye-white.svg'
import EyeClosedImage from 'src/icons/eye-slash-white.svg'
import useVariables from "../../composables/useVariables";

interface TogglerComponentProps {
    variable    : string,
    value       : 'show'|'hide'
}

const icon2Image = {
    show: EyeOpenImage,
    hide: EyeClosedImage
}

export default function Toggler(props:TogglerComponentProps) {
    console.info('Toggler props', props);

    const { variables, setVariable } = useVariables()

    const capitalize = (str:string) => {
        const arr = str.split("");
        arr[0] = arr[0].toLocaleUpperCase();
        return arr.join('');
    }

    const onToggle = () => {
        console.info('onToggle()', props.value);

        let propName = props.variable
        let newValue = props.value

        if (!newValue) {
            console.error('Variable has no value')
            return
        }

        setVariable(propName, newValue)

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

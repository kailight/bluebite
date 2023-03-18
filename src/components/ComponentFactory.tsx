import Image        from "src/components/Image/Image";
import Weather      from "src/components/Weather/Weather";
import Toggler      from "src/components/Toggler/Toggler";
import Condition    from "src/components/Condition/Condition";

import { IComponentListItem } from "../types";

const componentType2Component = {
    image       : Image,
    weather     : Weather,
    button      : Toggler,
    condition   : Condition
}

const ComponentFactory:(config:any) => JSX.Element = (config:IComponentListItem ) => {
    let Component = componentType2Component[config.type];

    return (
        <Component { ...config.options } />
    )
}

export default ComponentFactory

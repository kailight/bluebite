import ComponentList from "../ComponentList";

interface ConditionComponentProps {
    options: {
        variable: string,
        value: string
    }
    children: string
}

import ComponentFactory from "src/components/ComponentFactory";


import useList from 'src/composables/useList'

export default function Condition(props:ConditionComponentProps) {
    console.info('props', props);

    const ConditionalList = () => {
        let condition = true
        if (condition) {
            return (
                ComponentList(props)
            )
        }
        return (
            <></>
        )
    }

    // <ConditionalList />

    return (
        <div>Condition</div>
    );
}

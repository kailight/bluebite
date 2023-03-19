import ComponentList from "../ComponentList";

interface ConditionComponentProps {
    options: {
        variable: string,
        value: string
    }
    children: number
}

import ComponentFactory from "src/components/ComponentFactory";


import useList from 'src/composables/useList'

export default function Condition(props:ConditionComponentProps) {
    console.info('Condition.props', props);

    const ConditionalList = () => {
        let condition = true

        if (!condition) {
            return (
                <div>Condition is not met</div>
            )
        }

        return (
            <ComponentList id={props.children}></ComponentList>
        )

    }

    // <ConditionalList />

    return (
        <div>Condition</div>
    );
}

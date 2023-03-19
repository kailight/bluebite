import ComponentList from "src/components/ComponentList";
import useCondition from "../../composables/useCondition";

interface ConditionComponentProps {
    variable: string,
    value: string
    children: number
}



export default function Condition(props:ConditionComponentProps) {
    console.info('Condition.props', props);

    const conditionIsMet = useCondition({ name: props.variable, value: props.value })
    console.info('conditionIsMet', conditionIsMet);

    const ConditionalList = () => {
        let condition = true

        if (!conditionIsMet) {
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
        <ConditionalList />
    );
}

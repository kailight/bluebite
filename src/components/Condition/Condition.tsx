interface ConditionComponentProps {
    options: {
        variable: string,
        value: string
    }
    children: string
}

export default function Condition(props:ConditionComponentProps) {
    console.info('props', props);

    return (
        <div className="condition">{props.options}</div>
    );
}

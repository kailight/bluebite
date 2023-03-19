import {
    IComponentListItem
} from "src/types";

import ComponentFactory from "src/components/ComponentFactory";
import useStore from "src/composables/useStore"
import useList from "src/composables/useList"
import useComponent from "src/composables/useComponent"
import useCondition from "src/composables/useCondition"

interface ComponentListProps {
    id : number
}

export default function ComponentList(props:ComponentListProps) {
    console.info('ComponentList props', props);

    const { lists } = useStore()
    console.info('here', lists);

    const list = useList(props.id)

    if (!lists) {
        return (<div>Nothing found</div>)
    }

    const componentIds = list.components

    const components:Array<IComponentListItem> = []
    componentIds.forEach( (componentId:number) => {
        const component = useComponent(componentId)
        components.push(component)
    })

    console.info('ComponentList.components', components);

    return (
        <>
            {
                components.map( (component:IComponentListItem, i:number) => {
                    return (
                        <div key={i}>{JSON.stringify(component)}</div>
                        // <ComponentFactory type={component.type} options={component.options} key={i} />
                    )
                })
            }
        </>
    );

}

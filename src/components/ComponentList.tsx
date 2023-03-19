import {
    IComponentListItem
} from "src/types";

import ComponentFactory from "src/components/ComponentFactory";
import useStore from "src/composables/useStore"
import useList from "src/composables/useList"
import useComponentsByIds from "src/composables/useComponentsByIds";

interface ComponentListProps {
    id : number
}

export default function ComponentList(props:ComponentListProps) {
    console.info('ComponentList props', props);

    const { lists } = useStore()
    console.info('here', lists);

    const list = useList(props.id)

    const componentIds:Array<number> = Array.isArray(list.components) ? list.components : [list.components]

    const components:Array<IComponentListItem> = useComponentsByIds(componentIds)

    console.info('ComponentList.components', components);

    if (!lists) {
        return (
            <div>Nothing found</div>
        )
    }

    return (
        <>
            {
                components.map( (component:IComponentListItem, i:number) => {
                    return (
                        // <div key={i}>{JSON.stringify(component)}</div>
                        <ComponentFactory type={component.type} options={component.options} children={component.children} key={i} />
                    )
                })
            }
        </>
    );

}

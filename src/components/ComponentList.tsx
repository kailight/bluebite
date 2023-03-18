import {
    IComponentListItem
} from "src/types";

import ComponentFactory from "src/components/ComponentFactory";
import useList from "src/composables/useList"
import { useStore } from "src/store";
import useStore2 from "src/composables/useStore"

interface ComponentListProps {
    id : number
}

export default function ComponentList(props:ComponentListProps) {
    console.info('ComponentList props', props);

    const [lists] = useStore('lists')
    const list = lists.find( (list:any) => list.id === props.id )
    // const list = useList(props.id)
    console.info('list', list);
    const components = list.components

    console.info('ComponentList.components');

    return (
        <>
            {
                components.map( (component:any, i:number) => {
                    return (
                        <div>{JSON.stringify(list)}</div>
                        // <ComponentFactory type={component.type} options={component.options} key={i} />
                    )
                })
            }
        </>
    );

}

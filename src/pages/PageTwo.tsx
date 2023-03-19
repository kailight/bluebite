import 'src/pages/Page.scss'
import { useEffect, useState } from "react";

import ComponentList from "../components/ComponentList";

import type {
    IComponentTree,
    IComponentList,
    IComponentListItem,
    IList,
    IVariable,
    IComponent,
    IData
} from 'src/types/index'

// import useLists from "src/composables/useLists";
// import useComponents from "src/composables/useComponents"
// import useVariables from "src/composables/useVariables"
// import useStore from "src/composables/useStore"
// import useStore2 from "src/composables/useStore2"
import useStore from "src/composables/useStore"

// import { getItem } from "src/store";

export default function PageTwo() {

    // https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component
    let isMounted = true

    const url = 'http://localhost:3030/page/page-two'

    // let { _, setVariables } = useStore2()
    const {
        variables,
        setVariables,
        lists,
        setLists,
        components,
        setComponents
    } = useStore()


    const toggleVariable = (variableName:string, variableValue: string) => {
        console.info('toggleVariable()', variableName, variableValue);

        variables?.forEach( (variable:any) => {
            if (variable.name === variableName) {
                variable.value = variableValue
            }
        })

        setVariables(variables)

    }

    const setData = () => {
        console.info('buildComponentsTree()');

        /*
        data.variables?.forEach( (variable:Variable) => {
            const componentFactoryConfig:ComponentListItem = {
                type: 'toggler',
                options: {
                    name: variable.name,
                    value: variable.value
                }
            }
            componentFactoryConfig.options.onToggle = toggleVariable
            componentListConfig.push(componentFactoryConfig)
        })
        */

        const componentTree:IComponentTree = []

        /*
        lists.forEach( (list:IList) => {
            console.info('list', list);

            const componentList:IComponentList = {} as any
            componentList.id = list.id
            componentList.components = []


            list.components.forEach( ( componentId:number ) => {
                const componentData = data.components.find( (c:any) => c.id === componentId )
                const componentFactoryConfig = {
                    type: componentData?.type,
                    options: componentData?.options
                }
                console.info(componentFactoryConfig.type)
                if (componentFactoryConfig.type === 'button') {
                    componentFactoryConfig.options.onToggle = toggleVariable
                }
                componentList.components.push(componentFactoryConfig as any)
            })
            componentTree.push(componentList)
        })
        */

        // setComponentTree(componentTree)

        // console.info('before SetLists', data.lists);
        // setLists(data.lists)
        // console.info('after SetLists', lists);
        console.info('before setVariables', variables);

        // setVariables(data.variables)
        // return componentListConfig

    }

    const [enabledLists, setEnabledLists] = useState([] as Array<any>)

    useEffect( () => {
        let newValue:Array<any> = []

        if (!lists.length) {
            return () => {}
        }

        const conditionalListsIds:Array<number> = []
        components.forEach( ( component:IComponent ) => {
            if (component.type === 'condition') {
                conditionalListsIds.push(component.children)
            }
        })
        const unconditionalLists = lists.filter( (list:IList) => {
            return !conditionalListsIds.includes(list.id)
        })

        setEnabledLists( unconditionalLists )
        console.info('enabledLists', enabledLists);

    }, [lists, components] )



    useEffect( () => {

        (async () => {
            const response = await fetch(url)

            let responseData:any
            if (response.ok) {
                responseData = await response.json()
                console.info('data from backend', responseData.data);
            }
            if (!responseData) {
                console.error('Failed to fetch data from backend')
                return
            }
            const data = responseData.data
            data.variables.forEach( (variable:IVariable) => {
                variable.value = variable.initialValue
            })

            if (isMounted) {
                setComponents(data.components)
                setVariables(data.variables)
                setLists(data.lists)
            }
            return () => { isMounted = false }

        })()
    }, [])



    return (
        <div className="page">
            {
                enabledLists?.map( (list:IComponentList, i:number) => {
                    return (
                        <ComponentList id={list.id} key={i}></ComponentList>
                    )
                })
            }
        </div>
    );
}

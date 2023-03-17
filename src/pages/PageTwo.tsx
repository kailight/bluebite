import 'src/pages/Page.scss'
import { useEffect, useState } from "react";

import Image from 'src/components/Image/Image'
import Weather from 'src/components/Weather/Weather'
import Toggler from 'src/components/Toggler/Toggler'
import Condition from 'src/components/Condition/Condition'

interface List {
    id: any
    components: any
}

interface Variable {
    name        : string // "show weather"
    type        : string // "string"
    initialValue: string // "show"|"hide"
    value       : string
}

interface Component {
    id      : number
    type    : string
    options : any
}

interface Data {
    lists       : Array<List>
    variables   ?: Array<Variable>
    components  : Array<Component>
}

interface ComponentList extends Array<ComponentListItem> {}

interface ComponentListItem {
    type: 'image'|'weather'|'button'|'condition'
    options: any
}




export default function PageTwo() {

    // https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component
    let isMounted = true

    const url = 'http://localhost:3030/page/page-two'


    const [data, setData] = useState<Data>({} as Data )
    const [componentList, setComponentList] = useState<ComponentList>([])

    const components = {
        image       : Image,
        weather     : Weather,
        button      : Toggler,
        condition   : Condition
    }

    const ComponentFactory:(config:any) => JSX.Element = (config:ComponentListItem ) => {
        let Component = components[config.type];

        return (
            <Component { ...config.options } />
        )
    }

    const toggleVariable = (variableName:string, variableValue: string) => {
        console.info('toggleVariable()', variableName, variableValue);

        const newData = Object.assign({}, data)

        newData?.variables?.forEach( (variable:any) => {
            if (variable.name === variableName) {
                variable.value = variableValue
            }
        })

        console.info('newData', newData)
        setData(newData)

    }

    const buildComponentsList = () => {
        console.info('buildComponentsList()', data);

        if (!data.components) return

        let componentsIds:Array<any> = []
        const componentListConfig:ComponentList = []

        data.lists.forEach( (list:List) => {
            console.info('list', list);
            componentsIds = componentsIds.concat(list.components)
        })

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

        componentsIds.forEach( ( componentId:number ) => {
            const componentData = data.components.find( (c:any) => c.id === componentId )
            const componentFactoryConfig = {
                type: componentData?.type,
                options: componentData?.options
            }
            console.info(componentFactoryConfig.type)
            if (componentFactoryConfig.type === 'button') {
                componentFactoryConfig.options.onToggle = toggleVariable
            }
            componentListConfig.push(componentFactoryConfig as any)
        })

        console.info('componentListConfig', componentListConfig);
        setComponentList(componentListConfig)

        // return componentListConfig
    }

    useEffect( () => {
        if (isMounted) {
            buildComponentsList()
        }
        return () => { isMounted = false }
    },[data])


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
            data.variables.forEach( (variable:Variable) => {
                variable.value = variable.initialValue
            })
            if (isMounted) {
                setData(data)
            }

            return () => { isMounted = false }

        })()
    }, [])



    return (
        <div className="page">
            {
                componentList.map( (component:any, i:number) => {
                    return (<ComponentFactory type={component.type} options={component.options} key={i} />)
                })
            }
        </div>
    );
}

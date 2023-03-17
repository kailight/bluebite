import 'src/pages/Page.scss'
import { useEffect, useState } from "react";

import Image from 'src/components/Image/Image'
import Weather from 'src/components/Weather/Weather'

export default function PageTwo() {

    // https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component
    let isMounted = true

    const url = 'http://localhost:3030/page/page-two'

    interface List {
        id: any
        components: any
    }
    interface Data {
        lists: Array<List>
    }
    interface ComponentList extends Array<any> {}

    const [data,setData] = useState<Data>({ lists:[] } )
    const [componentList, setComponentList] = useState<ComponentList>([])

    const components = {
        image: Image,
        weather: Weather
    }

    const ComponentFactory:(config:any) => JSX.Element = (config:{ type : 'image'|'weather', options: any } ) => {
        let Component = components[config.type];
        return (
            <Component { ...config.options } />
        )
    }

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

            let componentsIds:Array<any> = []
            data.lists.forEach( (list:List) => {
                componentsIds = list.components
                console.info(list);
            })

            let componentListConfig:Array<any> = []
            componentsIds.forEach( ( componentId:number ) => {
                const componentData = data.components.find( (c:any) => c.id === componentId )
                const componentFactoryConfig = {
                    type: componentData.type,
                    options: componentData.options
                }
                componentListConfig.push(componentFactoryConfig)
            })
            console.info(componentListConfig);
            if (isMounted) {
                setComponentList(componentListConfig)
            }
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

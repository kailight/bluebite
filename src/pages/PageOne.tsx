import CardOne from 'src/components/CardOne'
import CardTwo from 'src/components/CardTwo'
import 'src/pages/Page.scss'
import { useEffect, useState } from "react";

import Weather from 'src/components/Weather/Weather'

export default function PageOne() {

    const url = 'http://localhost:3030/page/page-one'

    interface List {
        id: any
        components: any
    }
    interface Data {
        lists: Array<List>
    }

    const [data,setData] = useState<Data>({ lists:[] } )
    const [strData,setStrData] = useState<string>('no data' )

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
            setData(responseData.data)
            setStrData( JSON.stringify(responseData.data,null, '  ') )

        })()

    }, [])

    return (
        <div className="page">
            <CardOne></CardOne>
            <CardTwo></CardTwo>
            {
                data?.lists?.[0]?.components?.forEach( (list:any) => {
                    <code style={{ whiteSpace: 'pre' }}>{list._id}</code>
                })
            }
            <code style={{ whiteSpace: 'pre' }}>{strData}</code>
        </div>
    );
}

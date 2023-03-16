import CardOne from 'src/components/CardOne'
import CardTwo from 'src/components/CardTwo'
import 'src/pages/Page.scss'
import {useEffect} from "react";

export default function PageOne() {

    const url = 'http://localhost:3030/page/page-one'

    useEffect( () => {
        let data
        (async () => {
            const response = await fetch(url)
            if (response.ok) {
                data = await response.json()
                console.info('data from backend', data);
            }
        })()
        if (!data) {
            console.error('Failed to fetch data from backend')
        }
    })

    return (
        <div className="page">
            <CardOne></CardOne>
            <CardTwo></CardTwo>
        </div>
    );
}

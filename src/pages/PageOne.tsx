import CardOne from 'src/components/CardOne'
import CardTwo from 'src/components/CardTwo'
import 'src/pages/Page.scss'

export default function PageOne() {
    return (
        <div className="page">
            <CardOne></CardOne>
            <CardTwo></CardTwo>
        </div>
    );
}

import { useState } from "react";

const useLists = () => {
    console.info('useLists()');

    const [lists, setLists] = useState([] as any)
    return [lists, setLists]

}

export default useLists

import { useState, useEffect } from 'react'
import Dispatcher from './dispatcher'

let store:any = {}
const dispatcher = new Dispatcher()

function createStore(value:any) {
    store = value
}

function getItem(key:string) {
    return store[key]
}

function setItem(key:string, value:any) {
    store[key] = value
    dispatcher.emit('data', store)
}


function useStore(key:string) {
    const [value, setData] = useState(store[key])

    useEffect(() => {

        const fn = dispatcher.on('data', (data:any)=>{
            let value = data?.[key] || undefined

            // console.info('test', key, value);
            if (value == undefined) {
                return
            }

            if (Array.isArray(value)){
                setData(value)
            } else if (typeof(value) == 'object') {
                setData({...value})
            } else {
                setData(value)
            }
        })

        return ()=>{
            dispatcher.off('data', fn)
        }

    })

    return [value, (v:any)=>{ console.info('setting',v); setItem(key, v)}]
}

export {
    getItem,
    useStore,
    setItem,
    createStore
}

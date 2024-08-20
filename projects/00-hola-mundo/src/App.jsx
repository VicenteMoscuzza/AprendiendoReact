import { useState } from 'react'
export function App () {

    const [name, setName] = useState('Vicho')

    return(
        <div>
            <div>{name}</div>
            <button onClick={() => setName('Carlos')}>
                Cambio nombre
            </button>
        </div>
    )
}
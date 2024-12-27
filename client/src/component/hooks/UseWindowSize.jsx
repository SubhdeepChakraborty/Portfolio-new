import React, {useEffect, useState} from 'react'

const UseWindowSize = () => {
    function getSize () {
        return {
            width: window.innerWidth,
            height : window.innerHeight
        }
    }

    const [ windowSize, setWindowSize ] = useState( getSize )
    
    useEffect( () => {
        function handleSize () {
            setWindowSize(getSize())
        }
        window.addEventListener( "resize", handleSize );
        return () => window.removeEventListener("resize", handleSize)
    })

  return windowSize
}

export default UseWindowSize
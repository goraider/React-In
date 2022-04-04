import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({ x:0, y:0 });
    const { x, y } = coords;

    useEffect(() => {

        const mouseMove = (e) => {

            const coords = { x: e.x, y: e.y };
            setCoords( coords );
            console.log(' :D ');
        }

        window.addEventListener('mouseover', mouseMove);
        console.log('componente montado');

        // window.addEventListener('mouseover', (e) => {

        //     const coors = { x: e.x, y: e.y };
        //     console.log(coors);
        // });

      return () => {
          window.removeEventListener('mouseover', mouseMove);
        console.log('componente desmontado!!!');
      }
    }, [])
    
    
  
    return (
    <h3>eres genial!!</h3>,
    <p>
        X: { x } Y: { y }
    </p>
  )
}

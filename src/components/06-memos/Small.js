import React from 'react'

export const Small = React.memo(({ value }) => {

    console.log('Me Volvi a llamar :/');

  return (
    <small>{ value }</small>
  )
});

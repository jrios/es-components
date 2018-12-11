# useValidators

This is a hook that allows the definition of validators that can be used to run against a provided value. 

# Installation

### npm
```bash
npm install @es-hooks/useValidators
```

### yarn
```bash
yarn add @es-hooks/useValidators
```

# Usage

```jsx
import React, { useContext } from 'react'
import useValidators from '@es-hooks/useValidators'

function MyComponent(props) {
  function isOverThreeCharacters(value) {
    return value.length > 3 ? true : false
  }

  const [ValidationContext, invokeValidators] = useValidators([isOverThreeCharacters])
  const results = useContext(ValidationContext)

  const isValid = results.every(result => result !== false)

  return (
    <>
      <label htmlFor="firstName">First name</label>
      <input type="text" id="firstName" onChange={e => invokeValidators(e.target.value)} />

      <h1>{isValid ? Valid! : Invalid!}</h1>
    </>
  )
}
```

Validation functions are required to operate on a single value and return a result. There are no limitations on what type of value is being validated or what the validation function returns. The `ValidationContext` that is returned from `useValidators` will have the most update to date validation results.
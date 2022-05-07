#  React-Firbase clone 

live demo : https://c-linkedin.netlify.app/

- ReactJS
- Styled components

## Redux standard approch steps

1. install dependencies
2. create redux folder in src
3. create actions,constants,reducers folders in redux.
1. create store file in redux
2. create actionTypes file in constants and export an object that has all action type constants
2. create actionUser file in actions folder and export actiontypes with type nad payload
1. create userReducer in reducer folder along with index.js
    2. in userReducer set the initial state and return payloade state accordingly
    2. in index.js combine reducer
1. in index.js add provider
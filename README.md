# ECO WEB PROJECT
Required Stack
- React.js
- Redux
- React Router
- TDD and functional Tests
- Webpack

## Development Scripts

### Install dependencies
To install all the needed dependencies, use:
```
npm install
```

### Start server
To start the static server, use:
```
npm start
```
*Go to http://localhost:8080 to view the communications page.*

To start in development (watch) mode, use:
```
npm run dev
```
*Go to http://localhost:8080 to view the communications page and http://localhost:6006 to view the storybook.*

### Tests
To perform all the tests (using flowtype and jest), use:
```
npm test
```

### Builds
To build the code (using Webpack) into a single javascript file, use:
```
npm run build
```

__NOTE:__ Before committing changes to git, make sure the tests pass and build is completed.

## Source Code Directory Structure
### Root directory structure
```
client.js
[connecting code…].js        store.js, router.js
pages/
[features…]/                 communication/
[common…]/                   user/, logbook/
core/
utils/
```

__NOTE:__ Only import code from lower lines in the list

### Sub directory structure
#### index.js

The connecting code, which the has ALL exports for the current directory.

__NOTE:__

* The reducers should be exported as an object (so “reducer names” are paired with the correct reducer)
* The root sagas should be exported as a single generator function
* All other exports should be separate named exports

#### components/

The pure react components that contains ALL layout and styling not in the semantic-ui css.

__NOTE:__ All react components should be pure functions.

#### containers/

The HOCs that gets ALL data that is needed by Components but not passed in from its parents.

__NOTE:__ The following dependencies should be used to create the HOCs

* [recompose](https://github.com/acdlite/recompose/blob/master/docs/API.md): Helper functions for creating HOC's
* [react-redux](https://github.com/reactjs/react-redux/blob/master/docs/api.md#api): HOC to connect the redux store to a component's props
* [react-component-queries](https://github.com/ctrlplusb/react-component-queries#api): HOC to add size info (for responsive styling) to a component's props

#### reducers/

The redux reducer functions that performs ALL atomic updates to the state.

__NOTE:__ Defines “reducer name” constants, that will be given to the combineReducers function

#### sagas/

The generator functions that performs ALL [async] sequences of actions.

__NOTE:__ Defines “action type” constants, that the saga listen for

#### actions/

The action creator functions that performs ALL validation and parsing.

__NOTE:__ Defines “action type” constants, that the actions perform

#### selectors/

The functions that get part of the stores state and performs ALL formatting (state data->string|number).

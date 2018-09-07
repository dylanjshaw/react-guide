- you can create components:
	- as "stateless, functional" components
		- use as OFTEN AS POSSIBLE
		- minimizes the number of components that can manage state --> more scalable
		- you can still access state through props
	- as "stateful containers" by extending the Component class
		- have access to lifecycle hooks
		- get props by default from Component class

- Component lifecycle
	- available only in stateful components
	- usually defined at the top of the component

	*** Build Lifecycle ***
	1. constructor
		- react passes props that component receives to the constructor
		- must call super(props) if you use the constructor method
		- you can define state object inside OR outside of the constructor
		- NEVER reach out to another web server inside constructor
	2. componentWillMount
		- rarely used
		- can update state
		- NO server requests here
	3. render 
		- prepare and structure JSX code
		- shows the parent component which child components it needs to render
		- [[[ components render child components before their DidMount methods are called ]]]
	4. componentDidMount
		- indicates that the component was rendered
		- DON'T update state --> would trigger a re-render
	
	*** EXTERNAL Update Lifecycle ***
	1. componentWillReceiveProps(nextProps)
		- use to synchronize state and props
	2. shouldComponentUpdate(nextProps, nextState)
		- returning false prevents updating of component
		- use in cases where a component should only change if one prop changes
	3. componentWillUpdate(nextProps, nextState)
		- synchronize state and props
	4. render
		- tells react the result of the update
		- structure JSX accordingly
	5. componentDidUpdate
	
	*** INTERNAL Update Lifecycle ***
	1. shouldComponentUpdate(nextProps, nextState)
		- returning false prevents updating of component
		- use in cases where a component should only change if one prop changes
		- not calling this when it should be called causes react to re-render another copy of newDOM to compare to oldDOM
		- use a [[[ PureComponent ]]] to auto-detect differences in props/state before rendering instead of this method
			- checking parent containers means you don't need to check the children of those parents
	3. componentWillUpdate(nextProps, nextState)
		- synchronize state and props
	4. render
		- tells react the result of the update
		- structure JSX accordingly
	5. componentDidUpdate

*** React render() creates newDOM and compares to oldDOM; if newDOM is different, it updates realDOM where changes were detected ***






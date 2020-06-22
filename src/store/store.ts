export class Store {
    private subscribers: Function[];
    private reducers: { [key: string]: Function};
    private state: { [key: string]: any};
  
    constructor(reducers ={}, initialState = {}) {
      this.reducers = reducers;
      this.state = this.reduce(initialState, {});
    }
  
    get value() {
      return this.state;
    }
  
    dispatch(action) {
      this.state = this.reduce(this.state, action);
      
    }

    private reduce(state, action){
        const newState = {};
        for (const prop in this.reducers) {
            //will create a new obj with todo prop on every key on our reducers
            newState[prop] = this.reducers[prop](state[prop], action);
        }
        return newState;
    }
  }
  
  
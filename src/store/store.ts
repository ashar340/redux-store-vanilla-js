export class Store {
    private subscribers: Function[];
    private reducers: { [key: string]: Function};
    private state: { [key: string]: any};
  
    constructor(reducers ={}, initialState = {}) {
      this.reducers = reducers;
      this.state = initialState;
    }
  
    get value() {
      return this.state;
    }
  
    dispatch(action) {
      this.state = {
        ...this.state = this.reduce(this.state, this.action);
      };
      private reduce(state, action)
    }
  }
  
  
// A reducer takes in two things:
// 1. the action (information about what happened)
// 2. copy of current state

// input action and copy of store
// do some updates
// return new store

export default function posts(state = [], action) {
    console.log('the post will change');
    console.log(state, action);
    return state;
}
import { addUser } from '../Actions/index'
import { createStore } from 'redux'
import { List } from "../src/List.jsx";
import { Create } from "../src/Create.jsx";

import Create from '../src/Create'

const defaultState = {
    currentView: < List />
};

function counter(state = defaultState, action) {
    if (typeof state === 'undefined') {
        return ["Tomodachi"]
    }
    switch (action.type) {
        case 'ADD_FRIEND':
            return < Create />
        default:
            return state
    }
}






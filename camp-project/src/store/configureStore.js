import rootReducer from "./rootReducer";
import { legacy_createStore } from "redux";

export function configureStore() {
    return legacy_createStore(rootReducer)
}
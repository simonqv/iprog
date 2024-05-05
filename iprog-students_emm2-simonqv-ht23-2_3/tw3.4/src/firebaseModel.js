import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set} from "/src/teacherFirebase.js";
import { getMenuDetails } from "./dishSource";

// Add relevant imports here 
import firebaseConfig from "/src/firebaseConfig.js";

// Initialise firebase app, database, ref
// TODO
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)

//  PATH is the “root” Firebase path. NN is your TW2_TW3 group number
const PATH = "dinnerModel35"

const rf = ref(db, PATH)

function compareIntsCB(a, b) {
    return a.id - b.id
}


function modelToPersistence(model){
    return {
        nbrGuests: model.numberOfGuests,
        dishIDs: model.dishes.sort(compareIntsCB).map(getDishIDCB),
        currentDishId: model.currentDish,
    }

    function getDishIDCB(dish) {
        return dish.id
    }
}

// persistenceToModel needs to initiate a getMenuDetails promise (to convert IDs back to dishes). 
// It must return that promise, for the caller to have the opportunity to wait (.then(ACB)) until the dishes are retrieved.
function persistenceToModel(data, model){
    model.setNumberOfGuests(data?.nbrGuests || 2);
    model.setCurrentDish(data?.currentDishId || null);
   
    return getMenuDetails(data?.dishIDs || []).then(saveToModelACB)

    function saveToModelACB(dishes) {
        model.dishes = dishes
    }
}

function saveToFirebase(model){
    if (model.ready) {
        set(rf, modelToPersistence(model))
    }
}

function readFromFirebase(model){
    model.ready = false;
    return get(rf)
                .then(function convertACB(snapshot) {
                    return persistenceToModel(snapshot.val(), model)
                })
                .then(function setModelReadyACB() {
                    model.ready = true;
                })
}
function connectToFirebase(model, watchFunction){
    readFromFirebase(model)
    watchFunction(checkChangeACB, updateFirebaseACB)

    function checkChangeACB() {
        return [model.numberOfGuests, model.currentDish, model.dishes]
    }

    function updateFirebaseACB() {
        saveToFirebase(model)
    }
}

export {modelToPersistence, persistenceToModel, saveToFirebase, readFromFirebase}

export default connectToFirebase;

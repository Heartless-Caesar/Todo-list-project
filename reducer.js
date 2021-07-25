export const reducer = (state,action) => {
  switch(action.type){

   case "ADD_ITEM":
   const newEntry=[...state.people,action.payload]
       return {
      ...state,
      people : newEntry,
      showModal : true,
      modalContent : "Item Added",
    }

    case "NO_VALUE":
        return {
        ...state,
        showModal : true,
        modalContent : "Please enter a value",
      }

    case "REMOVE_MODAL":
        return {
      ...state,
      showModal : true,
      modalContent : "Removed",
    }
    case "REMOVE_ITEM":
        const newPerson = state.people.filter((person) => person.id !== action.payload)
        return {
            ...state,
            people : newPerson,
            showModal: true,
        }
    case "REMOVE_ALL":
        return {
            ...state,
            people : [],
            showModal : true,
            modalContent : "Removed all"
        }
    default: console.log(state)
  }
}

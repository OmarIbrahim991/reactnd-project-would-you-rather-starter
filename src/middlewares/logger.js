const logger = (store) => (next) => (action) => {
    next(action)
    console.group("Action: ", action.type)
        console.log("Dispatched Action: ", action)
        console.log("New State: ", store.getState())
    console.groupEnd()
}

export default logger

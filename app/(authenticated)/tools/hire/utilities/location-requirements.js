// This Function Adds a Location requirement.

// PARAMETERS
//  We take in the type parameter: This can Either be Country or State
// And we take in th requirements parameter: this is the list of either the state requirements or country requirements
// The setRequirement will be the method that updates the requirements list
// The newValue that should be added
// toast... So we'll be able to throw an error
// clearNewValueField: this should be a method that allows us to reset the value of the newValue to be added

export function addLocationRequirement(
    type,
    requirements,
    setReQuirements,
    newValue,
    clearNewValueField,
    notifyUser,
) {
    // We will use this variable to Keep track of the new value that should be added to the list
    let checker = true

    // If the new Value is an empty string, throw an error
    if (newValue.trim() === '') {
        notifyUser('error', type + ' Field is empty!')
        return
    }

    // Otherwise, check if the new value already exists
    requirements.forEach(item => {
        if (item.name === newValue) {
            checker = false
        }
    })

    // If the new Value doesn't exist, add it to the list. Otherwise, throw an error
    if (checker) {
        setReQuirements(prev => [...prev, { '@type': type, name: newValue }])
        clearNewValueField('')
    } else {
        clearNewValueField('')
        notifyUser('error', type + ' Already Exist')
    }
}

// This Function Removes a Location requirement.

//  PARAMETERS
// We take in the value that should be removed
// The setRequirement will be the method that updates the requirements list
// toast... So we'll be able to throw an error

export function removeLocationRequirement(notifyUser, value, setReQuirements) {
    setReQuirements(prev => prev.filter(item => item.name !== value))

    notifyUser('success', 'Deleted Successfully')
}

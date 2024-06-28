// This Function Removes a Location requirement.

//  PARAMETERS
// We take in the value that should be removed
// The setRequirement will be the method that updates the requirements list
// toast... So we'll be able to throw an error

export function removeLocationRequirement(value, setReQuirements, toast) {
    setReQuirements(prev => prev.filter(item => item.name !== value))

    toast.success('Deleted Successfully', {
        position: 'top-right',
        autoClose: 3000,
    })
}

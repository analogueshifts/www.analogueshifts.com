// Toggle Sidebar Drawer
export const toggleDrawer = (setMobileOpen, mobileOpen) => {
    if (mobileOpen) {
        setMobileOpen(prevExpenses => {
            return !prevExpenses
        })
    } else {
        setMobileOpen(prevExpenses => {
            return !prevExpenses
        })
    }
}

// Handle Resize
export const handleResize = setMobileOpen => {
    // Handle Resize Event Listener
    const sideBar = document.querySelector('.sidebar')
    window.addEventListener('resize', () => {
        if (window.innerWidth < 768) {
            sideBar.classList.add('hide')
        }
    })
    if (window.innerWidth < 768) {
        sideBar.classList.add('hide')
    }
    window.addEventListener('resize', () => {
        setMobileOpen(false)
    })
    return window.removeEventListener('resize', () => {
        setMobileOpen(false)
    })
}

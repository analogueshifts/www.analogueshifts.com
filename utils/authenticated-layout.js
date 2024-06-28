// Toggle Sidebar Drawer
export const toggleDrawer = (
    setNavAnimationClass,
    setMobileOpen,
    mobileOpen,
) => {
    if (mobileOpen) {
        setNavAnimationClass('')
        setMobileOpen(prevExpenses => {
            return !prevExpenses
        })
    } else {
        setNavAnimationClass('open')
        setMobileOpen(prevExpenses => {
            return !prevExpenses
        })
    }
}

// Handle Resize
export const handleResize = (setMobileOpen, setNavAnimationClass) => {
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
        setNavAnimationClass('')
    })
    return window.removeEventListener('resize', () => {
        setMobileOpen(false)
        setNavAnimationClass('')
    })
}

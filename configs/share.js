export const share = async (title, path, notifyUser, text) => {
    if (typeof window === 'undefined') return

    const url = path ?? window.location.href
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)

    if (navigator.share && isMobile) {
        try {
            await navigator.share({
                title: title ?? '',
                text: text ?? '',
                url,
            })
            return
        } catch (err) {
            if (err.name !== 'AbortError') console.log(err)
        }
    }

    try {
        await navigator.clipboard.writeText(url)
        notifyUser('success', 'Link copied to clipboard', 'right')
    } catch {
        notifyUser('error', 'Could not share link', 'right')
    }
}

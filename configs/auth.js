const AUTH_BASE_URL =
    process.env.NEXT_PUBLIC_AUTH_URL || 'https://auth.analogueshifts.app'

const SITE_BUILD_UUID = process.env.NEXT_PUBLIC_SITE_BUILD_UUID

const buildAuthUrl = path => {
    const authUrl = new URL(path, AUTH_BASE_URL)

    if (SITE_BUILD_UUID) {
        authUrl.searchParams.set('app', SITE_BUILD_UUID)
    }

    return authUrl.toString()
}

export const getAuthAppUrl = () => buildAuthUrl('')

export const getAuthRegisterUrl = () => buildAuthUrl('/register')
import { errorToast } from '../error-toast'
import { clearUserSession } from '../clear-user-session'

// Upload File To The Database
export const uploadFile = async (
    value,
    user,
    setFileUploading,
    setLogoFileUrl,
    setLogoFile,
) => {
    const url = process.env.NEXT_PUBLIC_BACKEND_URL + '/upload'
    const axios = require('axios')
    const formData = new FormData()
    formData.append('upload', value)
    formData.append('type', 'image')
    let config = {
        method: 'POST',
        url: url,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer ' + user.token,
        },
        data: formData,
    }

    setFileUploading(true)
    try {
        const data = await axios.request(config)
        setLogoFileUrl(data.data.data.full_path)
        setLogoFile(value)
        setFileUploading(false)
    } catch (error) {
        setFileUploading(false)
        errorToast(
            'Error Uploading Logo',
            error?.response?.data?.message || error.message || '',
        )
        if (error?.response?.status === 401) {
            clearUserSession()
        }
    }
}

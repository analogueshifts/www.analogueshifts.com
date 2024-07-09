import { toast } from 'react-toastify'

export const successToast = (title, description) => {
    toast.success(
        <div>
            <h4>{title}</h4>
            <p>
                <small>{description}</small>
            </p>
        </div>,
        { position: 'top-right' },
    )
}

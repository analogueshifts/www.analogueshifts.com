import { toast } from 'sonner'

export const customToast = (title, description, buttonLabel, action) => {
    toast(title, {
        description: description,
        actionButtonStyle: {
            backgroundColor: '#E5BE39',
        },
        dismissible: false,
        duration: Infinity,
        action: {
            label: buttonLabel,
            onClick: action,
        },
    })
}

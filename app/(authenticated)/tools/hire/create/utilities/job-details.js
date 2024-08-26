'use client'
import Cookies from 'js-cookie'

export const handleSubmit = (
    salaryValue,
    employmentType,
    directApply,
    externalApplicationURL,
    internalApplicationURL,
    status,
    salaryCurrency,
    salaryUnitText,
    router,
    notifyUser,
) => {
    // If salary is not a valid number, Throw an Error
    if (isNaN(salaryValue)) {
        notifyUser('error', 'Salary value must be a valid number')
        return
    }

    // Otherwise, store the Form data in Cookies and navigate to the next page
    let storedData = Cookies.get('jobPostData')
    let jobDetailsData = {
        employmentType: employmentType,
        apply:
            directApply === 'true'
                ? externalApplicationURL
                : 'https://forms.analogueshifts.com/forms/show/' +
                  internalApplicationURL,
        directApply: directApply,
        status: status === 'Offline' ? '0' : '1',
        salaryCurrency: salaryCurrency,
        salaryValue: salaryValue,
        salaryUnitText: salaryUnitText,
    }

    if (storedData) {
        let existingItem = JSON.parse(storedData)
        Cookies.set(
            'jobPostData',
            JSON.stringify({
                ...existingItem,
                jobDetails: jobDetailsData,
            }),
        )
    }
    router.push('/tools/hire/create/job-location')
}

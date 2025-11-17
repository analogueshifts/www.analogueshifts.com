export function prefill(data, setData, easy_apply) {
    let structure = {
        stepOne: {
            title: data?.title,
            employmentType: data?.employmentType || 'FULL_TIME',
            identifierName: data?.identifier?.name,
            identifierValue: data?.identifier?.value,
            validThrough: data?.validThrough,
            streetAddress: data?.jobLocation?.address?.streetAddress,
            state: data?.jobLocation?.address?.addressLocality,
            region: data?.jobLocation?.address?.addressRegion,
            country: data?.jobLocation?.address?.addressCountry,
            postalCode: data?.jobLocation?.address?.postalCode,
            locationType:
                data?.jobLocation?.address?.jobLocationType || 'TELECOMMUTE',
            applicantLocationRequirementsCountry: data?.applicantLocationRequirements
                ? [
                    ...data.applicantLocationRequirements
                        ?.filter(item => item['@type'] === 'country')
                        ?.map(item => item?.name),
                ]
                : [],
            applicantLocationRequirementsState: data?.applicantLocationRequirements
                ? [
                    ...data.applicantLocationRequirements
                        ?.filter(item => item['@type'] === 'state')
                        ?.map(item => item?.name),
                ]
                : [],
        },
        stepTwo: {
            jobStatus: data?.status,
            salaryCurrency: data?.baseSalary?.currency,
            salaryValue: data?.baseSalary?.value?.value,
            salaryUnitText: data?.baseSalary?.value?.unitText,
            directApply: data?.apply === 'easyApply' ? 'easy' : data?.directApply,
            apply: data?.apply === 'easyApply' ? '' : data?.apply,
            jobDescription: data?.description,
            screeningQuestions: easy_apply?.questions?.map(item => {
                return {
                    id: item.id,
                    question: item.question,
                    uuid: item.uuid
                }
            }) || [{
                id: '1',
                question: '',
            },],
        },
        stepThree: {
            companyName: data?.hiringOrganization?.name,
            companyWebsite: data?.hiringOrganization?.sameAs,
            companyLogo: data?.hiringOrganization?.logo,
        },
        id: data?.id,
    }
    setData(structure)
    localStorage.setItem('editJob', JSON.stringify(structure))
}

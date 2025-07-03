export const handleUpload = (setLoading, router, createJob, newJob) => {
    // Arrange The Data Structure
    let data = {
        title: newJob?.stepOne?.title,
        description: newJob?.stepTwo?.jobDescription,
        identifier: {
            '@type': 'PropertyValue',
            name: newJob?.stepOne?.identifierName || '',
            value: newJob?.stepOne?.identifierValue || '',
        },
        validThrough: newJob?.stepOne?.validThrough,
        employmentType: newJob?.stepOne?.employmentType,
        hiringOrganization: {
            '@type': 'Organization',
            name: newJob?.stepThree?.companyName,
            sameAs: newJob?.stepThree?.companyWebsite,
            logo: newJob?.stepThree?.companyLogo,
        },
        jobLocation: {
            '@type': 'Place',
            address: {
                '@type': 'PostalAddress',
                streetAddress: newJob?.stepOne?.streetAddress || null,
                addressLocality: newJob?.stepOne?.state || null,
                addressRegion: newJob?.stepOne?.region || null,
                postalCode: newJob?.stepOne?.postalCode || null,
                addressCountry: newJob?.stepOne?.country || null,
            },
        },
        jobLocationType: newJob?.stepOne?.locationType,
        applicantLocationRequirements: [
            ...newJob?.stepOne?.applicantLocationRequirementsState?.map(
                item => {
                    return { '@type': 'state', name: item }
                },
            ),
            ...newJob?.stepOne?.applicantLocationRequirementsCountry?.map(
                item => {
                    return { '@type': 'country', name: item }
                },
            ),
        ],
        baseSalary: {
            '@type': 'MonetaryAmount',
            currency: newJob?.stepTwo?.salaryCurrency,
            value: {
                '@type': 'QuantitativeValue',
                value: newJob?.stepTwo?.salaryValue,
                unitText: newJob?.stepTwo?.salaryUnitText,
            },
        },
        apply: newJob?.stepTwo?.apply,
        directApply: newJob?.stepTwo?.directApply,
        status: newJob?.stepTwo?.jobStatus,
    }

    // Call the Create Function with the data as Parameter
    createJob({ setLoading, data, router })
}

export const handleUpload = (setLoading, router, createJob, newJob) => {
    console.log(newJob)

    // Arrange The Data Structure
    // let data = {
    //     title: existingItem.jobInformation.title,
    //     description: existingItem.jobInformation.description,
    //     identifier: {
    //         '@type': 'PropertyValue',
    //         name: existingItem.jobInformation.identifierName,
    //         value: existingItem.jobInformation.identifierValue,
    //     },
    //     validThrough: existingItem.jobInformation.validThrough,
    //     employmentType: existingItem.jobDetails.employmentType,
    //     hiringOrganization: {
    //         '@type': 'Organization',
    //         name: organizationName,
    //         sameAs: organizationUrl,
    //         logo: logoUrl,
    //     },
    //     jobLocation: {
    //         '@type': 'Place',
    //         address: {
    //             '@type': 'PostalAddress',
    //             streetAddress: existingItem.jobLocation.streetAddress,
    //             addressLocality: existingItem.jobLocation.addressLocality,
    //             addressRegion: existingItem.jobLocation.addressRegion,
    //             postalCode: existingItem.jobLocation.postalCode,
    //             addressCountry: existingItem.jobLocation.addressCountry,
    //         },
    //     },
    //     jobLocationType: existingItem.jobLocation.jobLocationType,
    //     applicantLocationRequirements: [
    //         ...existingItem.jobLocation.stateRequirements,
    //         ...existingItem.jobLocation.countryRequirements,
    //     ],
    //     baseSalary: {
    //         '@type': 'MonetaryAmount',
    //         currency: existingItem.jobDetails.salaryCurrency,
    //         value: {
    //             '@type': 'QuantitativeValue',
    //             value: existingItem.jobDetails.salaryValue,
    //             unitText: existingItem.jobDetails.salaryUnitText,
    //         },
    //     },
    //     apply: existingItem.jobDetails.apply,
    //     directApply: existingItem.jobDetails.directApply,
    //     status: existingItem.jobDetails.status,
    // }

    // Call the Create Function with the data as Parameter
    // createJob({ setLoading, data, router })
}

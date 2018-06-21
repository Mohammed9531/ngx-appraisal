export const EDUCATION: any = {
    questions: [
        {
            id: 1,
            key: 'Current Education Track',
            value: '',
            isRadio: true,
            radioOptions: [
                {
                    key: 'Yes',
                    value: ''
                },
                {
                    key: 'No',
                    value: ''
                }
            ],
            isInput: false,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: false,
            placeHolderValue: ''
        },
        {
            id: 2,
            key: 'Grade',
            value: '',
            isRadio: false,
            isInput: true,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: true,
            placeHolderValue: 'Grade'
        },
        {
            id: 3,
            key: 'Correct Grade for Age?',
            value: '',
            isRadio: true,
            radioOptions: [
                {
                    key: 'Yes',
                    value: ''
                },
                {
                    key: 'No',
                    value: ''
                }
            ],
            isInput: false,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: false,
            placeHolderValue: ''
        },
        {
            id: 4,
            key: 'If no, reason',
            value: '',
            isRadio: false,
            isInput: false,
            isTextbox: true,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: true,
            dependsOn: 3,
            hasPlaceholder: false,
            placeHolderValue: ''
        },
        {
            id: 5,
            key: 'Duel Enrollment?',
            value: '',
            isRadio: true,
            radioOptions: [
                {
                    key: 'Yes',
                    value: ''
                },
                {
                    key: 'No',
                    value: ''
                }
            ],
            isInput: false,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: false,
            placeHolderValue: ''
        },
        {
            id: 6,
            key: 'If yes, please explain:',
            value: '',
            isRadio: false,
            isInput: false,
            isTextbox: true,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: true,
            dependsOn: 5,
            hasPlaceholder: false,
            placeHolderValue: ''
        },
        {
            id: 7,
            key: 'GED?',
            value: '',
            isRadio: true,
            radioOptions: [
                {
                    key: 'Yes',
                    value: ''
                },
                {
                    key: 'No',
                    value: ''
                }
            ],
            isInput: false,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: false,
            placeHolderValue: ''
        },
        {
            id: 8,
            key: 'GED Progress',
            value: '',
            isRadio: false,
            isInput: false,
            isTextbox: true,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: false,
            placeHolderValue: ''
        },
        {
            id: 9,
            key: 'Expected Test Date',
            value: '',
            isRadio: false,
            isInput: false,
            isCheckbox: false,
            isDropdown: false,
            isDate: true,
            hasDependency: false,
            hasPlaceholder: true,
            placeHolderValue: 'mm/dd/yyy'
        },
        {
            id: 10,
            key: 'Vocatiional?',
            value: '',
            isRadio: true,
            radioOptions: [
                {
                    key: 'Yes',
                    value: ''
                },
                {
                    key: 'No',
                    value: ''
                }
            ],
            isInput: false,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: false,
            placeHolderValue: ''
        },
        {
            id: 11,
            key: 'Occupational Certificate?',
            value: '',
            isRadio: true,
            radioOptions: [
                {
                    key: 'Yes',
                    value: ''
                },
                {
                    key: 'No',
                    value: ''
                }
            ],
            isInput: false,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: false,
            placeHolderValue: ''
        },
        {
            id: 12,
            key: 'Post Secondary Education?',
            value: '',
            isRadio: true,
            radioOptions: [
                {
                    key: 'Yes',
                    value: ''
                },
                {
                    key: 'No',
                    value: ''
                }
            ],
            isInput: false,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: false,
            placeHolderValue: ''
        },
        {
            id: 13,
            key: 'Year',
            value: '',
            isRadio: false,
            isInput: true,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: true,
            placeHolderValue: 'Year'
        },
        {
            id: 14,
            key: 'Type?',
            value: '',
            isRadio: true,
            radioOptions: [
                {
                    key: 'Part-Time',
                    value: ''
                },
                {
                    key: 'Full-Time',
                    value: ''
                }
            ],
            isInput: false,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: false,
            placeHolderValue: ''
        },
        {
            id: 15,
            key: 'ETV?',
            value: '',
            isRadio: true,
            radioOptions: [
                {
                    key: 'Yes',
                    value: ''
                },
                {
                    key: 'No',
                    value: ''
                }
            ],
            isInput: false,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: false,
            placeHolderValue: ''
        },
        {
            id: 16,
            key: 'When did you last receive ETV funds',
            value: '',
            isRadio: false,
            isInput: false,
            isCheckbox: false,
            isDropdown: false,
            isDate: true,
            hasDependency: false,
            hasPlaceholder: true,
            placeHolderValue: 'mm/dd/yyy'
        },
        {
            id: 17,
            key: 'Where are you enrolled in an educational program?',
            value: '',
            isRadio: false,
            isInput: true,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: true,
            placeHolderValue: 'Where enrolled'
        },
        {
            id: 18,
            key: 'What is the highest level of education (18 or older)?',
            value: '',
            isRadio: true,
            radioOptions: [
                {
                    key: 'Some High School',
                    value: ''
                },
                {
                    key: 'Some Middle School',
                    value: ''
                },
                {
                    key: 'Diploma',
                    value: ''
                },
                {
                    key: 'GED',
                    value: ''
                },
                {
                    key: 'Certificate',
                    value: ''
                },
                {
                    key: 'Vocational training',
                    value: ''
                },
                {
                    key: 'Other',
                    value: ''
                }
            ],
            isInput: false,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: false,
            placeHolderValue: ''
        },
        {
            id: 19,
            key: 'What are your goals',
            value: '',
            isRadio: false,
            isInput: true,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: true,
            placeHolderValue: 'Goals'
        },
        {
            id: 20,
            key: 'Do you plan to attend a',
            value: '',
            isRadio: true,
            radioOptions: [
                {
                    key: 'Four Year Program',
                    value: ''
                },
                {
                    key: 'Two Year Program',
                    value: ''
                },
                {
                    key: 'Vocational Program',
                    value: ''
                },
                {
                    key: 'Military',
                    value: ''
                },
                {
                    key: 'Not Applicable',
                    value: ''
                },
                {
                    key: 'Other',
                    value: ''
                }
            ],
            isInput: false,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: false,
            placeHolderValue: ''
        },
        {
            id: 21,
            key: 'Expected area of study',
            value: '',
            isRadio: false,
            isInput: true,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: true,
            placeHolderValue: 'Expected area of study'
        }
    ]
};
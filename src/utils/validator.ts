import * as Yup from 'yup'

export const loginSchema = Yup.object({
  email: Yup.string()
    .email('Invalid Email')
    .required('Email is required'),

  password: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(12, 'Maximum 20 characters')
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/gm,
    //   'Password must contain at least 1 uppercase letter and 1 number',
    // )
    .required('Password is required'),
  rememberMe: Yup.boolean(),
})

export const registerSchema = Yup.object({
  email: Yup.string()
    .email('Invalid Email')
    .required('Email is required'),

  password: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(12, 'Maximum 20 characters')
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/gm,
    //   'Password must contain at least 1 uppercase letter and 1 number',
    // )
    .required('Password is required'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Password does not match')
    .required('Re-confirming password is required'),
})

export const profileSchema = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ0-9\s\-\/.]+$/, 'Please enter valid name')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid Email')
    .required('Email is required'),
})

export const changePasswordSchema = Yup.object({
  email: Yup.string()
    .email('Invalid Email')
    .required('Email is required'),
  oldPassword: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(12, 'Maximum 20 characters')
    .required('Old password is required'),
  newPassword: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(12, 'Maximum 20 characters')
    .required('New password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword')], 'Password does not match')
    .required('Re-confirming password is required'),
})

export const nameSchema = Yup.string()

export const emailSchema = Yup.string().email('Invalid Email').required('Email is required')

export const checkoutSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  companyName: Yup.string().nullable(),
  countryRegion: Yup.string().required('Country is required'),
  streetAddress: Yup.string().required('Street address is required'),
  state: Yup.string().required('State is required'),
  zipCode: Yup.string().required('Zip code is required'),
  phone: Yup.number().typeError('Price must be a number').required('Phone number is required'),
  emailAddress: Yup.string().email('Invalid Email').required('Email address is required'),
  note: Yup.string().nullable(),
  townCity: Yup.string().required('Town/City is required'),
})

const startDateSchema = Yup.date().required('Start Date is required')

const expirationDateSchema = Yup
  .date()
  .required('Expiration Date is required')
  .test(
    'expiration-date-after-start-date',
    'Expiration Date must be after Start Date',
    function (value) {
      const { startingDate } = this.parent
      if (!startingDate || !value)
        return true

      return new Date(value) > new Date(startingDate)
    },
  )

export const imageSchema = Yup
  .mixed()
  .test('fileFormat', 'Only image files are allowed', (value) => {
    if (value) {
      const file = value as File
      const supportedFormats = ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp']
      return supportedFormats.includes(file.name.split('.').pop()?.toLowerCase() || '')
    }
    return true
  })
  .test('fileSize', 'File size must be less than 3MB', (value) => {
    if (value) {
      const file = value as File
      return file.size <= 3 * 1024 * 1024
    }
    return true
  })

export const collectionSchema = Yup.object().shape({
  url: Yup.string().required('URL is required'),
  name: Yup.string().required('Name is required'),
  price: Yup.number().typeError('Price must be a number').required('Price is required'),
  logoImgUrl: imageSchema.required('Logo image is requied').nullable(),
  featureImgUrl: imageSchema.required('Feature image is requied').nullable(),
  coverImgUrl: imageSchema.required('Cover image is requied').nullable(),
  startingDate: startDateSchema,
  expirationDate: expirationDateSchema,
  categoryName: Yup.string().required('Category is required'),
  description: Yup.string().required('Description is required'),
})

export const nftSchema = Yup.object().shape({
  title: Yup.string().required('NFT Name is required'),
  imgUrl: imageSchema.required('Logo image is requied').nullable(),
  currentPrice: Yup.number().typeError('Price must be a number').required('Price is required'),
  startingDate: startDateSchema,
  expirationDate: expirationDateSchema,
  description: Yup.string().required('Description is required'),
  collectionId: Yup.string().required('Collection is required'),
})

export const contactSchema = Yup.object().shape({
  name: nameSchema.required('Name is required'),
  email: emailSchema.required('Email is required'),
  phone: Yup.number().typeError('Phone number must be a number').required('Phone number is required'),
  category: Yup.string().required('Category is required'),
  title: Yup.string().required('Title is required'),
  message: Yup.string().required('Message is required'),
  agreeTerms: Yup.boolean().required('The Terms and Conditions must be accepted.').oneOf([true], 'The Terms and Conditions must be accepted.'),
})


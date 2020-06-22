import * as Yup from 'yup'

const formSchema = Yup.object().shape({
    name: Yup
        .string()
        .min(6, "User's name requires at least 6 characters.")
        .required("Name is a required field!"),
    password: Yup
        .string()
        .min(6, "Password must be at least 6 characters long")
        .required("Password is a required field!")
})

export default formSchema
import React from "react"
import { connect } from "react-redux"
import { Formik, Field } from "formik"
import { Contact, photosIcons } from "../ProfHeadFuncComponent"
import * as yup from "yup"
import MyTextarea from "../../../common/FormsControl/MyTextarea"
import { updateProfInfo } from "../../../../redux/reducers/ProfileReducer"
import "./ProfHeadForm.scss"

import Checkbox from "../../../common/FormsControl/FormikCheckbox"

const FormContacts = ({
    contacts,
    className,
    contactClassName,
    values,
    errors,
    handleChange,
    handleBlur,
    touched,
}) => {
    return (
        <div class className={className}>
            {Object.keys(contacts)
                .filter((name) => name !== "website" && name !== "mainLink")
                .map((key) => {
                    return (
                        <div key={key}>
                            <Contact
                                className={contactClassName}
                                forForm={true}
                                icon={photosIcons[key]}
                                link={contacts[key]}
                                name={key}
                            >
                                <div class='prof-form-item__field'>
                                    <MyTextarea
                                        value={values.contacts[key]}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={errors[key]}
                                        touched={touched[key]}
                                        name={`contacts.${key}`}
                                        placeholder={`${key}`}
                                        isHorizontal={true}
                                        isInput={true}
                                    />
                                </div>
                            </Contact>
                        </div>
                    )
                })}
        </div>
    )
}

const ProfileHeadForm = (props) => {
    const {
        aboutMe,
        contacts,
        lookingForAJob,
        lookingForAJobDescription,
        fullName,
        onSave,
        userId,

        updateProfInfo,
    } = props

    const onSubmit = async (profInfo, userId) => {
        try {
            await updateProfInfo(profInfo, userId)

            onSave()
        } catch (error) {}
    }

    const URL =
        /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i

    const validationSchema = yup.object().shape({
        FullName: yup
            .string()
            .max(20, "Max length 20")
            .required("Name required!"),
        vk: yup.string().matches(URL, "Enter a valid url"),
        youtube: yup.string().matches(URL, "Enter a valid url"),
        facebook: yup.string().matches(URL, "Enter a valid url"),
        twitter: yup.string().matches(URL, "Enter a valid url"),
        github: yup.string().matches(URL, "Enter a valid url"),
        instagram: yup.string().matches(URL, "Enter a valid url"),
    })
    /**
 * "The AboutMe field is required. (AboutMe)"
1: "The LookingForAJobDescription field is required. (LookingForAJobDescription)"
2: "The FullName field is required. (FullName)"

 */
    return (
        <Formik
            initialValues={{
                mainLink: contacts.mainLink || "",
                website: contacts.website || "",
                FullName: fullName,
                AboutMe: aboutMe || "",
                lookingForAJob: lookingForAJob,
                LookingForAJobDescription: lookingForAJobDescription || "",

                contacts: {
                    vk: contacts["vk"] || "",
                    youtube: contacts["youtube"] || "",
                    facebook: contacts["facebook"] || "",
                    twitter: contacts["twitter"] || "",
                    github: contacts["github"] || "",
                    instagram: contacts["instagram"] || "",
                },
            }}
            validateOnBlur
            onSubmit={(values) => {
                let newValues = { ...values, userId }

                for (let key in newValues) {
                    if (newValues[key] === "") newValues[key] = null
                }

                for (let key in newValues.contacts) {
                    if (newValues.contacts[key] === "")
                        newValues.contacts[key] = null
                }

                onSubmit(newValues, userId)
            }}
            validationSchema={validationSchema}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                isValid,
                handleSubmit,
            }) => {
                return (
                    <form onSubmit={handleSubmit} class='profile-head-form'>
                        <div class='profile-head-form__fullname'>
                            <MyTextarea
                                error={errors.FullName}
                                touched={touched.FullName}
                                value={values.FullName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name='FullName'
                                placeholder='Fullname'
                                isInput={true}
                            />
                        </div>

                        <div class='profile-head-form__item prof-form-item'>
                            <b class='prof-form-item__title'>About me:</b>
                            <div class='prof-form-item__field'>
                                <MyTextarea
                                    value={values.AboutMe}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name='AboutMe'
                                    placeholder='About yourself'
                                />
                            </div>
                        </div>

                        <div class='profile-head-form__item prof-form-item'>
                            <b class='prof-form-item__title'>
                                Are you looking for a job now?
                            </b>

                            <Checkbox
                                className='prof-form-item__check-box'
                                name='lookingForAJob'
                            />
                        </div>
                        <div class='profile-head-form__item prof-form-item'>
                            <b class='prof-form-item__title'>About work: </b>
                            <div class='prof-form-item__field'>
                                <MyTextarea
                                    value={values.LookingForAJobDescription}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name='LookingForAJobDescription'
                                    placeholder='About your work'
                                />
                            </div>
                        </div>
                        <FormContacts
                            values={values}
                            errors={errors}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            touched={touched}
                            className={"prof-form-item__contacts"}
                            contactClassName={"prof-form-item__contact"}
                            contacts={contacts}
                        />

                        <div class='profile-head-form__item prof-form-item'>
                            <b class='prof-form-item__title'>My Website:</b>
                            <div class='prof-form-item__field'>
                                <MyTextarea
                                    value={values.website}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name='website'
                                    placeholder='My Website'
                                    isInput={true}
                                />
                            </div>
                        </div>

                        <div class='profile-head-form__item prof-form-item'>
                            <b class='prof-form-item__title'>Main link:</b>
                            <div class='prof-form-item__field'>
                                <MyTextarea
                                    value={values.mainLink}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name='mainLink'
                                    placeholder='Main link'
                                    isInput={true}
                                />
                            </div>
                        </div>
                        <button
                            disabled={!isValid}
                            type='submit'
                            class='profile-head-form__submit prof-head__edit-btn'
                        >
                            Save
                        </button>
                    </form>
                )
            }}
        </Formik>
    )
}

const mapStateToProps = (state) => ({})
export default connect(mapStateToProps, { updateProfInfo })(ProfileHeadForm)

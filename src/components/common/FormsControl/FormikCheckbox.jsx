import React from "react"
import { Field } from "formik"

export default function Checkbox({ name, className }) {
    return (
        <>
            <Field name={name}>
                {({ field }) => {
                    return (
                        <input
                            type="checkbox"
                            className={className}
                            checked={field.value}
                            {...field}
                        />
                    )
                }}
            </Field>
        </>
    )
}

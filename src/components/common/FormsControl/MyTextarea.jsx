import React from "react"
import "./MyTextarea.scss"

const MyTextarea = ({
    touched,
    error,
    isHorizontal = false,
    isInput = false,
    ...props
}) => {
    const hasError = touched && error

    return (
        <div class='my-textarea'>
            {isInput ? <input {...props} /> : <textarea {...props} />}

            {hasError && (
                <span
                    class={`my-textarea__error-${
                        isHorizontal ? "horizontal" : "vertical"
                    }`}
                >
                    {error}
                </span>
            )}
        </div>
    )
}

export default MyTextarea

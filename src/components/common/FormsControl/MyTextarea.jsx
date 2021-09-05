import React from "react";
import "./MyTextarea.scss";

const MyTextarea = ({ isHorizontal = false, isInput = false, meta, input, ...props }) => {
    console.log(meta);

    const hasError = meta.touched && meta.error;
    console.log("meta.touched", meta.touched);
    console.log("meta.error", meta.error);
    console.log("hasError ", hasError);
    return (
        <div class="my-textarea">
            {isInput ? (
                <input {...input} {...props} />
            ) : (
                <textarea {...input} {...props} />
            )}

            {hasError && (
                <span
                    class={`my-textarea__error-${
                        isHorizontal ? "horizontal" : "vertical"
                    }`}
                >
                    {meta.error}
                </span>
            )}
        </div>
    );
};

export default MyTextarea;

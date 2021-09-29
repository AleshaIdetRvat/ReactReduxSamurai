import React from "react";
import "./MyTextarea.scss";

const MyTextarea = ({
    touched,
    error,
    isHorizontal = false,
    isInput = false,
    ...props
}) => {
    // console.log(meta);
    // console.log("meta.touched", meta.touched);
    // console.log("meta.error", meta.error);
    // console.log("hasError ", hasError);
    const hasError = touched && error;

    return (
        <div class="my-textarea">
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
    );
};

// const MyTextarea = ({ isHorizontal = false, isInput = false, meta, input, ...props }) => {
//     // console.log(meta);
//     // console.log("meta.touched", meta.touched);
//     // console.log("meta.error", meta.error);
//     // console.log("hasError ", hasError);

//     const hasError = meta.touched && meta.error;

//     return (
//         <div class="my-textarea">
//             {isInput ? (
//                 <input {...input} {...props} />
//             ) : (
//                 <textarea {...input} {...props} />
//             )}

//             {hasError && (
//                 <span
//                     class={`my-textarea__error-${
//                         isHorizontal ? "horizontal" : "vertical"
//                     }`}
//                 >
//                     {meta.error}
//                 </span>
//             )}
//         </div>
//     );
// };

export default MyTextarea;

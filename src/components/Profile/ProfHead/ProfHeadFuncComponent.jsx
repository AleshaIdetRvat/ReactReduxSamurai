import React from "react";
import vk from "./img/vk.svg";
import youtube from "./img/youtube.svg";
import facebook from "./img/facebook.svg";
import twitter from "./img/twitter.svg";
import github from "./img/github.svg";
import instagram from "./img/instagram.svg";

import "./ProfHead.scss";

const ProfHeadProfHeadFuncComponent = (props) => {
    const [editMode, setEditMode] = React.useState(false);
    const [status, setStatus] = React.useState(props.status);

    React.useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const toggleStatusEditMode = () => {
        setEditMode(!editMode);
    };

    const inputChangedHandler = (event) => {
        setStatus(event.target.value);
    };

    const {
        aboutMe,
        contacts,
        lookingForAJob,
        lookingForAJobDescription,
        fullName,
        userId,
        photos,
        isAuth,
        isMyProfile,
        updateUserStatus,
    } = props;
    console.log(props);

    return (
        <div class="prof-head">
            <div class="prof-head__body">
                <div class="prof-head__image">
                    {photos ? <img src={photos.large} /> : ""}
                </div>
                <div class="prof-head__info">
                    <div class="prof-head__fullname">{fullName}</div>
                    <div onDoubleClick={toggleStatusEditMode} class="prof-head__about">
                        О себе:
                        {isMyProfile ? (
                            <div>
                                {editMode ? (
                                    <input
                                        autoFocus
                                        onFocus={(event) => {
                                            event.target.select();
                                        }}
                                        onBlur={() => {
                                            toggleStatusEditMode();
                                            updateUserStatus(status); //!!!!!!!!!
                                        }}
                                        value={status}
                                        onChange={inputChangedHandler}
                                        className="prof-head__about-input"
                                    />
                                ) : (
                                    <div class="prof-head__about-text">{status}</div>
                                )}
                            </div>
                        ) : (
                            <div class="prof-head__about-text">{aboutMe}</div>
                        )}
                    </div>
                    <div class="prof-head__look-job">
                        <div>Занятость: </div>
                        {lookingForAJob ? "Открыт для ваших предложений" : "Работаю"}
                        <div class="prof-head__look-job-desc">
                            {lookingForAJobDescription}
                        </div>
                    </div>

                    <div class="prof-head__contacts">
                        {contacts && contacts.vk ? (
                            <a
                                class="prof-head__contact"
                                target="_blank"
                                href={`${contacts.vk.substr(0, 4) == "http" ? "" : "//"}${
                                    contacts.vk
                                }`}
                            >
                                <img src={vk} alt="vk" />
                            </a>
                        ) : (
                            ""
                        )}
                        {contacts && contacts.facebook ? (
                            <a
                                class="prof-head__contact"
                                target="_blank"
                                href={`${
                                    contacts.facebook.substr(0, 4) == "http" ? "" : "//"
                                }${contacts.facebook}`}
                            >
                                <img src={facebook} alt="vk" />
                            </a>
                        ) : (
                            ""
                        )}
                        {contacts && contacts.twitter ? (
                            <a
                                class="prof-head__contact"
                                target="_blank"
                                href={`${
                                    contacts.twitter.substr(0, 4) == "http" ? "" : "//"
                                }${contacts.twitter}`}
                            >
                                <img src={twitter} alt="twitter" />
                            </a>
                        ) : (
                            ""
                        )}
                        {contacts && contacts.github ? (
                            <a
                                class="prof-head__contact"
                                target="_blank"
                                href={`${
                                    contacts.github.substr(0, 4) == "http" ? "" : "//"
                                }${contacts.github}`}
                            >
                                <img src={github} alt="github" />
                            </a>
                        ) : (
                            ""
                        )}
                        {contacts && contacts.youtube ? (
                            <a
                                class="prof-head__contact"
                                target="_blank"
                                href={`${
                                    contacts.youtube.substr(0, 4) == "http" ? "" : "//"
                                }${contacts.youtube}`}
                            >
                                <img src={youtube} alt="youtube" />
                            </a>
                        ) : (
                            ""
                        )}
                        {contacts && contacts.instagram ? (
                            <a
                                class="prof-head__contact"
                                target="_blank"
                                href={`${
                                    contacts.instagram.substr(0, 4) == "http" ? "" : "//"
                                }${contacts.instagram}`}
                            >
                                <img src={instagram} alt="instagram" />
                            </a>
                        ) : (
                            ""
                        )}
                    </div>

                    {contacts && contacts.website ? (
                        <div class="prof-head__my-site">
                            <a
                                class="prof-head__contact"
                                target="_blank"
                                href={`${contacts.website}`}
                            >
                                Мой Website
                            </a>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfHeadProfHeadFuncComponent;

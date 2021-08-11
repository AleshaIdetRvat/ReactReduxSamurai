import React from "react";
import vk from "./img/vk.svg";
import youtube from "./img/youtube.svg";
import facebook from "./img/facebook.svg";
import twitter from "./img/twitter.svg";
import github from "./img/github.svg";
import instagram from "./img/instagram.svg";

import "./ProfHead.scss";
import { NavLink } from "react-router-dom";

const ProfHead = ({
    aboutMe,
    contacts,
    lookingForAJob,
    lookingForAJobDescription,
    fullName,
    userId,
    photos,
}) => {
    return (
        <div class="prof-head">
            <div class="prof-head__body">
                <div class="prof-head__image">
                    {photos.large ? <img src={photos.large} /> : ""}
                </div>
                <div class="prof-head__info">
                    <div class="prof-head__fullname">{fullName}</div>
                    <div class="prof-head__about">
                        О себе:
                        <div class="prof-head__about-text">{aboutMe}</div>
                    </div>
                    <div class="prof-head__look-job">
                        <div>Занятость: </div>
                        {lookingForAJob ? "Открыт для ваших предложений" : "Работаю"}
                        <div class="prof-head__look-job-desc">
                            {lookingForAJobDescription}
                        </div>
                    </div>

                    <div class="prof-head__contacts">
                        {contacts.vk ? (
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
                        {contacts.facebook ? (
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
                        {contacts.twitter ? (
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
                        {contacts.github ? (
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
                        {contacts.youtube ? (
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
                        {contacts.instagram ? (
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

                    {contacts.website ? (
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

export default ProfHead;

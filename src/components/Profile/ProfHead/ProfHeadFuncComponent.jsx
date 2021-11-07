import React from "react"
import vk from "./img/vk.svg"
import youtube from "./img/youtube.svg"
import facebook from "./img/facebook.svg"
import twitter from "./img/twitter.svg"
import github from "./img/github.svg"
import instagram from "./img/instagram.svg"
import uploadIcon from "./img/upload.svg"
import "./ProfHead.scss"
import ProfileHeadForm from "./ProfHeadForm/ProfileHeadForm"

export const photosIcons = {
    vk,
    youtube,
    facebook,
    twitter,
    github,
    instagram,
}

export const ProfileStatus = (props) => {
    const { isMyProfile, updateUserStatus } = props

    const [editMode, setEditMode] = React.useState(false)
    const [status, setStatus] = React.useState(props.status)

    React.useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const toggleStatusEditMode = () => {
        setEditMode(!editMode)
    }

    const inputChangedHandler = (event) => {
        setStatus(event.target.value)
    }

    return (
        <div onDoubleClick={toggleStatusEditMode} class='prof-head__about'>
            <b>Status: </b>

            <>
                {isMyProfile && editMode ? (
                    <input
                        autoFocus
                        onFocus={(event) => {
                            event.target.select()
                        }}
                        onBlur={(e) => {
                            toggleStatusEditMode()

                            if (e.currentTarget.value !== props.status) {
                                updateUserStatus(status)
                            }
                        }}
                        value={status}
                        onChange={inputChangedHandler}
                        className='prof-head__about-input'
                    />
                ) : (
                    <span class='prof-head__about-text'>{status}</span>
                )}
            </>
        </div>
    )
}

export const Contact = ({ icon, link, name, forForm, children, className }) => {
    return (
        <div class={className}>
            {!forForm ? (
                <a
                    target='_blank'
                    rel='noreferrer noopener'
                    href={
                        link?.substr(0, 4) == "http" ? link : "http://" + link
                    }
                >
                    <img draggable={false} src={icon} alt={name} />
                </a>
            ) : (
                <>
                    <div>
                        <img draggable={false} src={icon} alt={name} />
                    </div>
                    {children}
                </>
            )}
        </div>
    )
}

const Contacts = ({
    contacts,
    forForm = false,
    contactChild,
    className,
    contactClassName,
}) => {
    return (
        <div class className={className}>
            {contacts &&
                Object.keys(contacts)
                    .filter((name) => name !== "website" && name !== "mainLink")
                    .map((key) => {
                        if (contacts[key] || forForm)
                            return (
                                <div key={key}>
                                    <Contact
                                        className={contactClassName}
                                        forForm={forForm}
                                        icon={photosIcons[key]}
                                        link={contacts[key]}
                                        name={key}
                                    >
                                        {contactChild}
                                    </Contact>
                                </div>
                            )
                    })}
        </div>
    )
}

const ProfileContacts = ({ contacts, forForm = false }) => {
    return (
        <Contacts
            contacts={contacts}
            contactClassName={"prof-head__contact"}
            className={`prof-head__contacts ${
                forForm && "prof-contacts-in-form"
            }`}
        />
    )
}

const ProfileHeadInfo = (props) => {
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
        updateAvatar,
        status,
        toggleSetFetching,
    } = props

    return (
        <div class='prof-head__info'>
            <div class='prof-head__fullname'>
                <b>{fullName}</b>
                {isMyProfile && (
                    <button
                        onClick={() => props.setEditMode(true)}
                        class='prof-head__edit-btn'
                    >
                        Edit profile
                    </button>
                )}
            </div>
            <ProfileStatus
                updateUserStatus={updateUserStatus}
                status={status}
                isMyProfile={isMyProfile}
            />

            <div>
                about me: <i>{aboutMe}</i>
            </div>

            <div class='prof-head__look-job'>
                <b>Занятость: </b>
                {lookingForAJob ? "Открыт для ваших предложений" : "Работаю"}
                <div class='prof-head__look-job-desc'>
                    <b>Description: </b>
                    {lookingForAJobDescription}
                </div>
            </div>
            <ProfileContacts contacts={contacts} />

            <div class='prof-head__my-site'>
                {contacts?.website && (
                    <a
                        class='prof-head__contact'
                        target='_blank'
                        href={`${contacts.website}`}
                    >
                        My Website
                    </a>
                )}
                <div>------------</div>
                {contacts?.mainLink && (
                    <a
                        class='prof-head__contact'
                        target='_blank'
                        href={`${contacts.mainLink}`}
                    >
                        Main link
                    </a>
                )}
            </div>
        </div>
    )
}

const ProfileHeadInfoEdit = (props) => {
    const onSave = () => {
        props.setEditMode(false)
    }

    return (
        <div class='prof-head__info prof-head-info-form'>
            <ProfileHeadForm onSave={onSave} {...props} />
        </div>
    )
}

const ProfHeadFuncComponent = (props) => {
    const { photos, isMyProfile, updateAvatar } = props

    const [editMode, setEditMode] = React.useState(false)

    const onAvatarSelected = (e) => {
        if (e.target.files.length !== 0) {
            updateAvatar(e.target.files[0])
        }
    }

    return (
        <div class='prof-head'>
            <div class='prof-head__body'>
                <div class='prof-head__image'>
                    {photos ? <img src={photos.large} /> : ""}
                    {isMyProfile && (
                        <>
                            <label class='prof-head__file-upload'>
                                <input
                                    onChange={onAvatarSelected}
                                    type='file'
                                />
                                <img src={uploadIcon} alt='upload' />
                            </label>
                        </>
                    )}
                </div>
                {editMode && isMyProfile ? (
                    <ProfileHeadInfoEdit {...props} setEditMode={setEditMode} />
                ) : (
                    <ProfileHeadInfo {...props} setEditMode={setEditMode} />
                )}
            </div>
        </div>
    )
}

// id test user : 19706

export default ProfHeadFuncComponent

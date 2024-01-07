import React from 'react'

export default function Title({ title, link, subTitle }) {
    return (
        <div className="d-flex justify-content-between mx-5 mt-3">
            <h4>{title}</h4>
            <a
                className="link icon icon-link-hover text-decoration-none"
                href={link}
            >
                {subTitle}
                <img
                    className="img_link bi"
                    aria-hidden="true"
                    src="images/seta.png"
                    alt=""
                />
            </a>
        </div>
    )
}

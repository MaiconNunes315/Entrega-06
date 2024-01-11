import { useState } from 'react';
import style from '@/styles/Navbar.module.css'
import useDestiny from '@/hooks/useDestiny';




export default function NavBar() {
    const [search, setSearch] = useState("");
    console.log(search)
    const { destinysTotal } = useDestiny()

    return (
        <header className={style.header} style={{ backgroundColor: "#045ccc" }}>
            <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="/images/logo.png" alt="logo va longe" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse  justify-content-between text-center"
                        id="navbarSupportedContent"
                    >
                        <p></p>
                        {/* <div
                            className={"d-flex flex-column flex-sm-row gap-2 gap-sm-0 " + style.searchComponent}
                            role="search"
                        >

                            {destinysTotal && (
                                <Autocomplete
                                    freeSolo
                                    sx={{ width: "100%", marginRight: "10px" }}
                                    id="free-solo-2-demo"
                                    disableClearable
                                    options={destinysTotal.map((option) => option.cidade)}
                                    renderInput={(params) => (
                                        <TextField
                                            onChange={() => setSearch(params.inputProps.value)}
                                            onClick={() => setSearch(params.inputProps.value)}

                                            id="outlined-size-small"
                                            {...params}
                                            label="Pesquise por cidade"
                                            InputProps={{
                                                ...params.InputProps,
                                                type: 'search',
                                            }}
                                            size='small'

                                            sx={{ backgroundColor: "#FFF", borderRadius: "5px" }}
                                        />
                                    )}
                                />
                            )}

                            <button className="btn btn-warning" type="button" onClick={() => console.log(search)}>

                                Pesquisar

                            </button>
                        </div> */}
                        <ul className="navbar-nav mb-2 mb-lg-0">

                            <li className="nav-item">
                                <a className={"nav-link " + style.style_link_hover} href="/destinys">
                                    <svg
                                        fill="#FFC107"
                                        width="30px"
                                        height="30px"
                                        viewBox="0 0 24.00 24.00"
                                        xmlns="http://www.w3.org/2000/svg"
                                        stroke="#FFC107"
                                        strokeWidth="0.00024000000000000003"
                                    >
                                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                        <g
                                            id="SVGRepo_tracerCarrier"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <g id="SVGRepo_iconCarrier">
                                            <g id="Plane">
                                                <path d="M11.9,20.936H10.85a.911.911,0,0,1-.9-1.023l.693-5.548H7.3l-.513.9a1.329,1.329,0,0,1-.992.657L5.1,16a.9.9,0,0,1-.8-.31.912.912,0,0,1-.185-.839l.774-2.769a.318.318,0,0,0,0-.173L4.114,9.145A.909.909,0,0,1,5.1,8l.695.083a1.331,1.331,0,0,1,.992.656l.513.9h3.34L9.946,4.088a.911.911,0,0,1,.9-1.024H11.9a1.327,1.327,0,0,1,1.236.857l2.144,5.714h1.046a8.5,8.5,0,0,1,1.758.184,2.166,2.166,0,0,1,1.429.9,2.209,2.209,0,0,1,.365,1.7A2.288,2.288,0,0,1,17.95,14.2l-.16.024a10.926,10.926,0,0,1-1.721.137h-.787l-2.144,5.714A1.327,1.327,0,0,1,11.9,20.936Zm-.951-1H11.9a.323.323,0,0,0,.3-.209l2.214-5.905a.71.71,0,0,1,.661-.457h.991a9.946,9.946,0,0,0,1.567-.125l.16-.025a1.3,1.3,0,0,0,1.1-.979,1.227,1.227,0,0,0-.2-.937,1.2,1.2,0,0,0-.793-.5,7.647,7.647,0,0,0-1.577-.167h-1.25a.711.711,0,0,1-.661-.456L12.2,4.273a.323.323,0,0,0-.3-.209h-.951l.722,5.778a.7.7,0,0,1-.7.793H7.127a.7.7,0,0,1-.614-.359l-.6-1.045a.32.32,0,0,0-.241-.16L5.113,9l.738,2.64a1.34,1.34,0,0,1,0,.711L5.113,15l.562-.067a.32.32,0,0,0,.241-.16l.6-1.049a.7.7,0,0,1,.612-.355h3.846a.7.7,0,0,1,.7.794ZM7.386,14.212l0,.005Zm3.295-.179v0Zm0-4.067v0Zm-3.3-.186,0,0Z"></path>
                                            </g>
                                        </g>
                                    </svg>
                                    Destinos
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    );
}



// import React from 'react'
// import style from '@/styles/Navbar.module.css'
// import { usePathname } from 'next/navigation'

// export default function Navbar() {

//     const url = usePathname()

//     return (
//         <header className={style.header} style={url == "/" ? { background: "transparent" } : { backgroundColor: "#045ccc" }}>
//             <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
//                 <div className="container-fluid">
//                     <a className="navbar-brand" href="/">
//                         <img src="/images/logo.png" alt="logo va longe" />
//                     </a>
//                     <button
//                         className="navbar-toggler"
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#navbarSupportedContent"
//                         aria-controls="navbarSupportedContent"
//                         aria-expanded="false"
//                         aria-label="Toggle navigation"
//                     >
//                         <span className="navbar-toggler-icon" />
//                     </button>
//                     <div
//                         className="collapse navbar-collapse  justify-content-between text-center"
//                         id="navbarSupportedContent"
//                     >
//                         <form
//                             className="d-flex flex-column flex-sm-row gap-2 gap-sm-0"
//                             role="search"
//                         >
//                             <input
//                                 className="form-control bg-light me-2"
//                                 type="search"
//                                 placeholder="Pesquisar"
//                                 aria-label="Search"
//                             />
//                             <button className="btn btn-warning" type="submit">
//                                 Pesquisar
//                             </button>
//                         </form>
//                         <ul className="navbar-nav mb-2 mb-lg-0">

//                             <li className="nav-item">
//                                 <a className={"nav-link " + style.style_link_hover} href="/destinys">
//                                     <svg
//                                         fill="#FFC107"
//                                         width="30px"
//                                         height="30px"
//                                         viewBox="0 0 24.00 24.00"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         stroke="#FFC107"
//                                         strokeWidth="0.00024000000000000003"
//                                     >
//                                         <g id="SVGRepo_bgCarrier" strokeWidth={0} />
//                                         <g
//                                             id="SVGRepo_tracerCarrier"
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                         />
//                                         <g id="SVGRepo_iconCarrier">
//                                             <g id="Plane">
//                                                 <path d="M11.9,20.936H10.85a.911.911,0,0,1-.9-1.023l.693-5.548H7.3l-.513.9a1.329,1.329,0,0,1-.992.657L5.1,16a.9.9,0,0,1-.8-.31.912.912,0,0,1-.185-.839l.774-2.769a.318.318,0,0,0,0-.173L4.114,9.145A.909.909,0,0,1,5.1,8l.695.083a1.331,1.331,0,0,1,.992.656l.513.9h3.34L9.946,4.088a.911.911,0,0,1,.9-1.024H11.9a1.327,1.327,0,0,1,1.236.857l2.144,5.714h1.046a8.5,8.5,0,0,1,1.758.184,2.166,2.166,0,0,1,1.429.9,2.209,2.209,0,0,1,.365,1.7A2.288,2.288,0,0,1,17.95,14.2l-.16.024a10.926,10.926,0,0,1-1.721.137h-.787l-2.144,5.714A1.327,1.327,0,0,1,11.9,20.936Zm-.951-1H11.9a.323.323,0,0,0,.3-.209l2.214-5.905a.71.71,0,0,1,.661-.457h.991a9.946,9.946,0,0,0,1.567-.125l.16-.025a1.3,1.3,0,0,0,1.1-.979,1.227,1.227,0,0,0-.2-.937,1.2,1.2,0,0,0-.793-.5,7.647,7.647,0,0,0-1.577-.167h-1.25a.711.711,0,0,1-.661-.456L12.2,4.273a.323.323,0,0,0-.3-.209h-.951l.722,5.778a.7.7,0,0,1-.7.793H7.127a.7.7,0,0,1-.614-.359l-.6-1.045a.32.32,0,0,0-.241-.16L5.113,9l.738,2.64a1.34,1.34,0,0,1,0,.711L5.113,15l.562-.067a.32.32,0,0,0,.241-.16l.6-1.049a.7.7,0,0,1,.612-.355h3.846a.7.7,0,0,1,.7.794ZM7.386,14.212l0,.005Zm3.295-.179v0Zm0-4.067v0Zm-3.3-.186,0,0Z"></path>
//                                             </g>
//                                         </g>
//                                     </svg>
//                                     Destinos
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </header>

//     )
// }

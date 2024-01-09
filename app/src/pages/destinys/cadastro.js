import Head from "next/head";
import style from "@/styles/destiny/register.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import useDestiny from "@/hooks/useDestiny";
import { instance } from "@/config/configAxios";
import CardDestiny from "@/components/CardDestiny";
import { useRouter } from "next/router";
import Modal from "@/components/Modal";


export default function cadastro() {

    const [image, setImage] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [detalhes, setDetalhes] = useState("");
    const [pais, setPais] = useState("");
    const [response, setResponse] = useState();
    const [id, setId] = useState()

    const { destiny } = useDestiny(id);

    function handleSubmit(event) {
        event.preventDefault()

        instance.post("/destinos", {
            Cidade: cidade,
            Estado: estado,
            Pais: pais,
            Detalhes: detalhes,
            Img: image,

        }).then(res => {
            setResponse(res.data)
        });
    }

    const { destinysTotal, deletarDestino } = useDestiny();
    return (
        <>
            <Head>
                <title>Vá longe - cadastrar destino</title>
            </Head>

            <section className="container my-5">
                <Modal destiny={destiny} />

                <form className={style.form} onSubmit={handleSubmit}>
                    <span className={style.title}>Cadastrar destino</span>
                    {response && (<h5 className="alert alert-success">Cadastro realizado com  sucesso id: {response.id}</h5>)}

                    {image ? (

                        <img className={style.avatar} src={image} alt="imagem da cidade" />

                    ) : (
                        <label className={style.avatar} htmlFor="file">
                            <span>
                                {" "}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <g strokeWidth={0} id="SVGRepo_bgCarrier" />
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        id="SVGRepo_tracerCarrier"
                                    />
                                    <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <path
                                            fill="#ffffff"
                                            d="M17.1813 16.3254L15.3771 14.5213C16.5036 13.5082 17.379 12.9869 18.2001 12.8846C19.0101 12.7837 19.8249 13.0848 20.8482 13.8687C20.8935 13.9034 20.947 13.9202 21 13.9202V15.024C21 19.9452 19.9452 21 15.024 21H8.976C4.05476 21 3 19.9452 3 15.024V13.7522C3.06398 13.7522 3.12796 13.7278 3.17678 13.679L4.45336 12.4024C5.31928 11.5365 6.04969 10.8993 6.71002 10.4791C7.3679 10.0605 7.94297 9.86572 8.50225 9.86572C9.06154 9.86572 9.6366 10.0605 10.2945 10.4791C10.9548 10.8993 11.6852 11.5365 12.5511 12.4024L16.8277 16.679C16.9254 16.7766 17.0836 16.7766 17.1813 16.679C17.2789 16.5813 17.2789 16.423 17.1813 16.3254Z"
                                            opacity="0.1"
                                        />{" "}
                                        <path
                                            strokeWidth={2}
                                            stroke="#ffffff"
                                            d="M3 8.976C3 4.05476 4.05476 3 8.976 3H15.024C19.9452 3 21 4.05476 21 8.976V15.024C21 19.9452 19.9452 21 15.024 21H8.976C4.05476 21 3 19.9452 3 15.024V8.976Z"
                                        />{" "}
                                        <path
                                            strokeLinecap="round"
                                            strokeWidth={2}
                                            stroke="#ffffff"
                                            d="M17.0045 16.5022L12.7279 12.2256C9.24808 8.74578 7.75642 8.74578 4.27658 12.2256L3 13.5022"
                                        />{" "}
                                        <path
                                            strokeLinecap="round"
                                            strokeWidth={2}
                                            stroke="#ffffff"
                                            d="M21.0002 13.6702C18.907 12.0667 17.478 12.2919 15.1982 14.3459"
                                        />{" "}
                                        <path
                                            strokeWidth={2}
                                            stroke="#ffffff"
                                            d="M17 8C17 8.55228 16.5523 9 16 9C15.4477 9 15 8.55228 15 8C15 7.44772 15.4477 7 16 7C16.5523 7 17 7.44772 17 8Z"
                                        />{" "}
                                    </g>
                                </svg>
                            </span>
                        </label>
                    )}

                    <input type="text" className={style.input} onChange={(event) => setCidade(event.target.value)} placeholder="Cidade" />
                    <input type="text" className={style.input} onChange={(event) => setImage(event.target.value)} placeholder="Imagem" />
                    <input type="text" className={style.input} onChange={(event) => setEstado(event.target.value)} placeholder="Estado" />
                    <input type="text" className={style.input} onChange={(event) => setPais(event.target.value)} placeholder="País" />
                    <textarea className={style.input + " " + style.textarea} onChange={(event) => setDetalhes(event.target.value)} placeholder="Detalhes" ></textarea>

                    <button className={style.button}>Cadastrar</button>
                </form>

            </section>
            <section className="d-flex flex-wrap gap-3 container mb-5">
                {destinysTotal &&
                    destinysTotal.map(destiny => (
                        <div className={style.card} key={destiny.id}>

                            <img src={destiny.img} className="card-img-top" alt="..." />

                            <div className={style.badges}>

                                <button
                                    type="button"
                                    className="badge text-bg-warning"
                                    data-bs-toggle="modal"
                                    data-bs-target={"#Modal"}
                                    onClick={() => setId(destiny.id)}
                                >
                                    Editar
                                </button>
                                <span className="badge text-bg-danger" onClick={() => deletarDestino(destiny.id)}>Remover</span>
                            </div>
                        </div>
                    ))
                }
            </section>
        </>
    )
}

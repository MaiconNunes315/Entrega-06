import { useRouter } from "next/router"
import { styles } from "@/styles/destiny/destinyId.module.css";
import useDestiny from "@/hooks/useDestiny";
import "bootstrap-icons/font/bootstrap-icons.css"
import Head from "next/head";

export default function DestinyId() {

    const router = useRouter();
    const { id } = router.query;
    const { destiny } = useDestiny(id);

    return (
        <>
            <Head>
                <title>Válonge - {destiny.cidade}</title>
            </Head>
            {destiny ?
                (<section className={"container row m-auto py-5"} >
                    <section className={"col-md-6 d-flex flex-column my-5 ml-2 gap-3"}>
                        <h3 className="fs-1 text-secondary">{destiny.cidade}</h3>
                        <img className="card-img" src={destiny.img} alt={"Imagem da cidade " + destiny.cidade} />

                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li className="badge text-bg-primary">{destiny.pais}</li><i className="bi bi-chevron-compact-right"></i>
                                <li className="badge text-bg-primary">{destiny.estado}</li><i className="bi bi-chevron-compact-right"></i>
                                <li className="badge text-bg-primary">{destiny.cidade}</li>
                            </ol>
                        </nav>

                    </section>
                    <section className="col-md-6 d-flex align-items-center">
                        <p className="text-body-tertiary fs-3">{destiny.detalhes}</p>
                    </section>

                </section>)
                :
                (null)
            }

        </>
    )
}

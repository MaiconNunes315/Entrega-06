
import CardDestiny from '@/components/CardDestiny';
import Title from '@/components/Title'
import useDestiny from '@/hooks/useDestiny'
import Head from 'next/head'
import Link from 'next/link';
import { useRouter } from 'next/router';

import React, { useEffect } from 'react'

export default function index() {

    const { destinys, setPage, destinysTotal } = useDestiny();
    const router = useRouter();
    let { page } = router.query;

    if (!page) {
        page = 1
    }

    useEffect(() => {
        if (page > 0) {
            setPage((page - 1) * 10)
        } else if (page < 1) {
            setPage(0)
        }
    }, [page])




    return (
        <>
            <Head>
                <title>Vá longe - destinos</title>
            </Head>
            <section className='container'>
                <Title title="Destinos" link={"/destinys/cadastro"} subTitle="Cadastrar destino" />
                <div className='d-flex justify-content-center gap-3 flex-wrap mt-3 pb-5'>
                    {destinys &&
                        destinys.map(destiny => (
                            <CardDestiny cidade={destiny.cidade} img={destiny.img} key={destiny.id} id={destiny.id} />
                        ))
                    }
                </div>

                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        {page > 1 ? (<li className="page-item"><Link href={"/destinys?page=" + Number(page - 1)} className="page-link" onClick={() => setPage(prev => prev - 10)}>Previous</Link></li>) : (null)}
                        <li className="page-item"><Link href={"/destinys?page=" + 1} className="page-link" onClick={() => setPage(0)}>1</Link></li>
                        <li className="page-item"><Link href={"/destinys?page=" + 2} className="page-link" onClick={() => setPage(10)}>2</Link></li>
                        {destinysTotal.length > 20 ? (<li className="page-item"><Link href={"/destinys?page=" + 3} className="page-link" onClick={() => setPage(20)}>3</Link></li>) : (null)}
                        {(page) < destinysTotal.length / 10 || !page ? (<li className="page-item"><Link href={"/destinys?page=" + parseInt(Number(page) + Number(1))} className="page-link" onClick={() => setPage(prev => prev + 10)}>Next</Link></li>) : (null)}
                    </ul>
                </nav>

            </section>
        </>
    )
}


import style from '@/styles/destiny/destiny.module.css';
import Link from 'next/link';

export default function CardDestiny({ id, img, cidade }) {

    return (
        <div
            className={`${style.card}`}

        >
            <img
                src={img}

                alt={"imagem da cidade " + cidade}
            />
            <div className={style.card__content}>
                <p className={style.card__title}>{cidade}</p>

                <Link href={"/destinys/" + id} className={"btn btn-warning text-white " + style.card__description}>
                    Conferir
                </Link>
            </div>
        </div>


    )
}

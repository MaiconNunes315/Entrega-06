import { instance } from "@/config/configAxios";
import { useEffect, useState } from "react";


export default function useDestiny(id) {
    const [destinys, setDestinys] = useState([]);
    const [destiny, setDestiny] = useState({});
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [destinysNacional, setDestinysNacional] = useState([]);
    const [destinysInternacional, setDestinysInternacional] = useState([]);
    const [destinysTotal, setDestinysTotal] = useState([]);

    function deletarDestino(id) {
        instance.delete('destinos/' + id).then(res => console.log(res.data))
        window.location.reload()
    }

    useEffect(() => {
        instance.get("/destinos?page=0&size=20").then(res => {
            setDestinysNacional(res.data.filter(destiny => destiny.pais == "Brasil"));
            setDestinysInternacional(res.data.filter(destiny => destiny.pais !== "Brasil"));
            setDestinysNacional(prev => prev.slice(0, 5))
            setDestinysInternacional(prev => prev.slice(0, 5))
        });

        instance.get("/destinos?page=" + page + "&size=" + size).then(res => setDestinys(res.data))
        instance.get("/destinos?page=0&size=0").then(res => setDestinysTotal(res.data))

        if (id) {
            instance.get("/destinos/" + id).then(res => setDestiny(res.data))
        }

    }, [id, page, size])


    return { destinys, page, destiny, setPage, destinysNacional, destinysInternacional, setSize, size, destinysTotal, deletarDestino }
}


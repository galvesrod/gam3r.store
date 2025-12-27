"use client"
import { Produto } from "@gstore/core";
import useProdutos from "@/data/hooks/useProdutos";
import { useEffect, useState } from "react";

export default function PaginaProduto(props: any) {
    // const params = await props.params;
    // const id = +params.id;
    const { obterProdutoPorId } = useProdutos();
    const [produto, setProduto] = useState<Produto|null>(null)
    const [id, setId] = useState<number | null>(null);

    
    useEffect(()=>{
        props.params.then((params: any) => {
            setId(+params.id);
        });
    },[props.params])

    // Buscar o produto quando o id estiver disponível
    useEffect(() => {
        if (id !== null) {
            obterProdutoPorId(id).then(setProduto);
        }
    }, [id, obterProdutoPorId]);

    return (
        <div>Produtos {produto?.nome}</div>
    )

}
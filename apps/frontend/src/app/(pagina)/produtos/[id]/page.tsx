"use client"
import { Produto } from "@gstore/core";
import useProdutos from "@/data/hooks/useProdutos";
import { useEffect, useState } from "react";
import TituloProduto from "@/components/produto/TituloProduto";
import InformacoesProduto from "@/components/produto/InformacoesProduto";
import BannerCompra from "@/components/produto/BannerCompra";
import MedidorDePreco from "@/components/produto/MedidorDePreco";
import AvaliacaoEspecializada from "@/components/produto/AvaliacaoEspecializada";
import AvaliacoesUsuarios from "@/components/produto/AvaliacoesUsuarios";
import ProdutoNaoEncontrado from "@/components/produto/ProdutoNaoEncontrado";

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

    return produto ? (
        <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-10">
                <TituloProduto produto={produto} />
                <InformacoesProduto produto={produto} />
                <BannerCompra produto={produto}/>
                <MedidorDePreco produto={produto}/>
            </div>
            <AvaliacoesUsuarios produto={produto}/>
            <AvaliacaoEspecializada produto={produto}/>

        </div>
        // <div>Produtos {produto?.nome}</div>
    ): (<ProdutoNaoEncontrado />)

}
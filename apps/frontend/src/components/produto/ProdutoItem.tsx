
import { Produto } from "@gstore/core";
import { IconShoppingCartPlus } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"

interface ProdutoItemProps {
    produto: Produto
}

export default function ProdutoItem(props: ProdutoItemProps) {
    const {produto} = props
    return(
        <Link 
            className='
                flex flex-col relative
                bg-violet-dark 
                border border-white/10 rounded-xl
                max-w-87.5
                '
            href={`/produtos/${produto.id}`} >
                <div className="h-48 w-full relative">
                    <Image 
                        className="object-contain"
                        src={produto.imagem}
                        fill
                        alt="Imagem do produto"
                        />
                </div>
                <div className="flex-1 flex flex-col p-5 border-t border-white/10 gap-3">
                    <span className="text-lg font-semibold">{produto.nome}</span>
                    <span className="text-sm border-b border-dashed self-start">{produto.especificacoes.destaque}</span>
                
                    <div className="flex-1"></div>
                    <div className="flex flex-col">
                        <span className="text-sm text-gray-400 line-through">de {produto.precoBase}</span>
                        <span className="text-xl font-semibold text-emerald-400">por {produto.precoPromocional}</span>
                    </div>
                    <button className="
                            flex justify-center items-center h-8 gap-2
                            bg-violet-700 hover:border-2 border-emerald-500
                            rounded-full"
                        onClick={(e:any)=> {
                            e.preventDefault()
                            console.log('Adicionar ao carrinho')
                            }                            
                        }    
                        >
                        <IconShoppingCartPlus size={20}/>
                        <span>Adicionar</span>
                    </button>
                </div>
        </Link>)
}
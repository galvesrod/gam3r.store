import { IconShoppingCart } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export interface IconeCarrinhoProps {
    qtdeItens: number
}

export default function IconeCarrinho({ qtdeItens }: IconeCarrinhoProps) {
    return (
        <div className="flex justify-center items-center 
            rounded-full w-14 h-14 bg-violet-dark relative">
            <IconShoppingCart size={30} stroke={1.3}/>
            <div className="
                absolute top-2 right-2 bg-pink-500 text-white text-xs
                rounded-full w-5 h-5 flex items-center justify-center">
                {qtdeItens ?? 0}
            </div>
        </div>
    )
}
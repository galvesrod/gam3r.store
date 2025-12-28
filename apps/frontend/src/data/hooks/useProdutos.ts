'use client'
import { Produto } from "@gstore/core";
import { useCallback, useEffect, useState } from "react";

const BASE_URL = 'http://localhost:4000';


export default function useProdutos() {
    const [produtos, setProdutos] = useState<Produto[]>([]);

    async function obterProdutos(): Promise<Produto[]> {
        // Simular uma chamada para obter os produtos
        const resp = await fetch(`${BASE_URL}/produtos`);
        const produtos = await resp.json();
        return produtos ?? [];
    }

    const obterProdutoPorId = useCallback(

    async function  obterProdutoPorId(id: number): Promise<Produto | null> {
        try {
            const resp = await fetch(`${BASE_URL}/produtos/${id}`);
            const produto = await resp.json();
            // return produto ?? null;
            return produto ?? null;            
        } catch (error) {
            console.error('Erro ao obter produto por ID:', error);
            return null;
        }
    }, []);

    useEffect(() => {
        obterProdutos().then(setProdutos);
    }, []);

    return {
        produtos,
        obterProdutoPorId
    }
}
// import { PrismaClient } from "@prisma/client";
import { produtos } from "@gstore/core";
import { prisma } from "./prisma";
// import { PrismaClient } from "generated/prisma/client";

async function seed() {
    
    await prisma.produto.createMany({
        data: produtos.map((produto) => ({
            ...produto,
            id: undefined,
        })),
    });
}

seed()
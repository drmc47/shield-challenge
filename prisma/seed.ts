import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seed...");

  await prisma.chain.createMany({
    data: [
      {
        id: "eth-mainnet",
        name: "Ethereum",
        slug: "ethereum",
        chainId: 1,
        explorerUrl: "https://etherscan.io",
        rpcUrl: "https://mainnet.infura.io/v3/",
        nativeCurrency: "ETH",
        isEVM: true,
      },
      {
        id: "bsc-mainnet",
        name: "Binance Smart Chain",
        slug: "bsc",
        chainId: 56,
        explorerUrl: "https://bscscan.com",
        rpcUrl: "https://bsc-dataseed.binance.org/",
        nativeCurrency: "BNB",
        isEVM: true,
      },
      {
        id: "polygon-mainnet",
        name: "Polygon",
        slug: "polygon",
        chainId: 137,
        explorerUrl: "https://polygonscan.com",
        rpcUrl: "https://polygon-rpc.com",
        nativeCurrency: "MATIC",
        isEVM: true,
      },
      {
        id: "arbitrum-mainnet",
        name: "Arbitrum",
        slug: "arbitrum",
        chainId: 42161,
        explorerUrl: "https://arbiscan.io",
        rpcUrl: "https://arb1.arbitrum.io/rpc",
        nativeCurrency: "ETH",
        isEVM: true,
      },
      {
        id: "solana-mainnet",
        name: "Solana",
        slug: "solana",
        chainId: null,
        explorerUrl: "https://solscan.io",
        rpcUrl: "https://api.mainnet-beta.solana.com",
        nativeCurrency: "SOL",
        isEVM: false,
      },
    ],
    skipDuplicates: true,
  });

  console.log("🌱 Seed was successfully loaded");
}

main()
  .catch((e) => {
    console.error("Error", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

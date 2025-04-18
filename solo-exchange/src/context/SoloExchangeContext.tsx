import { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractAbi, contractAddress } from "../utils/constants";
import { Deal } from "../@types/Deal";

const { ethereum } = window;

// Helper function to create a contract instance using ethers.js
const createEthereumContract = () => {
	if (!ethereum) {
		alert("Please Install MetaMask....");
		return null;
	}
	const provider = new ethers.providers.Web3Provider(ethereum);
	const signer = provider.getSigner();
	const transactionsContract = new ethers.Contract(
		contractAddress,
		contractAbi,
		signer
	);

	return transactionsContract;
};

// Create a context for the SoloExchange application
export const SoloExchangeContext = createContext({}) as any;

// Context provider component for managing state and providing functions
export const SoloExchangeContextProvider = ({ children }: { children: any }) => {
	// State to store the current connected wallet address
	const [currentAccount, setCurrentAccount] = useState(() => {
		const saved = localStorage.getItem("currentAccount") as string;
		const initialValue = saved;
		return initialValue || "";
	});

	// State to store the list of deals
	const [deals, setDeals] = useState<Deal[]>([]);

	// Persist the current account in localStorage whenever it changes
	useEffect(() => {
		localStorage.setItem("currentAccount", currentAccount)
	}, [currentAccount])

	// Function to connect the user's wallet
	const connectWallet = async () => {
		try {
			if (!ethereum) return alert("Please Install MetaMask....");

			const accounts: string[] = await ethereum.request({
				method: "eth_requestAccounts",
			});
			setCurrentAccount(accounts[0]);

			// Fetch deals after connecting the wallet
			await getDeals();
		} catch (error) {
			console.log(error);
			throw new Error("No ethereum object");
		}
	};

	// Function to purchase a deal
	const purchaseDeal = async (deal: Deal) => {
		await ethereum.request({
			method: "eth_sendTransaction",
			params: [
				{
					from: currentAccount,
					to: deal.address,
					gas: "0x5208", // 21000 Gwei
					value: ethers.utils.parseEther(deal.price.toString())._hex,
				},
			],
		});
		const contract = createEthereumContract();
		if (contract) await contract.removeDeal(deal.id); // Remove the deal from the contract
	};

	// Function to fetch all deals from the contract
	const getDeals = async () => {
		const provider = new ethers.providers.Web3Provider(ethereum);
		if (!(await provider.listAccounts()).length) {
			setCurrentAccount(""); // Reset account if no accounts are connected
		}
		const contract = createEthereumContract();
		if (!contract) {
			return;
		}
		const fetchedDeals = ((await contract.getDeals()) as any[])
			.map(
				(d: any) =>
				({
					address: d.from,
					timestamp: d.timestamp,
					id: d.id,
					price: d.price * 0.001, // Convert price to a readable format
					email: d.email,
					item: d.item,
					description: d.description,
					imageUrl: d.imageUrl,
				} as Deal)
			)
			.sort((a, b) => a.timestamp - b.timestamp); // Sort deals by timestamp
		setDeals(fetchedDeals);
	};

	// Function to post a new deal to the contract
	const postDeals = async (
		email: string,
		item: string,
		description: string,
		price: string,
		url: string
	) => {
		const contract = createEthereumContract();
		if (!contract) {
			return;
		}
		await contract.postDeal(
			Math.trunc(parseFloat(price) * 1000), // Convert price to contract format
			email,
			item,
			description,
			url
		);
		await getDeals(); // Refresh the deals after posting
	};

	return (
		<SoloExchangeContext.Provider
			value={{
				currentAccount, // Current connected wallet address
				deals, // List of deals
				getDeals, // Function to fetch deals
				postDeals, // Function to post a new deal
				connectWallet, // Function to connect wallet
				sendMoney: purchaseDeal, // Function to purchase a deal
			}}
		>
			{children}
		</SoloExchangeContext.Provider>
	);
};

export default SoloExchangeContextProvider;

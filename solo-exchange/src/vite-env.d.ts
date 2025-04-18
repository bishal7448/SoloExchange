/// <reference types="vite/client" />

/**
 * Extends the global `Window` interface to include a custom property `ethereum`.
 * This property is commonly used in blockchain-related applications to interact
 * with Ethereum-compatible wallets, such as MetaMask.
 * 
 * @property ethereum - Represents an Ethereum provider object, typically injected
 * by browser extensions or wallet applications. The type is set to `any` to allow
 * flexibility, but it is recommended to use a more specific type if available.
 */
interface Window {
    ethereum: any
}

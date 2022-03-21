import { useState, useEffect } from "react";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import {
  injected,
  connectorsWallet,
  supportedNetworksWallet,
  networkByChainId,
  chainIdByNetwork,
} from "./connectors";

import { toHex } from "./utils";

export function Wallet(props) {
  const { children } = props;
  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
//  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
//  useInactiveListener(!triedEager);

  return <>{children}</>;
}

function useEvmReact() {
  const [chainEvm, setChainEvm] = useState(undefined);
  const [activeEvm, setActiveEvm] = useState(undefined);
  const [errorEvm, setErrorEvm] = useState(undefined);
  const [accountEvm, setAccountEvm] = useState(undefined);
  const [libraryEvm, setLibraryEvm] = useState(undefined);
  const [connectorEvm, setConnectorEvm] = useState(undefined);

  const {
    library,
    account,
    chainId,
    active,
    activate,
    connector,
    error,
    deactivate,
  } = useWeb3React();

  let deactivateEvm = deactivate;
  let activateEvm = activate;

  useEffect(() => {
    setLibraryEvm(library);
  }, [library]);

  useEffect(() => {
    setAccountEvm(account);
  }, [account]);

  useEffect(() => {
    setChainEvm(chainId);
  }, [chainId]);

  useEffect(() => {
    setActiveEvm(active);
  }, [active]);

  useEffect(() => {
    setConnectorEvm(connector);
  }, [connector]);

  useEffect(() => {
    setErrorEvm(error);
  }, [error]);

  function errorMessageEvm(error) {
    if (error instanceof NoEthereumProviderError) {
      return "No wallet browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.";
    } else if (error instanceof UnsupportedChainIdError) {
      return "Your network is not supported";
    } else if (error instanceof UserRejectedRequestErrorInjected) {
      return "Please authorize this website to access your wallet.";
    } else {
      console.error(error);
      return "An unknown error occurred. Check the console for more details.";
    }
  }

  return {
    libraryEvm,
    accountEvm,
    activeEvm,
    activateEvm,
    connectorEvm,
    errorEvm,
    deactivateEvm,
    errorMessageEvm,
    chainEvm,
  };
}

export function useWallet() {
  const {
    libraryEvm,
    accountEvm,
    activeEvm,
    activateEvm,
    connectorEvm,
    errorEvm,
    deactivateEvm,
    errorMessageEvm,
    chainEvm,
  } = useEvmReact();

  const [libraryWallet, setLibraryWallet] = useState(undefined);

  const [networkWallet, setNetworkWallet] = useState(undefined);

  const [accountWallet, setAccountWallet] = useState(undefined);

  const [usernameWallet, setUsernameWallet] = useState(undefined);

  const [loadingWallet, setLoadingWallet] = useState(false);

  const [errorWallet, setErrorWallet] = useState(undefined);

  const [activeWallet, setActiveWallet] = useState(undefined);

  function connectWallet(networkId, connectorsId) {
    setErrorWallet(undefined);

    switch (networkId) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
        if (activeWallet && networkId !== networkWallet) {
          switchNetworkWallet(networkId);
        } else if (networkId === networkWallet) {
          console.log("Network");
        } else {
          setLoadingWallet(connectorsWallet[connectorsId].connector);
          activateEvm(connectorsWallet[connectorsId].connector);
          switchNetworkWallet(networkId);
        }
        break;
      default:
        setErrorWallet("Network type not supported");
    }
  }

  async function addNetworkWallet(networkId) {
    setErrorWallet(undefined);

    switch (networkId) {
      case "2":
      case "3":
      case "4":
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainName: supportedNetworksWallet[networkId].blockchainName,
                chainId: toHex(chainIdByNetwork[networkId]),
                rpcUrls: [supportedNetworksWallet[networkId].rpcUrl],
                nativeCurrency: {
                  name: supportedNetworksWallet[networkId].nativeCurrency.name,
                  symbol:
                    supportedNetworksWallet[networkId].nativeCurrency.symbol,
                  decimals:
                    supportedNetworksWallet[networkId].nativeCurrency.decimals,
                },
                blockExplorerUrls: [
                  supportedNetworksWallet[networkId].explorer,
                ],
              },
            ],
          });
        } catch (error) {
          // This error code indicates that the chain has not been added to MetaMask
          // if it is not, then install it into the user MetaMask
          if (error.code === 4001) {
            setErrorWallet(
              "Please authorize this website to access your wallet."
            );
          } else {
            console.error(error);
          }
        }
        break;
      default:
        setErrorWallet("Network add not supported");
    }
  }

  async function switchNetworkWallet(networkId) {
    setErrorWallet(undefined);

    switch (networkId) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
        try {
          // check if the chain to connect to is installed
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: toHex(chainIdByNetwork[networkId]) }], // chainId must be in hexadecimal numbers
          });
        } catch (error) {
          // This error code indicates that the chain has not been added to MetaMask
          // if it is not, then install it into the user MetaMask
          if (error.code === 4902) {
            addNetworkWallet(networkId);
          } else if (error.code === 4001) {
            setErrorWallet(
              "Please authorize this website to switch your wallet network."
            );
          } else {
            console.error(error);
          }
        }
        break;
      default:
        setErrorWallet("Network switch not supported");
    }
  }

  function disconnectWallet() {
    setErrorWallet(undefined);

    switch (networkWallet) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
        deactivateEvm();
        setNetworkWallet(undefined);
        break;
      default:
        setErrorWallet("Network type not supported");
    }
  }

  useEffect(() => {
    if (libraryEvm) {
      setLibraryWallet(libraryEvm);
    } else {
      setLibraryWallet(undefined);
    }
  }, [libraryWallet, libraryEvm]);

  useEffect(() => {
    if (accountEvm) {
      setAccountWallet(accountEvm);
    } else {
      setAccountWallet(undefined);
    }
  }, [accountWallet, accountEvm]);

  useEffect(() => {
    async function fetchName() {
      if (libraryEvm) {
        try {
          setUsernameWallet(await libraryEvm.lookupAddress(accountEvm));
        } catch (error) {
          setUsernameWallet(undefined);
        }
      } else {
        setUsernameWallet(undefined);
      }
    }
    fetchName();
  }, [accountWallet, accountEvm, chainEvm, libraryEvm]); // catch ens name if account change

  useEffect(() => {
    if (chainEvm) {
      setNetworkWallet(networkByChainId[chainEvm]);
    } else {
      setNetworkWallet(undefined);
    }
  }, [networkWallet, chainEvm]);

  useEffect(() => {
    if (activeEvm) {
      setErrorWallet(false);
      setActiveWallet(activeEvm);
    } else {
      setActiveWallet(undefined);
    }
  }, [activeWallet, activeEvm]);

  useEffect(() => {
    if (errorEvm) {
      setErrorWallet(errorMessageEvm(errorEvm));
      deactivateEvm();
    }
  }, [errorWallet, errorEvm, errorMessageEvm, deactivateEvm]);

  useEffect(() => {
    if (loadingWallet && loadingWallet === connectorEvm) {
      setLoadingWallet(false);
    }
  }, [loadingWallet, connectorEvm]);

  return {
    switchNetworkWallet,
    usernameWallet,
    accountWallet,
    networkWallet,
    supportedNetworksWallet,
    connectorsWallet,
    activeWallet,
    errorWallet,
    loadingWallet,
    connectWallet,
    disconnectWallet,
  };
}

export function useEagerConnect() {
  const { activate, active } = useWeb3React();
  const [tried, setTried] = useState(false);

  useEffect(() => {
    injected.isAuthorized().then((isAuthorized) => {
      if (isAuthorized) {
        activate(injected, undefined, true).catch(() => {
          setTried(true);
        });
      } else {
        setTried(true);
      }
    });
  }, [activate]); // intentionally only running on mount (make sure it's only mounted once :))

  // if the connection worked, wait until we get confirmation of that to flip the flag
  useEffect(() => {
    if (!tried && active) {
      setTried(true);
    }
  }, [tried, active]);

  return tried;
}

export function useInactiveListener(suppress = false) {
  const { active, error, activate } = useWeb3React();

  useEffect(() => {
    const { ethereum } = window;
    if (ethereum && ethereum.on && !active && !error && !suppress) {
      const handleChainChanged = (chainId) => {
        console.log("chainChanged", chainId);
        activate(injected);
      };

      const handleAccountsChanged = (accounts) => {
        console.log("accountsChanged", accounts);
        if (accounts.length > 0) {
          activate(injected);
        }
      };

      const handleNetworkChanged = (networkId) => {
        console.log("networkChanged", networkId);
        activate(injected);
      };

      ethereum.on("chainChanged", handleChainChanged);
      ethereum.on("accountsChanged", handleAccountsChanged);
      ethereum.on("networkChanged", handleNetworkChanged);

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener("chainChanged", handleChainChanged);
          ethereum.removeListener("accountsChanged", handleAccountsChanged);
          ethereum.removeListener("networkChanged", handleNetworkChanged);
        }
      };
    }

    return () => {};
  }, [active, error, suppress, activate]);
}

import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  ReactNode,
} from 'react';
import NetInfo from '@react-native-community/netinfo';

// Define the shape of the context
interface NetworkContextType {
  isConnected: boolean;
}

// Create context with default value
const NetworkContext = createContext<NetworkContextType>({
  isConnected: true, // default to true to avoid null access
});

// Define props type for provider
interface NetworkProviderProps {
  children: ReactNode;
}

export const NetworkProvider: React.FC<NetworkProviderProps> = ({ children }) => {
  const [isConnected, setIsConnected] = useState<boolean>(true);

  useEffect(() => {
    const fetchStatus = async () => {
      const state = await NetInfo.fetch();
      setIsConnected(state.isConnected ?? true); // fallback to true
      console.log('Initial Network status:', state.isConnected);
    };

    fetchStatus();

    const unsubscribe = NetInfo.addEventListener((state:any) => {
      console.log('Connection changed to:', state.isConnected);
      setIsConnected(state.isConnected ?? true);
    });

    return () => unsubscribe();
  }, []);

  return (
    <NetworkContext.Provider value={{ isConnected }}>
      {children}
    </NetworkContext.Provider>
  );
};

// Hook for using network status
export const useNetwork = (): NetworkContextType => useContext(NetworkContext);

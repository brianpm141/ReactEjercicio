import { createContext,useContext,useState, type ReactNode } from "react";

interface CoinContextType {
  coinName : string
  setCoinName: (value: string) => void
  crecimiento: "mayor" | "menor" | "default"
  setCrecimiento: (value: "mayor" | "menor" | "default") => void
}

export const CoinContext = createContext<CoinContextType | undefined>(undefined);

export const CoinProvider = ({ children }: { children: ReactNode }) => {
    const [coinName, setCoinName] = useState<string>("");
    const [crecimiento, setCrecimiento] = useState<"mayor" | "menor" | "default">("default");

    return(
        <CoinContext.Provider value={{ coinName, setCoinName, crecimiento, setCrecimiento }}>
            {children}
        </CoinContext.Provider>
    );
};

export const useCoinName = () => {
    const context = useContext(CoinContext);
    if (!context) {
        throw new Error("useCoinName debe usarse dentro de un CoinProvider");
    }
    return context;
}
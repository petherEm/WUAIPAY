import { create } from "zustand";

export const usePayStore = create((set, get) => ({
  fundsIn: "Card",
  fundsOut: "Ecosystem",
  fundsInAmount: 100,
  country: "ro",
  currency: "RON",
  rates: 4.5612,
  fee: 0,
  banner: false,
  bonusAmount: 100,
  bonusCurrency: "RON",
  deliveryTime: "1-2 Business days",

  setFundsIn: (fundsIn) => set({ fundsIn }),
  setFundsOut: (fundsOut) => set({ fundsOut }),
  setFundsInAmount: (fundsInAmount) => set({ fundsInAmount }),
  setCountry: (country) => set({ country }),
  setCurrency: (currency) => set({ currency }),
  setRates: (rates) => set({ rates }),
  setFee: (fee) => set({ fee }),
  setBanner: (banner) => set({ banner }),

  setBonusAmount: (bonusAmount) => {
    const currentState = get();
    if (
      currentState.fundsOut === "Ecosystem" &&
      (currentState.country === "ro" || currentState.country === "pl")
    ) {
      set({ bonusAmount });
    }
  },
  setBonusCurrency: (bonusCurrency) => {
    if (get().fundsOut === "Ecosystem") {
      set({ bonusCurrency });
    }
  },

  setDeliveryTime: (deliveryTime) => {
    if (get().fundsOut === "Ecosystem" || get().fundsOut === "Cash") {
      set({ deliveryTime: "Instant" });
    } else {
      set({ deliveryTime: "1-2 Business days" });
    }
  },
}));

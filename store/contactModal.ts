import { create } from 'zustand'

type ContactModalType = 'demo' | 'contact' | 'try'

interface ContactModalStore {
  isOpen: boolean
  type: ContactModalType
  open: (type: ContactModalType) => void
  close: () => void
}

export const useContactModal = create<ContactModalStore>((set) => ({
  isOpen: false,
  type: 'contact',
  open: (type) => {
    // Check if Crisp is available
    if (typeof window !== 'undefined' && window.$crisp) {
      // Open Crisp with appropriate context based on the type
      switch (type) {
        case 'demo':
          // Set appropriate session data if needed
          window.$crisp.push(['set', 'session:data', [[['requestType', 'demo']]]])
          window.$crisp.push(['do', 'chat:open'])
          break
        case 'contact':
          window.$crisp.push(['set', 'session:data', [[['requestType', 'contact']]]])
          window.$crisp.push(['do', 'chat:open'])
          break
        case 'try':
          window.$crisp.push(['set', 'session:data', [[['requestType', 'trial']]]])
          window.$crisp.push(['do', 'chat:open'])
          break
      }

      // We're not opening our modal since we've opened Crisp instead
      return set({ isOpen: false, type })
    } else {
      // Crisp is not available, open our custom modal
      return set({ isOpen: true, type })
    }
  },
  close: () => set({ isOpen: false }),
}))

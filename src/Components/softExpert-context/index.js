import { createContext } from 'react'

const {
    Provider: LanguageProvider,
    Consumer: LanguageConsumer,
} = createContext()

export {
    LanguageProvider,
    LanguageConsumer,
}
import { atom } from "jotai";
import { atomWithStorage } from 'jotai/utils'

export const languageAtom = atom<String>('EN')
export const darkModeAtom = atomWithStorage('darkmode', true)
export const locationAtom = atom<String>('')

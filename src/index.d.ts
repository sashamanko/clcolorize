import { Colors } from "./types"

declare const clcolorize: Colors & { createColors: (enabled?: boolean) => Colors }
declare const clc: (string: string, style: (keyof Omit<Colors, 'isColorSupported'>)[]) => string

export default clcolorize;
export {
  clcolorize,
  clc
}
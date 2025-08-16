// Temporary shims to reduce editor errors until npm deps are installed
// Remove this file after running `npm install`

declare namespace JSX {
	interface IntrinsicElements {
		[elemName: string]: any
	}
}

declare module 'react' {
	export const useState: any
	export const useEffect: any
	const React: any
	export default React
}

declare module 'next' {
	export type Metadata = any
}

declare module 'next/image-types/global' {} 
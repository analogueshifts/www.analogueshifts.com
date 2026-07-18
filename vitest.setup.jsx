import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

// next/image relies on Next's own image loader, which isn't available outside
// the Next.js build pipeline. Render it as a plain <img> in tests instead.
vi.mock('next/image', () => ({
    __esModule: true,
    default: props => {
        const { src, alt, ...rest } = props
        const resolvedSrc = typeof src === 'string' ? src : src?.src
        // eslint-disable-next-line @next/next/no-img-element
        return <img src={resolvedSrc} alt={alt || ''} {...rest} />
    },
}))

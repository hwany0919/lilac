import '@testing-library/jest-dom'
import { vi } from 'vitest'

// SVG 모킹
vi.mock('*.svg?react', () => ({
    default: vi.fn(() => 'svg'),
}))

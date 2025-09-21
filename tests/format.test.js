import { describe, it, expect } from 'vitest'
import { formatMoney } from '../src/utils/formatters'

describe('formatMoney', () => {
  it('deve formatar número inteiro para moeda brasileira', () => {
    expect(formatMoney(1000)).toBe('1.000,00')
  })

  it('deve formatar número decimal corretamente', () => {
    expect(formatMoney(1234.5)).toBe('1.234,50')
  })

  it('deve manter duas casas decimais', () => {
    expect(formatMoney(10.1)).toBe('10,10')
  })

  it('deve funcionar com zero', () => {
    expect(formatMoney(0)).toBe('0,00')
  })
})

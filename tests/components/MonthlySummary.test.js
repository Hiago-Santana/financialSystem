// tests/components/MonthlySummary.test.js
import { mount } from '@vue/test-utils'
import MonthySummary from '../../src/pages/reports/components/MonthySummary.vue'

describe('MonthSummary.vue (integração)', () => {
  it('deve exibir corretamente receitas, despesas e saldo líquido', () => {
    const transactions = [
      { id: 1, type: 'revenue', value: 200 },
      { id: 2, type: 'expense', value: -50 },
      { id: 3, type: 'revenue', value: 100 },
      { id: 4, type: 'expense', value: -30 },
    ]

    const wrapper = mount(MonthySummary, {
      props: { transactions }
    })

    // Verifica total de receitas
    expect(wrapper.html()).toContain('R$ 300') // 200 + 100

    // Verifica total de despesas
    expect(wrapper.html()).toContain('R$ -80') // -50 + -30

    // Verifica saldo líquido
    expect(wrapper.html()).toContain('R$ 220') // 300 + (-80)
  })
})

test('add', () => {
  expect(2 + 2).toBe(4)
  expect(2 + 3).not.toBe(4);
})

test('boolean', () => {
  expect(1).toBeTruthy()
  expect(0).toBeFalsy()
})

test('more num', () => {
  expect(4).toBeGreaterThan(3)
  expect(3).toBeLessThan(4)
})

test('object', () => {
  // 完全相同
  expect({ name: 'qxa' }).toBe({ name: 'qxa' });
  // 值相同
  expect({ name: 'qxa' }).toEqual({ name: 'qxa' })
})

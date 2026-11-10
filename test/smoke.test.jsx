import { expect, test, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../src/App.jsx'

const at = (path) => render(<MemoryRouter initialEntries={[path]}><App /></MemoryRouter>)

test.each(["/","/about","/tasting","/menu","/reservation","/contact"])('renders %s', (path) => {
  const { container } = at(path)
  expect(container.querySelector('h1, h2, h3')?.textContent).toBeTruthy()
})

test('the form reports success only after the endpoint accepted it', async () => {
  vi.stubEnv('VITE_FORM_ENDPOINT', 'https://forms.example/f/1')
  const fetch = vi.fn().mockResolvedValue({ ok: false, status: 500 })
  vi.stubGlobal('fetch', fetch)
  const { container } = at("/reservation")
  const form = container.querySelector('form')
  fireEvent.change(form.querySelector('[name=name]'), { target: { value: 'Ada' } })
  fireEvent.change(form.querySelector('[name=phone]'), { target: { value: '05551234567' } })
  fireEvent.submit(form)
  expect(await screen.findByRole('alert')).toBeTruthy()
  expect(screen.queryByText(/Rezervasyon talebiniz alındı/)).toBeNull()
  fetch.mockResolvedValue({ ok: true })
  fireEvent.submit(form)
  expect(await screen.findByText(/Rezervasyon talebiniz alındı/)).toBeTruthy()
  expect(fetch).toHaveBeenLastCalledWith('https://forms.example/f/1', expect.objectContaining({ method: 'POST' }))
})

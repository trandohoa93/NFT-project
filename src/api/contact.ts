import type { ContactForm } from '@/types'
import request from '@/utils/request'

type ContactFormWithoutAgreeTerms = Omit<ContactForm, 'agreeTerms'>

export function newContact(data: ContactForm) {
  const { agreeTerms, ...filteredData } = data
  return request.post(`${import.meta.env.VITE_APP_API_URL}/api/users/contact`, filteredData as ContactFormWithoutAgreeTerms)
}

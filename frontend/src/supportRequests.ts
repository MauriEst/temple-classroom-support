export type SupportRequestPayload = {
  name: string
  email: string
  classroom: string
  // choices match the Django model: 'projector' | 'computer' | 'audio' | 'other'
  issue_type: 'projector' | 'computer' | 'audio' | 'other' | string
  description: string
}

/**
 * Submit a support request to the backend.
 * POSTs to `/api/requests/submit/` (mounted in `backend/classroom_support/urls.py`).
 * Throws an Error on non-2xx responses.
 */
export async function submitSupportRequest(payload: SupportRequestPayload): Promise<any> {
  const res = await fetch('/api/requests/submit/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    // Try to capture backend error message when available
    let message: string
    try {
      const json = await res.json()
      message = JSON.stringify(json)
    } catch (e) {
      message = await res.text()
    }
    throw new Error(`Failed to submit support request: ${res.status} ${res.statusText} - ${message}`)
  }

  return res.json()
}

/* Example usage (place inside a React component or service):
import { submitSupportRequest } from './supportRequests'

const payload = {
  name: 'Jane Doe',
  email: 'jane@example.com',
  classroom: 'Room 101',
  issue_type: 'projector',
  description: 'Projector will not power on',
}

submitSupportRequest(payload)
  .then((created) => console.log('created', created))
  .catch((err) => console.error('submit error', err))
*/

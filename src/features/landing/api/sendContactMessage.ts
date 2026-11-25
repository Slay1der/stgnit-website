export type ContactMessage = {
  name: string;
  email: string;
  audience: string;
  message: string;
};

const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

/**
 * Sends a contact message as JSON to VITE_CONTACT_ENDPOINT.
 * Throws when no endpoint is configured or the server rejects the request.
 */
export async function sendContactMessage(payload: ContactMessage): Promise<void> {
  if (!ENDPOINT) {
    throw new Error('The contact form isn’t connected yet. Please reach us on social media for now.');
  }
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    throw new Error('We couldn’t send your message. Check your connection and try again.');
  }
}

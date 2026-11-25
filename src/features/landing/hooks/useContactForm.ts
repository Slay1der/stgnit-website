import { useState, type FormEvent } from 'react';
import { sendContactMessage, type ContactMessage } from '../api/sendContactMessage';

type Status = 'idle' | 'sending' | 'sent' | 'error';
type Errors = Partial<Record<keyof ContactMessage, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(v: ContactMessage): Errors {
  const errors: Errors = {};
  if (!v.name.trim()) errors.name = 'Enter your name.';
  if (!EMAIL_PATTERN.test(v.email.trim())) errors.email = 'Enter an email like name@example.com.';
  if (v.message.trim().length < 10) errors.message = 'Add a few more words so we know how to help.';
  return errors;
}

export function useContactForm(defaultAudience: string) {
  const empty: ContactMessage = { name: '', email: '', audience: defaultAudience, message: '' };
  const [values, setValues] = useState<ContactMessage>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [serverError, setServerError] = useState<string | null>(null);

  const setField = (field: keyof ContactMessage, value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      e.currentTarget.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus('sending');
    setServerError(null);
    try {
      await sendContactMessage(values);
      setStatus('sent');
      setValues(empty);
    } catch (err) {
      setStatus('error');
      setServerError(err instanceof Error ? err.message : 'Something went wrong. Try again.');
    }
  };

  return { values, errors, status, serverError, setField, onSubmit };
}

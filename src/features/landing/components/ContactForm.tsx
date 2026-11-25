import { CONTACT_AUDIENCES } from '../data/content';
import { useContactForm } from '../hooks/useContactForm';
import styles from './ContactForm.module.css';

export function ContactForm() {
  const { values, errors, status, serverError, setField, onSubmit } = useContactForm(CONTACT_AUDIENCES[0]);
  const sending = status === 'sending';

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate aria-label="Contact Stignit">
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="stg-name" className={styles.label}>
            Full name
          </label>
          <input
            id="stg-name"
            name="name"
            type="text"
            autoComplete="name"
            className={styles.control}
            value={values.name}
            onChange={(e) => setField('name', e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'stg-name-error' : undefined}
          />
          {errors.name && (
            <span id="stg-name-error" className={styles.error}>
              {errors.name}
            </span>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor="stg-email" className={styles.label}>
            Email
          </label>
          <input
            id="stg-email"
            name="email"
            type="email"
            autoComplete="email"
            className={styles.control}
            value={values.email}
            onChange={(e) => setField('email', e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'stg-email-error' : undefined}
          />
          {errors.email && (
            <span id="stg-email-error" className={styles.error}>
              {errors.email}
            </span>
          )}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="stg-sector" className={styles.label}>
          I'm reaching out as
        </label>
        <select
          id="stg-sector"
          name="audience"
          className={styles.control}
          value={values.audience}
          onChange={(e) => setField('audience', e.target.value)}
        >
          {CONTACT_AUDIENCES.map((a) => (
            <option key={a}>{a}</option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="stg-msg" className={styles.label}>
          Message
        </label>
        <textarea
          id="stg-msg"
          name="message"
          rows={5}
          className={`${styles.control} ${styles.textarea}`}
          value={values.message}
          onChange={(e) => setField('message', e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'stg-msg-error' : undefined}
        />
        {errors.message && (
          <span id="stg-msg-error" className={styles.error}>
            {errors.message}
          </span>
        )}
      </div>

      <button type="submit" className={styles.submit} disabled={sending}>
        {sending ? 'Sending…' : 'Send message'}
      </button>

      <p className={styles.status} role="status" aria-live="polite">
        {status === 'sent' && <span className={styles.success}>Message sent. The team will get back to you soon.</span>}
        {status === 'error' && serverError && <span className={styles.error}>{serverError}</span>}
      </p>
    </form>
  );
}

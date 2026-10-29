import { DEMO_INQUIRY_EMAIL } from '../data/contactDetails';

const toPlainFields = (formData = {}) =>
  Object.fromEntries(
    Object.entries(formData).map(([key, value]) => [key, value || 'Not provided'])
  );

export async function submitDemoRequest({ subject, formData, honeyPot = '' }) {
  if (honeyPot) {
    return { success: true, spam: true };
  }

  const fields = toPlainFields(formData);
  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(DEMO_INQUIRY_EMAIL)}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        _subject: subject,
        _template: 'table',
        _captcha: 'false',
        _replyto: fields.email,
        ...fields
      })
    }
  );

  const data = await response.json();
  if (!response.ok || (data.success !== true && data.success !== 'true')) {
    throw new Error(data.message || 'Demo request could not be delivered.');
  }

  return data;
}

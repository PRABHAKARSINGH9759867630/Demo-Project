// @ts-ignore
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_qvcrbjs';
const TEMPLATE_ID = 'template_8i2by9c';
const PUBLIC_KEY = 'l5h5yaG4PpbAhZ00r';

export const sendEmail = async (formData: any) => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        message: formData.message,
        to_email: 'admissions@gdgoenkarudrapur.com'
      },
      PUBLIC_KEY
    );
    
    return { success: true, data: response };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}; 
// import { supabase } from './supabase';
// import type { ContactSubmission } from '@/types/types';

// /**
//  * Submit a contact form
//  */
// export async function submitContactForm(data: ContactSubmission): Promise<{ success: boolean; error?: string }> {
//   try {
//     const { error } = await supabase
//       .from('contact_submissions')
//       .insert({
//         name: data.name,
//         email: data.email,
//         message: data.message
//       });

//     if (error) {
//       console.error('Error submitting contact form:', error);
//       return { success: false, error: error.message };
//     }

//     return { success: true };
//   } catch (err) {
//     console.error('Unexpected error submitting contact form:', err);
//     return { success: false, error: 'An unexpected error occurred' };
//   }
// }


import { supabase } from './supabase';
import type { ContactSubmission } from '@/types/types';

export async function submitContactForm(
  data: ContactSubmission
): Promise<{ success: boolean; error?: string }> {
  try {
    // Save to database
    const { error: dbError } = await supabase
      .from('contact_submissions')
      .insert({
        name: data.name,
        email: data.email,
        message: data.message
      });

    if (dbError) {
      return { success: false, error: dbError.message };
    }

    // Send email via edge function
    const { error: emailError } = await supabase.functions.invoke(
      'send-contact-email',
      { body: data,
        headers: {
          "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
      } }
    );

    if (emailError) {
       console.error('Email Error Details:', emailError);
      return { success: false, error: 'Message saved but email failed' };
    }

    return { success: true };
  } catch {
    return { success: false, error: 'Unexpected error occurred' };
  }
}
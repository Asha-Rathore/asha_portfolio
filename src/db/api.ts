import { supabase } from './supabase';
import type { ContactSubmission } from '@/types/types';

/**
 * Submit a contact form
 */
export async function submitContactForm(data: ContactSubmission): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from('contact_submissions')
      .insert({
        name: data.name,
        email: data.email,
        message: data.message
      });

    if (error) {
      console.error('Error submitting contact form:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error('Unexpected error submitting contact form:', err);
    return { success: false, error: 'An unexpected error occurred' };
  }
}

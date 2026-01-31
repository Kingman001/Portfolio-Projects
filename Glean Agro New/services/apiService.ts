
/**
 * API Service for Glean Agro
 * Currently implements mock handlers that simulate backend latency.
 * Replace the logic inside these methods with real `fetch()` calls to your production database.
 */

export interface ContactSubmission {
  fullName: string;
  email: string;
  interest: string;
  message: string;
}

export const apiService = {
  /**
   * Submits a contact form message
   */
  async submitContactForm(data: ContactSubmission): Promise<{ success: boolean }> {
    console.log("Submit Contact Form to Backend:", data);
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    return { success: true };
  },

  /**
   * Subscribes an email to the newsletter
   */
  async subscribeNewsletter(email: string): Promise<{ success: boolean }> {
    console.log("Subscribe Email to Newsletter:", email);
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1200));
    return { success: true };
  },

  /**
   * Submits a quote request for industrial/retail products
   */
  async submitQuoteRequest(items: any[]): Promise<{ success: boolean }> {
    console.log("Submit Quote Request to Backend:", items);
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    return { success: true };
  }
};

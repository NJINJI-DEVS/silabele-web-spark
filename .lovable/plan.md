

## Set Up Contact Form Submission with Resend

### Prerequisites (Required Before Implementation)

1. **Enable Lovable Cloud** — needed to deploy edge functions and store secrets securely. You'll need to enable this from the Cloud tab in the sidebar.

2. **Get a Resend API Key** — sign up at [resend.com](https://resend.com), verify your domain (or use the free sandbox), and grab your API key.

### Implementation Plan

Once Cloud is enabled:

1. **Store the Resend API key** as a secret (`RESEND_API_KEY`)

2. **Create an edge function** (`supabase/functions/send-contact-email/index.ts`) that:
   - Receives form data (name, email, phone, service, message)
   - Validates required fields
   - Sends an email to `info@silabele.com` via Resend's API
   - Returns success/error response
   - Includes proper CORS headers

3. **Update `src/components/Contact.tsx`** to:
   - Call the edge function instead of the simulated timeout
   - Handle success/error responses with appropriate toast messages
   - Show proper loading state during submission

### Next Step

Please enable **Lovable Cloud** from the Cloud tab in the sidebar, then let me know so we can proceed with the setup.


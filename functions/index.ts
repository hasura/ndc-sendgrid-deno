import { sendSimpleMail, IResult } from 'https://deno.land/x/sendgrid@0.0.3/mod.ts';

/**
 * Uses the SendGrid API to send an email.
 *
 * @param subject The email subject
 * @param to The address to send the email to
 * @param from Who to list as the sender of the email
 * @param plain The plaintext content of the email
 * @param html The HTML content of the email
 * @returns Success or errors
 */
export async function send(subject: string, to: string, from: string, plain: string, html: string ): Promise<IResult> {
	const API_KEY = Deno.env.get("SENDGRID_API_KEY");

	if(! API_KEY) {
		throw new Error('Error: SENDGRID_API_KEY environment variable must be set.');
	}

	const response = await sendSimpleMail(
		{
			subject,
			to: [{ email: to }],
			from: { email: from },
			content: [
				{ type: "text/plain", value: plain },
				{ type: "text/html", value: html },
			],
		},
		{
			apiKey: API_KEY,
		},
	);

	return response;
}

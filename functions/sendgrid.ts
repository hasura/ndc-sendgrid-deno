import { sendSimpleMail, IResult } from "https://deno.land/x/sendgrid/mod.ts";

export async function send(subject: string, to: string, from: string, plain: string, html: string ): Promise<IResult> {
	const API_KEY = Deno.env.get("SENDGRID_API_KEY");

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
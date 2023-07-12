import { mailOptions, transporter } from "../../../../config/nodeMailer";

import { NextResponse } from 'next/server'
 
export async function POST(req, res) {
    const data = await req.json();
  
    try {
        await transporter.sendMail({
        ...mailOptions,
        subject: data.subject,
        "text": "Test",
        html: `<p>From: ${data.email}</p>\n<p>Name: ${data.name}</p>\n<p>No. HP: ${data.hp}\n<p>Message: ${data.ulasan}</p>`
        })
    } catch (error) {
        console.log(error);
    }
 
  return NextResponse.json({ name: 'Email has been send!' })
}
// Download the helper library from https://www.twilio.com/docs/node/install
import twilio from "twilio";
import dotenv from "dotenv";

dotenv.config();

// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const senderPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const client = twilio(accountSid, authToken);

export const sendSMSMessage = async (smsMessage, receiverPhoneNumber) => {
  const message = await client.messages.create({
    body: smsMessage,
    from: senderPhoneNumber,
    to: receiverPhoneNumber,
  });

  console.log("Sent message ID: ", message.sid);
};

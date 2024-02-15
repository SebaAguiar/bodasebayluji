/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/

import { publicProcedure } from '@/server/trpc';
import { xata } from '@/xata';
import { z } from 'zod';
import nodemailer from 'nodemailer';
import { TableEmails } from '@/utils/tables';

/****************************************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.REAL_EMAIL,
    pass: process.env.MY_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/
export const saveClientMessage = publicProcedure
  .input(
    z.object({
      subject: z.string(),
      fullname: z.string().max(191),
      email: z.string().max(191),
      message: z.string().max(600),
    }),
  )
  .mutation(async ({ input }) => {
    try {
      const message = {
        subject: `Mensaje de parte de ${input.fullname} <${input.email}>: ${input.message}`,
        from: input.email,
        to: process.env.MY_EMAIL,
        message: `Mensaje de parte de ${input.fullname} <${input.email}>: ${input.message}`,
      };
      console.log(message);
      const data = await xata.db[TableEmails].create(input);
      if (!data)
        return {
          response: 'No se ha podido guardar',
        };
      const sentMessage = await transporter.sendMail(message);
      if (sentMessage.response.includes('OK')) {
        return {
          response: 'Gracias por su mensaje',
        };
      }
    } catch (error) {
      console.log(error);
      return {
        response: 'Ha ocurrido un error',
      };
    }
  });

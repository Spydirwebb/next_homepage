// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.

import { string } from "zod";

// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  studies: Array<Study>;
};

export type Contact ={
  id: string;
  name: string;
  email: string;
  phone: string;
};

export type Study = {
  id: string;
  name: string;
  sponsor: string;
  CRA: Array<Contact>;
  websites: Websites;
  visits: Array<number>;
  lab_kits: Array<Lab_Kit>;
};

export type Websites = {
  study_id: string;
  edc: string;
  irt: string;
  central_labs: string;
  safety_portal: string;
  irb: IRB;
};

export type Lab_Kit = {
  study_id: string;
  visit_number: number;
  exp_date: Date;
};

export type IRB = {
  name: string;
  website: string;
}

/*
// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};
*/
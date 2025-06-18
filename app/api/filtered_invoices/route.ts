import { fetchFilteredInvoices } from '@/app/lib/data';

export async function GET(request: Request) {
    try {
        const query = new URLSearchParams(request.url).get('query') || '';
        const invoices = await fetchFilteredInvoices(query, 1);
        return Response.json(invoices);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}

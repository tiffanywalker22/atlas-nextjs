export default async function Page({ params }: { params: { id: string } }) {

    await new Promise((r) => setTimeout(r, 3000));
    return <div>Topic Page: {params.id}</div>;
}

import { Head } from '@inertiajs/react';

export default function Index({ products }) {
    return (
        <>
            <Head title="Products" />

            <div className="min-h-screen bg-gray-100">
                <header className="border-b bg-white">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">
                                CartForge
                            </h1>
                            <p className="text-sm text-gray-500">
                                E-commerce Management System
                            </p>
                        </div>

                        <div className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700">
                            Admin
                        </div>
                    </div>
                </header>

                <main className="mx-auto max-w-7xl px-6 py-8">
                    <div className="mb-8 flex items-center justify-between">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900">
                                Products
                            </h2>

                            <p className="mt-1 text-gray-500">
                                Manage your product catalog.
                            </p>
                        </div>

                        <button
                            type="button"
                            className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800"
                        >
                            Add Product
                        </button>
                    </div>

                    <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                        Product
                                    </th>

                                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                        Category
                                    </th>

                                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                        Variants
                                    </th>

                                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                        Status
                                    </th>

                                    <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                                        Actions
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200 bg-white">
                                {products.data.map((product) => (
                                    <tr key={product.id}>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <div className="font-medium text-gray-900">
                                                {product.name}
                                            </div>

                                            <div className="text-sm text-gray-500">
                                                /{product.slug}
                                            </div>
                                        </td>

                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                                            {product.category?.name ??
                                                'Uncategorized'}
                                        </td>

                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                                            {product.variants.length}
                                        </td>

                                        <td className="whitespace-nowrap px-6 py-4">
                                            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium capitalize text-gray-700">
                                                {product.status}
                                            </span>
                                        </td>

                                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm">
                                            <button
                                                type="button"
                                                className="font-medium text-gray-900 hover:underline"
                                            >
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-4 text-sm text-gray-500">
                        Showing {products.from ?? 0}–{products.to ?? 0} of{' '}
                        {products.total} products
                    </div>
                </main>
            </div>
        </>
    );
}

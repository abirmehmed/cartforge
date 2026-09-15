import React from 'react';

export default function Dashboard() {
    return (
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
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Dashboard
                    </h2>

                    <p className="mt-1 text-gray-500">
                        Welcome to CartForge administration.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <StatCard
                        title="Total Orders"
                        value="0"
                        description="All orders"
                    />

                    <StatCard
                        title="Products"
                        value="0"
                        description="Active products"
                    />

                    <StatCard
                        title="Customers"
                        value="0"
                        description="Registered customers"
                    />

                    <StatCard
                        title="Revenue"
                        value="৳0"
                        description="Total revenue"
                    />
                </div>

                <div className="mt-8 grid gap-6 lg:grid-cols-3">
                    <DashboardCard
                        title="Orders"
                        description="Manage customer orders and their status."
                    />

                    <DashboardCard
                        title="Products"
                        description="Manage products, categories and inventory."
                    />

                    <DashboardCard
                        title="Couriers"
                        description="Track courier performance and delivery success."
                    />
                </div>
            </main>
        </div>
    );
}

function StatCard({ title, value, description }) {
    return (
        <div className="rounded-xl border bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">{title}</p>

            <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>

            <p className="mt-1 text-sm text-gray-400">{description}</p>
        </div>
    );
}

function DashboardCard({ title, description }) {
    return (
        <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

            <p className="mt-2 text-sm text-gray-500">{description}</p>

            <button className="mt-5 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
                Open
            </button>
        </div>
    );
}

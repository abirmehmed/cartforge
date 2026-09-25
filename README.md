# CartForge

> A production-grade e-commerce, order management, inventory, courier, and business automation platform.

CartForge is a full-stack e-commerce management platform built to connect the entire commerce lifecycle in one system.

From products and inventory to customers, orders, payments, courier operations, automation, and analytics — CartForge is designed as a unified business platform rather than a simple e-commerce CRUD application.

## 🚧 Project Status

**Active Development**

CartForge is currently being built from the foundation upward.

The project is public so the architecture, development process, implementation decisions, and progress can be followed openly.

> This project is not production-ready yet. Features and architecture may change significantly during development.

## 🎯 Vision

The goal of CartForge is to build a scalable commerce platform capable of handling:

- Product and catalog management
- Inventory operations
- Customer and CRM workflows
- Order management
- Courier integrations
- Payment processing
- Business automation
- Analytics and reporting
- Role-based administration

The long-term architecture is designed to support APIs, mobile applications, multiple warehouses, multiple courier providers, third-party integrations, and other future extensions.

## 🏗️ Core Concept

CartForge connects the major parts of an e-commerce business:

```text
Customer
   │
   ▼
Storefront
   │
   ▼
Cart
   │
   ▼
Order
   │
   ├──────────► Payment
   │
   ├──────────► Inventory
   │
   ├──────────► Courier
   │
   └──────────► Automation
                    │
                    ▼
               Analytics[200~The objective is to make these systems work together instead of treating them as isolated features.

## ✨ Features

CartForge is being developed around several interconnected systems.

### 📦 Product & Catalog

- Product management
- Product variants / SKUs
- Category management
- Product lifecycle management
- Pricing
- Catalog administration

### 📊 Inventory

- SKU-level inventory
- Inventory movements
- Stock reservation
- Stock adjustments
- Low-stock monitoring
- Multi-warehouse-ready architecture

### 👤 Customer & CRM

- Customer profiles
- Customer order history
- Customer activity
- Customer segmentation
- Customer metrics
- CRM-oriented workflows

### 🛒 Order Management

- Order lifecycle management
- Order status tracking
- Order processing
- Fulfillment workflows
- Cancellation
- Returns
- Refund workflows
- Order history
- Audit trails

### 🚚 Courier Management

- Multiple courier providers
- Courier abstraction layer
- Shipment management
- Delivery tracking
- Delivery success/failure tracking
- Courier performance analytics
- Courier-wise delivery success rate
- Smart courier selection

### 💳 Payments

- Payment abstraction
- Transaction records
- Payment status tracking
- Refund support
- Future payment gateway integrations

### ⚙️ Automation

- Event-driven workflows
- Queue-based processing
- Scheduled jobs
- Order automation
- Inventory automation
- Customer automation
- Notifications

### 📈 Analytics & Reporting

- Sales analytics
- Order analytics
- Inventory reporting
- Customer analytics
- Courier performance
- Delivery success metrics
- Revenue reporting
- Operational dashboards

## 🚧 Current Implementation

### Implemented

- Laravel application foundation
- React + Inertia frontend
- MariaDB database
- Authentication
- Email verification
- Password reset
- Profile management
- Role-based access control foundation
- Roles and permissions
- Product catalog foundation
- Categories
- Products
- Product variants / SKUs
- Factories and seeders
- Admin product listing foundation

### In Development

- Admin authorization hardening
- Product CRUD
- Category management
- Inventory system
- Customer / CRM system
- Cart and checkout
- Order management
- Courier integration
- Payment system
- Automation
- Analytics and reporting

The objective is to make these systems work together instead of treating them as isolated features.

## 🧱 Architecture

CartForge is designed as a modular, domain-oriented Laravel application.

The system separates responsibilities between the presentation layer, application logic, domain operations, persistence, integrations, and asynchronous processing.

```text
                    ┌─────────────────────┐
                    │      Frontend       │
                    │   React + Inertia    │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │     Controllers     │
                    │   HTTP / API Layer   │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Application Layer   │
                    │ Actions / Services  │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │    Domain Logic     │
                    │ Business Operations │
                    └──────────┬──────────┘
                               │
                 ┌─────────────┼─────────────┐
                 ▼             ▼             ▼
          ┌────────────┐ ┌────────────┐ ┌────────────┐
          │  Database  │ │   Queue    │ │  External  │
          │   / ORM    │ │   / Jobs   │ │   APIs     │
          └────────────┘ └────────────┘ └────────────┘
Architectural Principles
Separation of concerns
SOLID principles
Reusable business logic
Thin controllers
Explicit application actions
Service-oriented business operations where appropriate
Form Requests for validation
Policies for authorization
API Resources for API responses
Events and listeners for decoupled workflows
Jobs for asynchronous processing
Transactions for critical business operations
Database constraints for data integrity
Abstraction around external integrations
Testable business logic
API-ready architecture

CartForge is being designed so that the same business operations can eventually serve the web application, APIs, mobile applications, background jobs, and integrations without duplicating core business logic.

🛠 Tech Stack
Backend
PHP 8.4+
Laravel 13
Laravel Eloquent ORM
Laravel Queues
Laravel Scheduler
Laravel Events / Listeners
Laravel Policies
Laravel Form Requests
Laravel API Resources
Frontend
React
Inertia.js
TypeScript / JavaScript
Vite
Tailwind CSS
Database
MariaDB
MySQL-compatible database architecture
Relational data modeling
Foreign keys
Database indexes
Transactions
Development & Tooling
Composer
npm
Git
GitHub
Linux
Vite development server
Planned Infrastructure
Redis
Queue workers
Scheduled background jobs
Nginx
PHP-FPM
Production monitoring
Logging and error tracking
🧩 System Modules

The application is organized around major business domains rather than individual pages.

CartForge
│
├── Identity & Access
│   ├── Authentication
│   ├── Roles
│   └── Permissions
│
├── Catalog
│   ├── Categories
│   ├── Products
│   └── Product Variants
│
├── Inventory
│   ├── Stock
│   ├── Movements
│   ├── Reservations
│   └── Warehouses
│
├── Customers
│   ├── Profiles
│   ├── Addresses
│   ├── Orders
│   └── Customer Metrics
│
├── Commerce
│   ├── Cart
│   ├── Checkout
│   └── Orders
│
├── Fulfillment
│   ├── Shipments
│   ├── Couriers
│   └── Delivery Tracking
│
├── Payments
│   ├── Transactions
│   ├── Payment Methods
│   └── Refunds
│
├── Automation
│   ├── Events
│   ├── Jobs
│   ├── Notifications
│   └── Scheduled Tasks
│
└── Analytics
    ├── Sales
    ├── Orders
    ├── Inventory
    ├── Customers
    └── Courier Performance


## 🧠 Development Philosophy

CartForge is being built incrementally rather than generating the entire system at once.

Each major capability is designed, implemented, tested, verified, and integrated before moving to the next layer.

The development process prioritizes:

- Correct domain modeling
- Clear ownership of business data
- Explicit business rules
- Small, composable components
- Reusable application logic
- Strong database integrity
- Automated testing
- Secure authorization
- Observable system behavior
- Performance-aware design
- Future extensibility

### Build Principles

#### Think in Entities

Features are modeled around real business entities and their relationships rather than individual UI pages.

Examples:

- Product
- Product Variant
- Category
- Customer
- Order
- Order Item
- Inventory Movement
- Shipment
- Payment
- Courier

#### Separate Business Logic

Controllers should coordinate requests and responses rather than contain complex business rules.

Business operations should live in appropriate application services, actions, domain objects, jobs, events, or other dedicated components.

#### Design for Change

CartForge is designed with future requirements in mind without prematurely implementing every possible feature.

The architecture should allow future support for:

- Mobile applications
- Multiple warehouses
- Multiple courier providers
- Multiple payment providers
- Third-party integrations
- Advanced automation
- AI-assisted operations
- High-volume order processing

## 🔄 Business Flow

The primary commerce lifecycle is:

```text
Customer
   │
   ▼
Browse Products
   │
   ▼
Add to Cart
   │
   ▼
Checkout
   │
   ▼
Create Order
   │
   ├──────────────► Payment
   │
   ├──────────────► Inventory
   │
   └──────────────► Customer Record
                       │
                       ▼
                  Fulfillment
                       │
                       ▼
                    Courier
                       │
                       ▼
                   Delivery
                       │
                       ▼
                Order Completed
                       │
                       ▼
                   Analytics
````

Each stage can trigger additional workflows without tightly coupling every subsystem to every other subsystem.

## 🔗 Event-Driven Workflows

CartForge will use events to connect business operations where appropriate.

For example:

```text
OrderPlaced
    │
    ├──► ReserveInventory
    │
    ├──► SendOrderNotification
    │
    ├──► UpdateCustomerMetrics
    │
    ├──► PrepareCourierShipment
    │
    └──► RecordAuditLog
```

This allows independent processes to react to important business events without placing every operation inside a single controller or service.

Long-running or non-critical operations can be moved to queues and processed asynchronously.

## 🗃️ Data Flow

Data moves through the system according to clear ownership and relationships.

```text
Product
   │
   └──► Product Variant / SKU
                │
                ▼
             Inventory
                │
                ▼
             Order Item
                │
                ▼
               Order
                │
        ┌───────┼────────┐
        ▼       ▼        ▼
     Customer Payment  Shipment
                         │
                         ▼
                      Courier
                         │
                         ▼
                      Delivery
```

The database is responsible for maintaining durable business state and enforcing structural integrity through:

* Foreign keys
* Unique constraints
* Indexes
* Transactions
* Nullable relationships where appropriate
* Explicit status fields
* Audit-oriented records where required

## 🔐 Authorization Flow

Administrative operations will pass through multiple layers of protection:

```text
Request
   │
   ▼
Authentication
   │
   ▼
Authorization
   │
   ▼
Permission Check
   │
   ▼
Validation
   │
   ▼
Business Operation
   │
   ▼
Database
```

Authentication identifies the user.

Authorization determines whether the user can perform an operation.

Validation ensures the supplied data is acceptable before business logic executes.

Business logic then performs the operation under the appropriate transaction and integrity rules.

## 🧪 Quality Process

Major changes should follow a repeatable workflow:

```text
Design
  │
  ▼
Implement
  │
  ▼
Lint / Format
  │
  ▼
Test
  │
  ▼
Database Verification
  │
  ▼
Manual Verification
  │
  ▼
Git Commit
  │
  ▼
Push
```

The objective is to keep the repository in a working state throughout development.



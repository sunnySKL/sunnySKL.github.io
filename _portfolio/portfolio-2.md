---
title: "Postal Service Management System"
excerpt: "Project for COSC 3380"
collection: portfolio
---


## Project Description
This project is a comprehensive web-based system developed for simulating the operations of a postal service and shop network. The platform supports multi-role functionality including Admins, Employees, Drivers/Pilots, Customer Support, and Customers. Core features include package handling, trip management, inventory and shop sales, customer support ticketing, and live reporting.

The goal of the system is to digitally manage last-mile deliveries, package status tracking, customer requests, inventory management, and retail purchases, while ensuring data consistency and real-time visibility for stakeholders.

<h2>Project Screenshots</h2>

<div style="display: flex; flex-wrap: wrap; gap: 24px; justify-content: space-between;">

  <div style="width: 48%;">
    <img src="/3380pics/admin.png" alt="Admin Dashboard" style="width: 100%;" />
    <p><em>Admin dashboard for managing users, facilities, vehicles, inventory, and viewing system-wide reports.</em></p>
  </div>

  <div style="width: 48%;">
    <img src="/3380pics/clerk.png" alt="Clerk View" style="width: 100%;" />
    <p><em>Clerk interface for handling package intake, processing shop sales, and scanning deliveries at the facility.</em></p>
  </div>

  <div style="width: 48%;">
    <img src="/3380pics/customer_sup.png" alt="Customer Support View" style="width: 100%;" />
    <p><em>Customer support dashboard to manage, respond to, and resolve support tickets from users.</em></p>
  </div>

  <div style="width: 48%;">
    <img src="/3380pics/customer.png" alt="Customer View" style="width: 100%;" />
    <p><em>Customer portal to send packages, track shipments, view purchase history, and create support tickets.</em></p>
  </div>

  <div style="width: 48%;">
    <img src="/3380pics/driver.png" alt="Driver View" style="width: 100%;" />
    <p><em>Driver interface for managing assigned delivery trips and updating package statuses during transit.</em></p>
  </div>

  <div style="width: 48%;">
    <img src="/3380pics/home.png" alt="Home Page" style="width: 100%;" />
    <p><em>Landing page with access to user login, system overview, and quick navigation to major features.</em></p>
  </div>

</div>







## Key Features:
Role-Based Dashboards:Each user role has its own secure dashboard:

Admins can manage users, inventory, reports, and system settings.

Employees (e.g., clerks, support, drivers) have job-specific interfaces.

Customers can send packages, track history, and submit support requests.

Trip & Delivery Tracking:Trips can be created and assigned to drivers or pilots, linking to packages, vehicles, and facilities. Delivery status is updated live and historical tracking is stored per package.

Shop & Inventory Module:Each postal facility can run a shop. Shop employees can process sales, manage inventory, receive new stock, and generate daily sales reports. Low-stock alerts are triggered automatically.

Support Ticket System:Customers can file issues (lost, delayed, damaged). Support agents reply in threads, assign priorities, and track resolution status. Ticket response times and performance are logged.

Advanced Reporting Engine:Live reports include package volume, route efficiency, sales analytics, and inventory trends. AJAX-powered data loading ensures dynamic refresh with minimal delay.

Triggers & Automation:Triggers enforce business rules, such as auto-generating alerts for low stock, long trips, or first-time support responses.


## Tech Stack:
Backend: PHP (OOP), MySQL
Frontend: HTML, CSS, minimal JS, AJAX
Database: MySQL with Foreign Key Constraints, Triggers
Deployment: XAMPP (localhost), SQL dump support for portability




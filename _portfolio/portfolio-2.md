---
title: "Postal Service Management System"
excerpt: "Project for COSC 3380"
collection: portfolio
---


## Project Description
This project is a comprehensive web-based system developed for simulating the operations of a postal service and shop network. The platform supports multi-role functionality including Admins, Employees, Drivers/Pilots, Customer Support, and Customers. Core features include package handling, trip management, inventory and shop sales, customer support ticketing, and live reporting.

The goal of the system is to digitally manage last-mile deliveries, package status tracking, customer requests, inventory management, and retail purchases, while ensuring data consistency and real-time visibility for stakeholders.

## Project Screenshots

### Home Page  
![Home Page](/3380pics/home.png)  
*Landing page providing user login access and an overview of system features like shipment, inventory, and support.*

### Customer View  
![Customer Dashboard](/3380pics/customer.png)  
*Portal for customers to send packages, track deliveries, manage profiles, purchase shop items, and submit support tickets.*

### Admin Dashboard  
![Admin Dashboard](/3380pics/admin.png)  
*Admin panel with full system access, including user, facility, inventory, and vehicle management, plus detailed analytics.*

### Manager Dashboard  
![Manager Dashboard](/3380pics/manager.png)  
*Manager interface for overseeing facility operations, managing employees, viewing reports, and handling support tickets.*

### Clerk View  
![Clerk Dashboard](/3380pics/clerk.png)  
*Clerk view for processing incoming packages, managing sales transactions, and scanning deliveries at facility checkpoints.*

### Customer Support View  
![Customer Support Dashboard](/3380pics/customer_sup.png)  
*Support dashboard for responding to submitted tickets, resolving user issues, and managing communication workflows.*

### Driver View  
![Driver Dashboard](/3380pics/driver.png)  
*Driver interface to manage assigned trips, update package statuses in real-time, and track delivery progress.*







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




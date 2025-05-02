# Service Pro Design

A Next.js website builder platform specifically designed for service businesses.

## Project Overview

Service Pro Design is an e-commerce platform that allows small business owners in service industries to quickly build and launch professional websites. The platform provides industry-specific templates, add-ons, and a streamlined onboarding process to get businesses online in days rather than months.

## Key Features

- **Industry-Specific Templates**: Pre-designed templates for plumbers, electricians, cleaners, beauty salons, fitness professionals, and more
- **Modular Add-ons**: Booking systems, SEO tools, domain registration, email hosting, and other business essentials
- **S3 Storage Integration**: Dual bucket system with `service-pro-image` (private) and `site-images` (public)
- **Streamlined Process**: Simple step-by-step website setup with minimal technical knowledge required
- **Post-Purchase Onboarding**: Guided process to collect business information and assets after purchase
- **SEO Optimization**: Built-in SEO features and best practices for service businesses

## Tech Stack

- **Frontend**: Next.js 14 with App Router
- **UI Components**: Tailwind CSS and Shadcn/ui
- **Backend**: Supabase (PostgreSQL, Authentication, Storage)
- **Payments**: Stripe integration for one-time and subscription payments
- **Infrastructure**: Vercel for hosting

## Project Structure

The project is organized into three development phases:

1. **Phase 1**: Homepage and core pages implementation
2. **Phase 2**: Templates and add-ons development and review
3. **Phase 3**: Final implementation, testing, and post-purchase flow

## Getting Started

```bash
# Clone the repository
git clone https://github.com/danhenders/service-pro-design.git

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Start the development server
npm run dev
```

## Storage Infrastructure

- **service-pro-image**: Private bucket for customer uploads and protected content
- **site-images**: Public bucket for website assets, showcase images, and marketing content

## Documentation

Detailed documentation is available in the project files:
- Implementation plans
- Feature specifications
- Project phases
- SEO guidelines

## License

This project is proprietary and all rights are reserved. Unauthorized copying, modification, distribution, or use is strictly prohibited.

# File Upload System Documentation

## Overview

This project uses Cloudflare R2 for file storage, providing a scalable and cost-effective solution for storing customer assets. The implementation allows for direct file uploads to R2 storage using signed URLs.

## Architecture

The file upload system consists of the following components:

### Core Storage Implementation

- **`lib/storage/r2-storage.ts`**: Core implementation of R2 storage functions including:
  - Creating customer folders
  - Generating signed URLs for direct uploads
  - Listing files in a folder
  - Deleting files
  - Managing folder existence

### Server Actions

- **`app/actions/customer-storage.ts`**: Server actions for interacting with R2 storage:
  - `getFileUploadUrl`: Generates a signed URL for uploading files directly to R2
  - `listCustomerFiles`: Lists files in a customer folder
  - `deleteCustomerFile`: Deletes a file from R2 storage
  - `createCustomerFolder`: Creates a folder structure for a customer

### Client Components

- **`components/customer/file-upload.tsx`**: Reusable file upload component for customer-facing pages
- **`app/admin/onboarding/[id]/upload-tab.tsx`**: Asset management for the onboarding process

## Usage Example

### Uploading a File

```typescript
// 1. Get a signed URL for the upload
const urlResult = await getFileUploadUrl(
  customerId,
  folderType, // e.g., "logo", "documents", etc.
  fileName,
  fileType
);

if (!urlResult.success) {
  throw new Error(urlResult.error || 'Failed to get upload URL');
}

// 2. Upload the file directly to R2 using the signed URL
const uploadResponse = await fetch(urlResult.uploadUrl, {
  method: 'PUT',
  body: file,
  headers: {
    'Content-Type': fileType,
  },
});

// 3. The file is now accessible via the returned fileUrl
const fileUrl = urlResult.fileUrl;
```

### Listing Files

```typescript
const result = await listCustomerFiles(customerId, folderType);

if (result.success) {
  const files = result.files;
  // Process files (each has name, size, url, path properties)
}
```

### Deleting Files

```typescript
const result = await deleteCustomerFile(customerId, filePath);

if (result.success) {
  // File deleted successfully
}
```

## Folder Structure

Files are organized by customer ID and folder type:

```
{customerId}/
  ├── logo/
  │   └── file1.png
  │   └── file2.png
  ├── documents/
  │   └── document1.pdf
  │   └── document2.docx
  ├── gallery/
  │   └── image1.jpg
  │   └── image2.png
  └── ...
```

## Benefits of R2 Storage

- Cost-effective compared to other cloud storage options
- No egress fees for reading data
- Compatible with S3 API, making it easy to integrate with existing tools
- Globally distributed for fast access
- Secure access control with signed URLs 

## Testing Stripe Integration

To validate that the Stripe checkout process is working correctly and data is being properly synchronized to Supabase, you can use the included test script.

### Prerequisites

- Stripe test API key (`STRIPE_SECRET_KEY`) set in your `.env` file
- Properly configured Supabase connection
- Node.js environment

### Running the Test Script

The script will create test customers, generate checkout sessions, and simulate card payments using Stripe's test cards.

```bash
# Run with default settings (3 transactions, normal debug level)
npm run test:stripe

# Run with custom number of transactions and debug level
npm run test:stripe -- 5 verbose

# Available debug levels: minimal, normal, verbose
```

### What the Script Does

1. Creates test customers in Stripe
2. Generates checkout sessions with random products
3. Simulates card payments with different test cards
4. Verifies that transactions are properly recorded in Supabase
5. Provides a detailed report on success/failure rates

### Test Cards

The script uses various Stripe test cards to simulate different scenarios:

- `4242 4242 4242 4242` - Successful payment
- `4000 0025 0000 3155` - 3D Secure authentication
- `4000 0000 0000 9995` - Insufficient funds failure
- `4000 0000 0000 9987` - Declined payment
- `3782 8224 6310 005` - American Express successful payment
- `5555 5555 5555 4444` - Mastercard successful payment

### Sample Output

The script provides a detailed summary including:

- Total transactions attempted
- Successful vs. failed payments
- Database sync rate
- Total transaction value processed
- Detailed logs of any problematic transactions

This testing tool helps identify issues in the integration between Stripe and your application database. # serviceprodesign

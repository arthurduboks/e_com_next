# 🛍️ Next.js e-Commerce Store

This is my personal project, Next.js e-Commerce Store, built using Next.js and bootstrapped with `create-next-app`. The store showcases a clean, reactive, and customizable mobile-first UI.

## Highlights ✨

- 🎨 **UI Components**: Crafted with React, Tailwind CSS, DaisyUI, and Framer Motion for smooth animations and transitions.

- 🌐 **State Management**: Leveraged Zustand for a seamless and responsive user experience.

- 💳 **Stripe Payments**: Comprehensive Stripe integration allows for in-app payments. Real-time order status updates enabled through Stripe Webhooks.

- 🔄 **Dynamic Content**: Product pages and their content are dynamically generated, utilizing Stripe CMS and NextJS Dynamic Routes.

- 🔒 **Authentication**: Implemented conditional authentication redirects using NextAuth (Google Sign-In). Stripe payment intent and customer ID are proactively assigned in the database.

## Installation Guide 🛠️

To get this e-commerce store up and running on your local machine, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/nextjs-ecommerce-store.git
    cd nextjs-ecommerce-store
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env.local` file in the root of your project and add the necessary Stripe API keys and any other environment variables you need.

4. **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

5. **Set up Stripe Webhooks (optional):**
    Follow the Stripe documentation to set up webhooks for real-time order updates.

## Preview 🌐

You can check out the live preview of the project here: [e-com-next-beta.vercel.app](https://e-com-next-beta.vercel.app/)

## Deployment 🚀

When you are ready to deploy your site, you can choose a hosting provider like Vercel or Netlify and follow their documentation for Next.js apps.


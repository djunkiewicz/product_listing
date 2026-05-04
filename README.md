This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## See the aplication demo
**https://product-listing-beryl.vercel.app/**

## Running application on your local machine
1. Clone the repository
2. **Create `.env.local` file in the root directory with the following variables:**

```env
API_KEY=your_api_key_here
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Key features
- Header containing a logo and a shopping cart icon
- Product listing page displaying a list of products
- Each product card includes an image, title, description, brand, price, and promotion/discount information with calculated discounted price
- Image component with fallback support for handling broken or missing images
- Cart functionality with a badge showing the number of added items
- Cart displaying a list of added products
- Responsive layout of the application
- Basic UI animations and transitions, such as hover and fade effects

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Troubleshooting: Images from /public not loading

If a photo (for example the adult classes slide) does not appear:

- Place the image in the project's public folder:
  - /public/adult-classes.jpg
  - Full path on your machine: /Users/adityaverma/Documents/project/gymnastics-academy/public/adult-classes.jpg

- Check exact filename and extension (case-sensitive). Common issues:
  - adult-classes.jpg vs Adult-Classes.JPG vs adult-classes.jpeg
  - Make sure the file extension matches what Classes.js references (currently: /adult-classes.jpg).

- Restart the dev server after adding files to public:
  - npm run dev

- Clear browser cache or open an incognito window to avoid cached 404s.

- Use browser devtools → Network to confirm the image URL (e.g., http://localhost:3000/adult-classes.jpg) and check for 404 or other errors.

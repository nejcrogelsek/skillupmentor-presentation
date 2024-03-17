# Todo App

Today you will learn how to use:

1. Latest Next.JS version 14
2. Server / Client components
3. Server actions (instead of API route handlers)
4. Prisma (interacting with the database)
5. Validate api response with zod
6. Folder structure (page.tsx, loading.tsx, error.tsx)
7. Dynamic routes
8. Metadata, import fonts

## Getting Started

Add all required environment variables. Look at `.env.example` file.

Install dependencies:

```bash
npm install
```

Setup prisma

```bash
npx prisma generate
```

```bash
npx prisma migrate dev --name MigrationNameHere  
```

Run the development server:

```bash
npm run dev
```

### Error query:

```bash
// Error example

const data = await prismadb.todoItem.update({
    where: { id: "1" },
    data: { name: "Neki" },
});
```

## Internationalization

Internationalization with next-intl: https://next-intl-docs.vercel.app/docs/getting-started/app-router

## Links
Turbopack, server actions: https://nextjs.org/blog/next-14


## References

-   Website - [@skillupmentor](https://skillupmentor.com/)
-   Github - [@skillupmentor](https://github.com/skillupmentor)

-   LinkedIn - [@nejcrogelsek](https://www.linkedin.com/in/nejcrogelsek/)
-   Github - [@nejcrogelsek](https://github.com/nejcrogelsek)

[Back To The Top](#TodoApp)

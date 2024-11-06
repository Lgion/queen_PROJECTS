import type { Metadata } from "next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

      {children}

    </main>
  );
}

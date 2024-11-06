import "./(nakedComponentParadigm)/assets/scss/index.scss"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      {children}
    </html>
  );
}

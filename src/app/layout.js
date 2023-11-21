import styles from "./styles/global.scss";

export default function RootLayout({
  children,
  seo,
  theme = "light",
  className,
}) {
  return (
    <>
      <html lang="en">
        <body>{children}</body>
      </html>
    </>
  );
}

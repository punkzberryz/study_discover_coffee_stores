import "./globals.css";
import styles from "../styles/page.module.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* <footer className={styles.footer}>
          <p>© 2023 KangTLee</p>
        </footer> */}
      </body>
    </html>
  );
}

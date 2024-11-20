import { monserrat } from './ui/fonst';
import './ui/global.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className= {`${monserrat.className} antialiased'`}>
        <h1>Esta es el layout</h1>
        {children}
        <footer className='py-10 flex justify-center items-center'>
          Hecho por VERCEL
        </footer>
        </body>
    </html>
  );
}

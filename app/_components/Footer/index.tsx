import Image from "next/image";
import Link from 'next/link';

const twStyles = {
  //フッタースタイル
  footerTop:"text-gray-600 body-font",
  footer01:"container bg-gray-30 px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col",
  footer01Left:"w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left",
  footer01LeftTitle:"flex title-font font-medium items-center md:justify-start justify-center text-gray-900",
  footer01Leftsub:"mt-2 text-sm text-gray-500",
  footer01Right:"flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center",
  footer01RightItems:"lg:w-1/4 md:w-1/2 w-full px-4",
  footer01RightH2:"title-font font-medium text-gray-900 tracking-widest text-sm mb-3",
  footer02:"bg-gray-100",
  footer02Base:"container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row",
  footer02Left:"text-gray-500 text-sm text-center sm:text-left",
  footer02Right:"inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start"
}

export default function Footer(){
  return(
    <footer className={`${twStyles.footerTop}`}>
      <div className={`${twStyles.footer01}`}>
        <div className={`${twStyles.footer01Left}`}>
          <div className={`${twStyles.footer01LeftTitle}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-pink-500 rounded-full" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
            <span className="ml-3 text-xl">Next.js　practice</span>
          </div>
          <div className={`${twStyles.footer01Leftsub}`}>
            <p className="mt-2 text-sm text-gray-500">next.jsの使い方について</p>
          </div>
        </div>
        <div className={`${twStyles.footer01Right}`}>
          <div className={`${twStyles.footer01RightItems}`}>
            <h2 className={`${twStyles.footer01RightH2}`}>Tailwingリンク集</h2>
            <nav className="list-none mb-10">
              <li className="mb-3">
                <Link href="https://nerdcave.com/tailwind-cheat-sheet" target="_blank">チートシート</Link>
              </li>
              <li className="mb-3">
                <Link href="https://icones.js.org/" target="_blank">アイコン</Link>
              </li>
              <li className="mb-3">
                <Link href="https://heroicons.com/" target="_blank">アイコン（Hero）</Link>
              </li>
              <li className="mb-3">
                <Link href="https://headlessui.com/" target="_blank">ヘッドレスUI</Link>
              </li>
            </nav>
          </div>
          <div className={`${twStyles.footer01RightItems}`}>
            <h2 className={`${twStyles.footer01RightH2}`}>V0リンク集</h2>
            <nav className="list-none mb-10">
              <li className="mb-3">
                <Link href="https://v0.dev/" target="_blank">V0</Link>
              </li>
              <li className="mb-3">
                <Link href="https://ui.shadcn.com/" target="_blank">shadcn/ui:テンプレート集</Link>
              </li>
              <li className="mb-3">
                <Link href="https://vercel.com/" target="_blank">vercel</Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className={`${twStyles.footer02}`}>
        <div className={`${twStyles.footer02Base}`}>
          <div className={`${twStyles.footer02Left}`}>
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2024 Next.js practice —
              <Link href="https://github.com/sea-yassan33" className="text-gray-600 ml-1" target="_blank">@sea-yassan33</Link>
            </p>
          </div>
          <div className={`${twStyles.footer02Right}`}>
            <Link href="#" className="mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 256 259.3"><path fill="#9EDCF2" d="M200.9 199.8c0 13.9-32.2 25.1-71.9 25.1s-71.9-11.3-71.9-25.1c0-13.9 32.2-25.1 71.9-25.1s71.9 11.2 71.9 25.1m0 0"/><defs><path id="logosGithubOctocat0" d="M98.1 244.8c1.6 7.5 5.5 11.9 9.4 14.5h41.1c5-3.4 10.1-9.8 10.1-21.8v-31s.6-7.7 7.7-10.2c0 0 4.1-2.9-.3-4.5c0 0-19.5-1.6-19.5 14.4v23.6s.8 8.7-3.8 12.3v-29.2s.3-9.3 5.1-12.8c0 0 3.2-5.7-3.8-4.2c0 0-13.4 1.9-14 17.6l-.3 30h-3.2l-.3-30c-.6-15.6-14-17.6-14-17.6c-7-1.6-3.8 4.2-3.8 4.2c4.8 3.5 5.1 12.8 5.1 12.8v29.5c-4.6-3.3-3.8-12.6-3.8-12.6v-23.6c0-16-19.5-14.4-19.5-14.4c-4.5 1.6-.3 4.5-.3 4.5c7 2.6 7.7 10.2 7.7 10.2v21.7z"/></defs><clipPath id="logosGithubOctocat1"><use href="#logosGithubOctocat0"/></clipPath><path fill="#7DBCE7" d="M200.9 199.8c0 13.9-32.2 25.1-71.9 25.1s-71.9-11.3-71.9-25.1c0-13.9 32.2-25.1 71.9-25.1s71.9 11.2 71.9 25.1m0 0" clipPath="url(#logosGithubOctocat1)"/><path fill="#9EDCF2" d="m46.9 125.9l-2.1 7.2s-.5 2.6 1.9 3.1c2.6-.1 2.4-2.5 2.2-3.2zm0 0"/><path fill="#010101" d="m255.8 95.6l.2-.9c-21.1-4.2-42.7-4.3-55.8-3.7c2.1-7.7 2.8-16.7 2.8-26.6c0-14.3-5.4-25.7-14-34.3c1.5-4.9 3.5-15.8-2-29.7c0 0-9.8-3.1-32.1 11.8c-8.7-2.2-18-3.3-27.3-3.3c-10.2 0-20.5 1.3-30.2 3.9C74.4-2.9 64.3.3 64.3.3c-6.6 16.5-2.5 28.8-1.3 31.8c-7.8 8.4-12.5 19.1-12.5 32.2c0 9.9 1.1 18.8 3.9 26.5c-13.2-.5-34-.3-54.4 3.8l.2.9c20.4-4.1 41.4-4.2 54.5-3.7c.6 1.6 1.3 3.2 2 4.7c-13 .4-35.1 2.1-56.3 8.1l.3.9c21.4-6 43.7-7.6 56.6-8c7.8 14.4 23 23.8 50.2 26.7c-3.9 2.6-7.8 7-9.4 14.5c-5.3 2.5-21.9 8.7-31.9-8.5c0 0-5.6-10.2-16.3-11c0 0-10.4-.2-.7 6.5c0 0 6.9 3.3 11.7 15.6c0 0 6.3 21 36.4 14.2V177s-.6 7.7-7.7 10.2c0 0-4.2 2.9.3 4.5c0 0 19.5 1.6 19.5-14.4v-23.6s-.8-9.4 3.8-12.6v38.8s-.3 9.3-5.1 12.8c0 0-3.2 5.7 3.8 4.2c0 0 13.4-1.9 14-17.6l.3-39.3h3.2l.3 39.3c.6 15.6 14 17.6 14 17.6c7 1.6 3.8-4.2 3.8-4.2c-4.8-3.5-5.1-12.8-5.1-12.8v-38.5c4.6 3.6 3.8 12.3 3.8 12.3v23.6c0 16 19.5 14.4 19.5 14.4c4.5-1.6.3-4.5.3-4.5c-7-2.6-7.7-10.2-7.7-10.2v-31c0-12.1-5.1-18.5-10.1-21.8c29-2.9 42.9-12.2 49.3-26.8c12.7.3 35.6 1.9 57.4 8.1l.3-.9c-21.7-6.1-44.4-7.7-57.3-8.1c.6-1.5 1.1-3 1.6-4.6c13.4-.5 35.1-.5 56.3 3.7m0 0"/><path fill="#F5CCB3" d="M174.6 63.7c6.2 5.7 9.9 12.5 9.9 19.8c0 34.4-25.6 35.3-57.2 35.3S70.1 114 70.1 83.5c0-7.3 3.6-14.1 9.8-19.7c10.3-9.4 27.7-4.4 47.4-4.4s37-5.1 47.3 4.3m0 0"/><path fill="#FFF" d="M108.3 85.3c0 9.5-5.3 17.1-11.9 17.1s-11.9-7.7-11.9-17.1c0-9.5 5.3-17.1 11.9-17.1c6.6-.1 11.9 7.6 11.9 17.1m0 0"/><path fill="#AF5C51" d="M104.5 85.5c0 6.3-3.6 11.4-7.9 11.4c-4.4 0-7.9-5.1-7.9-11.4s3.6-11.4 7.9-11.4s7.9 5.1 7.9 11.4m0 0"/><path fill="#FFF" d="M172.2 85.3c0 9.5-5.3 17.1-11.9 17.1s-11.9-7.7-11.9-17.1c0-9.5 5.3-17.1 11.9-17.1c6.5-.1 11.9 7.6 11.9 17.1m0 0"/><path fill="#AF5C51" d="M168.3 85.5c0 6.3-3.6 11.4-7.9 11.4c-4.4 0-7.9-5.1-7.9-11.4s3.6-11.4 7.9-11.4c4.4 0 7.9 5.1 7.9 11.4m-37.8 15c0 1.6-1.3 3-3 3c-1.6 0-3-1.3-3-3s1.3-3 3-3c1.6 0 3 1.3 3 3m-9.9 7.5c-.2-.5.1-1 .6-1.2s1 .1 1.2.6c.8 2.2 2.8 3.6 5.1 3.6s4.3-1.5 5.1-3.6c.2-.5.7-.8 1.2-.6s.8.7.6 1.2c-1 2.9-3.8 4.9-6.9 4.9s-5.9-2-6.9-4.9m0 0"/><path fill="#C4E5D9" d="M54.5 121.6c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4s.9-1.4 2.1-1.4s2.1.6 2.1 1.4m5.8 3.2c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4s.9-1.4 2.1-1.4s2.1.6 2.1 1.4m3.5 4.2c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4s.9-1.4 2.1-1.4c1.2-.1 2.1.6 2.1 1.4m3.2 4.8c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4s.9-1.4 2.1-1.4c1.2-.1 2.1.6 2.1 1.4m3.5 4.4c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4s.9-1.4 2.1-1.4s2.1.6 2.1 1.4m4.8 3.9c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4s.9-1.4 2.1-1.4c1.2-.1 2.1.6 2.1 1.4m6.7 2.5c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4s.9-1.4 2.1-1.4s2.1.6 2.1 1.4m6.7 0c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4s.9-1.4 2.1-1.4s2.1.6 2.1 1.4m6.8-1.1c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4s.9-1.4 2.1-1.4c1.1 0 2.1.6 2.1 1.4m0 0"/></svg>
            </Link>
            <Link href="#" className="mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 256 222"><path d="m128 0l128 221.705H0z"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}